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
    availableActivity: [],
    cart: []
  };

var nextUID; // set in componentDidMount

class App extends Component {


  componentDidMount = () => {
    // should i be calling setState? Or better way?
    // better way to set state then looping through?
    console.log('componentDidMount()~');
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => {
        console.log('data from local api: ', data);
        for(let x=0; x < data.length; x++) {
          data[x].time = this.formatTime(data[x].date);
          data[x].date = this.formatDate(data[x].date);
          data[x].day = this.getDayAsString(data[x].date);
          state.availableActivity.push(data[x]);
        };
        console.log('state after fetch: ', state);
        nextUID = (data.length + 1);
        this.setState(state);
      })
      .catch((err) => {
        console.log('error getting data', err);
      });
  }

  formatTime = (date) => {
    let formattedTime = new Date(date);
    // console.log('Formatted Time: ', formattedTime);
    formattedTime = formattedTime.toLocaleTimeString();
    return formattedTime;
  }

  formatDate = (date) => {
    let formattedDate = new Date(date);
    formattedDate = formattedDate.toLocaleDateString();
    return formattedDate;
  }

  getDayAsString = (date) => {
    let formattedDate = new Date(date);
    let daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    let index = formattedDate.getDay();
    let day = daysOfWeek[index];
    return day;
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
    // console.log("Add Activity Clicked!", prop);
    let activity = {
      activityName: prop.activityName,
      date: prop.date,
      time: prop.time,
      location: prop.location,
      ageRestriction: prop.ageRestriction,
      price: prop.price,
      canEdit: prop.canEdit,
      uid: nextUID
    };

    // state.availableActivity.push(activity);
    console.log("State on App: ", state);

    this.postToDatabase(activity);
  }

  postToDatabase = (data) => {
    fetch(API + DEFAULT_QUERY, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      res.json();
      console.log('Success:', res);
      this.setState(state);
      nextUID++;
    })
      .catch(error => console.error('Error:', error));
      // .then(response => console.log('Success:', response));
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
