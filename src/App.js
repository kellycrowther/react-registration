import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import AddActivity from './AddActivity';
import CartSummary from './CartSummary';

const state =
  {
    availableActivity: [
      {
        activityName: 'Glass Fusing',
        date: '2018-6-8',
        time: '10:30am',
        location: 'Lakeside Activity Center',
        ageRestriction: '18 & Older',
        price: 30,
        uid: 1,
        canEdit: false
      },
      {
        activityName: 'Arts & Crafts',
        date: '2018-6-8',
        time: '10:30am',
        location: 'Lakeside Activity Center',
        ageRestriction: '5 & Older',
        price: 5,
        uid: 2,
        canEdit: false
      },
      {
        activityName: 'Parents Night Out',
        date: '2018-6-8',
        time: '10:30am',
        location: 'Lakeside Activity Center',
        ageRestriction: '5 & Older',
        price: 25,
        uid: 3,
        canEdit: false
      }
    ],
    cart: []
  };

var nextUID = 4;

// let state = [];

class App extends Component {


  activitySelection = e => {
    let myUID = parseInt(e.target.value, 10);
    let activitySelection = state.availableActivity.find(function(activity) {
      return activity.uid === myUID;
    });
    // console.log("My Index: ", activitySelection);
    state.cart.push(activitySelection);
    console.log("Cart Selection: ", state.cart);
    this.setState(state);
  }

  // cartClick = e => {
  //   console.log("Cart Click");
  //   cart.map((activity, index) => {
  //     // if()
  //     return console.log('Cart UID: ', activity);
  //   })
  // }

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
            <table>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Class Name</th>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Age</th>
                  <th>Price</th>
                </tr>
              </thead>
              { registrationComponents }
            </table>
            <button
              onClick={this.cartClick}
              >
              Add To Cart
            </button>
          </div>
          <CartSummary 
            cartSelection = {state.cart}
          />
        </div>
        <div className="add-activity">
          <h3>Add Activity</h3>
          <AddActivity 
            addActivity={this.addActivity}
          />
        </div>
      </div>
    );
  }
}

export default App;
