import * as React from 'react';
import { Component } from 'react';
import './App.css';
import Activity from '../activity/Activity';
import AddActivity from '../add-activity/AddActivity';
import CartSummary from '../cart/CartSummary';
import { Grid } from 'semantic-ui-react';
import Header from '../header/Header';
import { Switch, Route } from 'react-router-dom';
import { ActivityI } from '../../models/activity';

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/activities';

interface State {
  availableActivity: Array<AvailableActivity>;
  cart: Array<Object>;
}

interface AvailableActivity extends ActivityI {
  canEdit: boolean;
}

const state: State = {
    availableActivity: [],
    cart: [],
  };

class App extends Component {

  componentDidMount () {
    // better way to set state then looping through?
    console.log('componentDidMount()~');
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then((data) => {
        console.log('data from local api: ', data);
        for (let x = 0; x < data.length; x++) {
          data[x].time = this.formatTime(data[x].date);
          data[x].date = this.formatDate(data[x].date);
          data[x].day = this.getDayAsString(data[x].date);
          state.availableActivity.push(data[x]);
        }
        console.log('state after fetch: ', state);
        this.setState(state);
      })
      .catch((err) => {
        console.log('error getting data', err);
      });
  }

  formatTime (date: Date) {
    let formattedTime: any;
    formattedTime = new Date(date);
    formattedTime = formattedTime.toLocaleTimeString();
    return formattedTime;
  }

  formatDate (date: Date) {
    let formattedDate: any;
    formattedDate = new Date(date);
    formattedDate = formattedDate.toLocaleDateString();
    return formattedDate;
  }

  getDayAsString (date: Date) {
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

  activitySelection (data: any, e: any) {
    state.cart.push(data);
    console.log('Cart Selection: ', state.cart);
    this.setState(state);
  }

  render() {

    const activityComponents = state.availableActivity.map((activity, index) => (
      <Activity
        index={index}
        activity={activity}
        key={activity.activity_id}
        onClick={this.activitySelection}
      />
    ));

    return (
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/'>
              <Grid>
                {activityComponents}
              </Grid>
            </Route>
            <Route 
              exact
              path='/add' 
              render={() => (
              <AddActivity /> 
            )}
            />
            <Route 
              exact
              path='/cart'
              render={() => (
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
