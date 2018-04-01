import * as React from 'react';
import { Component } from 'react';
import AgeRestriction from './AgeRestriction';
import Location from './Location';
// import { ActivityI } from '../../models/activity';
import { Form } from 'semantic-ui-react';

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
      canEdit: false
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
        <Form onSubmit={this.onSubmit}>
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
              label='Choose Date'
              type='date'
              name='date'
              value={this.state.newActivity.date}
              onChange={this.onInputChange}
            />

            <Form.Input 
              label='Choose Time'
              type='time'
              name='time'
              value={this.state.newActivity.time}
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
        </Form>
    );
  }
}
