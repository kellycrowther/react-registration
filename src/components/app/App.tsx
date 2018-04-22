import * as React from 'react';
import { Component } from 'react';
import './App.css';
import Activity from '../activity/Activity';
import AddActivity from '../add-activity/AddActivity';
import CartSummary from '../cart/CartSummary';
import { Grid, Dimmer, Loader, Icon, Transition } from 'semantic-ui-react';
import Header from '../header/Header';
import Filter from '../filter/Filter';
import { Switch, Route } from 'react-router-dom';
import { ActivityI } from '../../models/activity';

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/activities';

interface State {
  availableActivity: Array<AvailableActivity>;
  cart: Array<Object>;
  active: boolean;
  hide: number;
  show: number;
  visible: boolean;
}

interface AvailableActivity extends ActivityI {
  canEdit: boolean;
  category: string;
}

  const filterOptions: any = [
    { key: 1, text: 'Outdoor Activities' },
    { key: 2, text: 'Boat Rentals' },
    { key: 3, text: 'Indoor Activities'},
    { key: 4, text: 'All' }
  ];

class App extends Component<any, any> {

  state: State = {
    availableActivity: [],
    cart: [],
    active: false,
    hide: 2500,
    show: 0,
    visible: false
  };

  initialActivities: Array<AvailableActivity>;

  componentDidMount () {
    // better way to set state then looping through?
    console.log('componentDidMount()~');
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then((data) => {
        console.log('data from local api: ', data);
        for (let x = 0; x < data.length; x++) {
          data[x].day = this.getDayAsString(data[x].date);
          this.state.availableActivity.push(data[x]);
        }
        console.log('state after fetch: ', this.state);
        this.setState(this.state);
        this.initialActivities = this.state.availableActivity;
      })
      .catch((err) => {
        console.log('error getting data', err);
      });
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
    this.state.cart.push(data);
    console.log('Cart Selection: ', this.state.cart);
    this.setState(this.state);
  }

  toggleDimmer = () => {
    this.setState({ active: !this.state.active });
  }

  toggleSuccess = () => {
    this.setState({ visible: !this.state.visible });
  }

  filterValue = (e: any) => {
    console.log('filterValue: ', e.target.textContent);
    let categoryFilter = e.target.textContent;
    if (categoryFilter === 'All') {
      this.setState({ availableActivity: this.initialActivities });
    } else {
      console.log(this.initialActivities);
      let filteredArray = this.initialActivities.filter(activity => activity.category === categoryFilter);
      this.setState({ availableActivity: filteredArray });
    }
  }

  render() {

    const { hide, show } = this.state;

    const activityComponents = this.state.availableActivity.map((activity, index) => (
      <Activity
        index={index}
        activity={activity}
        key={activity.date_id}
        onClick={this.activitySelection}
      />
    ));

    return (
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/'>
            <div>
              <div className='my-filter'>
                <Filter
                  filterOptions={filterOptions}
                  onChange={this.filterValue}
                  className='my-filter'
                />
              </div>
              <Grid>
                {activityComponents}
              </Grid>
            </div>
            </Route>
            <Route 
              exact
              path='/add' 
              render={() => (
              <AddActivity 
                toggleDimmer={this.toggleDimmer}
                toggleSuccess={this.toggleSuccess}
              /> 
            )}
            />
            <Route 
              exact
              path='/cart'
              render={() => (
              <CartSummary
                cartSelection={this.state.cart}
              /> )}
            />
          </Switch>

        <Dimmer active={this.state.active}>
          <Loader>Processing</Loader>
        </Dimmer>

        <Transition 
          duration={{ hide, show }}
          visible={this.state.visible}
        >
          <Dimmer>
            <Icon
              name='checkmark box'
              size='huge'
              color='green'
              className='processing-complete'
            />
          </Dimmer>
        </Transition>
      </div>
    );
  }
}

export default App;
