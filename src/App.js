import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import AddActivity from './AddActivity';

const state = [
  {
    activityName: 'Glass Fusing',
    date: '2018-6-8', 
    time: '10:30am',
    location: 'Lakeside Activity Center',
    ageRestriction: '18 & Older',
    price: 30,
    uid: 1
  },
  {
    activityName: 'Arts & Crafts',
    date: '2018-6-8', 
    time: '10:30am',
    location: 'Lakeside Activity Center',
    ageRestriction: '5 & Older',
    price: 5,
    uid: 2
  },
  {
    activityName: 'Parents Night Out',
    date: '2018-6-8', 
    time: '10:30am',
    location: 'Lakeside Activity Center',
    ageRestriction: '5 & Older',
    price: 25,
    uid: 3
  }
];

var nextUID = 4;

// let state = [];

class App extends Component {

  addActivity = prop => {
    console.log("Add Activity Clicked!", prop);
    state.push({
      activityName: prop.activityName,
      date: prop.date,
      time: prop.time,
      location: prop.location,
      ageRestriction: '5 & Older',
      price: prop.price,
      uid: nextUID
    });
    // console.log("State on App: ", state);
    this.setState(state);
    nextUID ++;
  }

  render() {

    const registrationComponents = state.map((activity, index) => (
      <Registration
        index={index}
        activity={activity}
        key={activity.uid}
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
          </div>
          <div className="cartSummary">
            <h3>Cart Summary</h3>
            <div>
              <h5>My Classes</h5>
              <h5>Price</h5>
            </div>
            <div>
              <p>Some Class</p>
              <p>Some Price</p>
            </div>
            <h4>Total: $55</h4>
            <button>
              Checkout
          </button>
          </div>
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
