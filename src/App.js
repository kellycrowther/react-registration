import React, { Component } from 'react';
import './App.css';
import Registration from './components/activity/Registration';
import AddActivity from './components/add-activity/AddActivity';
import CartSummary from './components/cart/CartSummary';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom'

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

  activitySelection = (data, e) => {
    state.cart.push(data);
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
        onClick={this.activitySelection}
      />
    ));

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Grid>
              {registrationComponents}
            </Grid>
          </Route>
          <Route exact path='/add' render={() => (
            <AddActivity
              addActivity={this.addActivity}
            /> )}
          />
          <Route exact path='/cart' render={() => (
            <CartSummary
              cartSelection={state.cart}
            /> )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
