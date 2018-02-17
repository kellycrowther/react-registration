import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import AddActivity from './AddActivity';
import CartSummary from './CartSummary';

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/activities';

const state =
  {
    availableActivity: [
      // {
      //   activityName: 'Glass Fusing',
      //   date: '2018-6-8',
      //   time: '10:30am',
      //   location: 'Lakeside Activity Center',
      //   ageRestriction: '18 & Older',
      //   price: 30,
      //   uid: 1,
      //   canEdit: false
      // },
      // {
      //   activityName: 'Arts & Crafts',
      //   date: '2018-6-8',
      //   time: '10:30am',
      //   location: 'Lakeside Activity Center',
      //   ageRestriction: '5 & Older',
      //   price: 5,
      //   uid: 2,
      //   canEdit: false
      // },
      // {
      //   activityName: 'Parents Night Out',
      //   date: '2018-6-8',
      //   time: '10:30am',
      //   location: 'Lakeside Activity Center',
      //   ageRestriction: '5 & Older',
      //   price: 25,
      //   uid: 3,
      //   canEdit: false
      // }
    ],
    cart: []
  };

var nextUID = 4;

class App extends Component {


  componentDidMount = () => {
    //TODO: get the date/time into correct format
    //TODO: get true/false into correct format
    // should i be calling setState? Or better way?
    // better way to set state then looping through?
    console.log('componentDidMount()~');
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => {
        console.log('data from local api: ', data);
        for(let x=0; x < data.length; x++) {
          state.availableActivity.push(data[x]);
        };
        console.log('state after fetch: ', state);
        this.setState(state);
      })
      .catch((err) => {
        console.log('error getting data', err);
      });
  }

  activitySelection = e => {
    let myUID = parseInt(e.target.value, 10);
    let activitySelection = state.availableActivity.find(function(activity) {
      return activity.uid === myUID;
    });
    state.cart.push(activitySelection);
    console.log("Cart Selection: ", state.cart);
    this.setState(state);
  }

  addActivity = prop => {
    console.log("Add Activity Clicked!", prop);
    state.availableActivity.push({
      activityName: prop.activityName,
      date: prop.date,
      time: prop.time,
      location: prop.location,
      ageRestriction: prop.ageRestriction,
      price: prop.price,
      uid: nextUID
    });
    // console.log("State on App: ", state);
    this.setState(state);
    nextUID ++;
  }

  handleDoubleClick = (index, e) => {
    console.log("Double Click Fired", index);

    state.availableActivity[index].canEdit = !state.availableActivity[index].canEdit;

    this.setState(state);

    // console.log("Can Edit State: ", )
  }

  handleSave = state => {
    console.log("Save Clicked", state);
  }

  render() {

    const registrationComponents = state.availableActivity.map((activity, index) => (
      <Registration
        index={index}
        activity={activity}
        key={activity.uid}
        onChange={this.activitySelection}
        onDoubleClick={(e) => this.handleDoubleClick(index, e)}
      />
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Black Butte Ranch Recreation Registration</h1>
        <div className="app-main">
          <div className="registration">
            <h3>Class Registration</h3>
            <div>
              <div className="registration-titles">
                <h4>Select</h4>
                <h4>Class Name</h4>
                <h4>Date</h4>
                <h4>Day</h4>
                <h4>Time</h4>
                <h4>Location</h4>
                <h4>Age</h4>
                <h4>Price</h4>
              </div>
              { registrationComponents }
              <AddActivity
                addActivity={this.addActivity}
              />
            </div>
          </div>
          <CartSummary 
            cartSelection = {state.cart}
          />
        </div>
      </div>
    );
  }
}

export default App;
