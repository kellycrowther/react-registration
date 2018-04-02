import * as React from 'react';
import { Component } from 'react';
import AgeRestriction from './AgeRestriction';
import Location from './Location';
import './AddActivity.css';
// import { ActivityI } from '../../models/activity';
import { Form, Checkbox } from 'semantic-ui-react';
import SingleDate from './SingleDate';
import MultipleDate from './MultipleDate';
import Category from './Category';

// interface State {
//   newActivity: ActivityI;
//   ageLimits: string[];
//   selectedAge: string;
//   locations: string[];
// }

export default class AddActivity extends Component<any, any> {

  state = {
    newActivity: {
      activityName: '',
      date: '',
      time: '',
      location: '',
      ageRestriction: '',
      price: 0,
      canEdit: false,
      categories: []
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
    multipleDates: false,
    categories: [
      'Uncategorized',
      'Indoor Class',
      'Outdoor Class',
      'Indoor Instruction'
    ]
  };

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

  onToggle = (e: any) => {
    let value = !this.state.multipleDates;
    this.setState({
      multipleDates: value
    });
  }

  onSubmit = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    // console.log('My Activity Added', this.state);
    this.props.addActivity(this.state.newActivity);
    this.setState({
      newActivity: {
        activityName: '',
        date: '',
        time: '',
        location: '',
        ageRestriction: '',
        price: 0
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

          <Checkbox
            toggle
            onChange={this.onToggle}
            label='Multiple Dates'
          />

          {
            this.state.multipleDates ? 

            <MultipleDate
              onChange={this.onInputChange}
            />

            :

            <SingleDate
              onChange={this.onInputChange}
            />
          }

        </Form>
    );
  }
}
