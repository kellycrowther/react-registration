import * as React from 'react';
import { Component } from 'react';
import AgeRestriction from './AgeRestriction';
import Location from './Location';
import './AddActivity.css';
// import { ActivityI } from '../../models/activity';
import { Form } from 'semantic-ui-react';
import DatePicker from './DatePicker';
import Category from './Category';

// interface State {
//   newActivity: ActivityI;
//   ageLimits: string[];
//   selectedAge: string;
//   locations: string[];
// }

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/activities';

export default class AddActivity extends Component<any, any> {

  state = {
    newActivity: {
      activityName: '',
      location: '',
      ageRestriction: '',
      price: 0,
      canEdit: false,
      categories: [],
      dateTimes: []
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
      'Uncategorized',
      'Indoor Class',
      'Outdoor Class',
      'Indoor Instruction'
    ]
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
      categories: this.state.newActivity.categories,
      dateTimes: this.state.newActivity.dateTimes
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

  getDateTime = (dateTime: any) => {
    this.setState({
      newActivity: {
        ...this.state.newActivity,
        dateTimes: dateTime
      }
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

            <Form.Input
              label='Price' 
              type='number'
              name='price'
              value={this.state.newActivity.price}
              onChange={this.onInputChange}
            />

            <Form.Button>Submit</Form.Button>
          </Form.Group>

          <Category 
            categories={this.state.categories}
            onChange={this.onInputChange}
          />

          <DatePicker
            getDateTime={this.getDateTime}
          />

        </Form>
    );
  }
}
