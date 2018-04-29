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
import FilterDate  from '../filter-date/FilterDate';

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
    { key: 4, text: 'Outdoor Instruction' },
    { key: 5, text: 'Bike Rentals' },
    { key: 6, text: 'Boat Rentals' },
    { key: 7, text: 'Exercise Classes' },
    { key: 8, text: 'Swimming' },
    { key: 9, text: 'Tennis' },
    { key: 10, text: 'All' }
  ];

  const dateFilterOptions: any = [
    { key: 1, text: 'All' },
    { key: 2, text: 'Today' },
    { key: 3, text: 'Tomorrow' },
    { key: 4, text: 'Upcoming Week' },
    { key: 5, text: 'Upcoming Month' }
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
    let categoryFilter = e.target.textContent;
    if (categoryFilter === 'All') {
      this.setState({ availableActivity: this.initialActivities });
    } else {
      let filteredArray = this.initialActivities.filter(activity => activity.category === categoryFilter);
      this.setState({ availableActivity: filteredArray });
    }
  }

  sortDate = (e: any) => {
    console.log('sortDate: ', e.target.textContent);
    let dateFilter = e.target.textContent;
    let todaysDate = new Date();
    let oneDay = 86400000; // in milliseconds
    let filteredArray: Array<AvailableActivity>;
    switch (dateFilter) {
      case 'All':
        this.setState({ availableActivity: this.initialActivities });
        break;
      case 'Today':
        filteredArray = this.initialActivities.filter(activity => {
          let activityDate: any = new Date(activity.date_time).toLocaleDateString();
          return activityDate === todaysDate.toLocaleDateString();
        });
        this.setState({ availableActivity: filteredArray });
        break;
      case 'Tomorrow':
        let tomorrow = new Date(todaysDate.getTime() + oneDay).toLocaleDateString();
        filteredArray = this.initialActivities.filter(activity => {
          let activityDate: any = new Date(activity.date_time).toLocaleDateString();
          return activityDate === tomorrow;
        });
        this.setState({ availableActivity: filteredArray });
        break;
      case 'Upcoming Week':
        let upcomingWeek = new Date(todaysDate.getTime() + (oneDay * 7));
        filteredArray = this.initialActivities.filter(activity => {
          let activityDate: any = new Date(activity.date_time);
          return activityDate <= upcomingWeek && activityDate >= todaysDate.getTime();
        });
        this.setState({ availableActivity: filteredArray });
        break;
      case 'Upcoming Month':
        let upcomingMonth = new Date(todaysDate.getTime() + (oneDay * 31));
        filteredArray = this.initialActivities.filter(activity => {
          let activityDate: any = new Date(activity.date_time);
          return activityDate <= upcomingMonth && activityDate >= todaysDate.getTime();
        });
        this.setState({ availableActivity: filteredArray });
        break;
      default:
        break;
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
                <FilterDate 
                  dateFilterOptions={dateFilterOptions}
                  onChange={this.sortDate}
                />
                <Filter
                  filterOptions={filterOptions}
                  onChange={this.filterValue}
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
