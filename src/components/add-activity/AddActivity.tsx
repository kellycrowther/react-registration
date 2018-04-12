import * as React from 'react';
import { Component } from 'react';
import AgeRestriction from './AgeRestriction';
import Location from './Location';
import './AddActivity.css';
import { Form, Button, Icon } from 'semantic-ui-react';
import DatePicker from './DatePicker';
import Category from './Category';
import { DateTimeInterface } from '../../models/DateTimeInterface';

interface StateInterface {
  newActivity: NewActivityInterface;
  ageLimits: string[];
  selectedAge: string;
  locations: string[];
  categories: string[];
  dateComponent: number;
}

interface NewActivityInterface {
  activityName: string;
  location: string;
  ageRestriction: string;
  price: number;
  canEdit: boolean;
  category: string;
  dateTimes: Array<DateTimeInterface>;
  quantity: number;
}

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/activities';

export default class AddActivity extends Component<any, any> {

  state: StateInterface = {
    newActivity: {
      activityName: '',
      location: '',
      ageRestriction: '',
      price: 0,
      canEdit: false,
      category: '',
      dateTimes: [],
      quantity: 0
    },
    ageLimits: [
      '',
      '5 & Up',
      '10 & Up',
      '18 & Up',
      '21 & Up'
    ],
    selectedAge: '',
    locations: [
      '',
      'Lakeside',
      'GMRC'
    ],
    categories: [
      '',
      'Indoor Activities',
      'Outdoor Activities',
      'Outdoor Instruction',
      'Bike Rentals',
      'Boat Rentals',
      'Exercise Classes',
      'Swimming',
      'Tennis'
    ],
    // dateComponent data is just used to create additional components
    dateComponent: 1
  };

  onSubmit = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    console.log('My Activity Added', this.state);
    let activity = {
      activityName: this.state.newActivity.activityName,
      location: this.state.newActivity.location,
      ageRestriction: this.state.newActivity.ageRestriction,
      price: this.state.newActivity.price,
      canEdit: this.state.newActivity.canEdit,
      category: this.state.newActivity.category,
      dateTimes: this.state.newActivity.dateTimes,
      quantity: this.state.newActivity.quantity
    };

    this.addActivity(activity);
    this.resetState();
  }

  public addActivity(data: any) {
    fetch(API + DEFAULT_QUERY, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      res.json();
      console.log('Success:', res);
    })
      .catch(error => console.error('Error:', error));
  }

  // target.name must eqaul state.newActivity.activityName/date/time
  onInputChange = (e: any) => {
    // console.log('My Event: ', e.target.value);
    const value = e.target.value;
    this.setState({
      newActivity: {
        ...this.state.newActivity,
        [e.target.name]: value
      }
    });
  }

  getDateTime = (dateTime: any, name: string, value: string) => {
    var data = this.state.newActivity.dateTimes;
    let index = dateTime.index;
    // return object in state that has equivalent index key of dateTime parameter
    const result = data.find((group: any) => group.index === index);

    // if can't find index key, push this object into state
    if (result === undefined) {
      data.push(dateTime);
    // if can find index key, update the found object with new object
    // and add back to state leaving other objects un-mutated
    } else {
      var newArray = data.slice();
      newArray.push(dateTime);
      this.setState({ data: newArray });
    }
    console.log(this.state.newActivity.dateTimes);
  }

  addDatePickerComponent = () => {
    console.log('addDatePickerComponent');
    this.setState({
      dateComponent: this.state.dateComponent + 1
    });
  }

  resetState = () => {
    this.setState({
      newActivity: {
        activityName: '',
        date: '',
        time: '',
        location: '',
        ageRestriction: '',
        price: 0,
        categories: [],
        dateTimes: []
      }
    });
  }

  render() {

    const datePickerComponents = [];

    for (var i = 0; i < this.state.dateComponent; i += 1) {
      datePickerComponents.push(
        <DatePicker
          getDateTime={this.getDateTime}
          onChange={this.onInputChange}
          addDatePickerComponent={this.addDatePickerComponent}
          key={i}
          index={i}
        />
      );
    }

    // const datePickerComponents = this.state.dateComponent.map((datePicker, index) => (
    //   <DatePicker
    //     getDateTime={this.getDateTime}
    //     onChange={this.onInputChange}
    //     addDatePickerComponent={this.addDatePickerComponent}
    //     key={index}
    //     index={index}
    //   />
    // ));

    return (
        <Form onSubmit={this.onSubmit} className='add-activity-form'>
          <Form.Group widths='equal'>
            <Form.Input 
              fluid 
              label='Activity Name'
              name='activityName'
              placeholder='Activity Name' 
              onChange={this.onInputChange}
            />
            
            <Location
              locations={this.state.locations}
              onChange={this.onInputChange}
            />

            <AgeRestriction
              restrictions={this.state.ageLimits}
              onChange={this.onInputChange}
            />

            <Category
              categories={this.state.categories}
              onChange={this.onInputChange}
            />

            <Form.Input
              label='Price' 
              type='number'
              name='price'
              value={this.state.newActivity.price}
              onChange={this.onInputChange}
            />

          </Form.Group>

            <Button
              icon
              inverted
              color='green'
              type='button'
              onClick={this.addDatePickerComponent}
            >
              <Icon name='plus' />
              Add New Date/Time
            </Button>

            {datePickerComponents}

          <Form.Button>Submit</Form.Button>

        </Form>
    );
  }
}
