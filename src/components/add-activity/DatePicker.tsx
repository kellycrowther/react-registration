import * as React from 'react';
import { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { AvailabilityInterface } from '../../models/AvailabilityInterface';

export default class DatePicker extends Component<any, any> {

  state: AvailabilityInterface = { 
    startDate: '',
    endDate: '',
    time: '',
    index: 0,
    quantity: 0,
    includedWeekdays: []
  };

  weekdays: Array<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  addIncludedDays = (dayValue: number ) => {
    let includedWeekday = this.state.includedWeekdays.indexOf(dayValue);
    if (includedWeekday === -1 ) {
        this.state.includedWeekdays.push(dayValue);
    } else {
      this.state.includedWeekdays.splice(includedWeekday, 1);
    }
    this.props.getDateTime(this.state);
  }

  createDateTime = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const index = this.props.index;
    this.state[name] = value;
    this.state.index = index;
    this.props.getDateTime(this.state);
  }

  render() {
    const weekdayComponents = this.weekdays.map((day, index) => (
      <Form.Checkbox
        label={day}
        key={index}
        name='includedWeekdays'
        onChange={(i) => this.addIncludedDays(index)}
      />
    ));

    return (
      <Segment>
        <Form.Group>

          <Form.Input
            label='Start Date'
            type='date'
            name='startDate'
            width={6}
            onChange={this.createDateTime}
          />

          <Form.Input
            label='End Date'
            type='date'
            name='endDate'
            width={6}
            onChange={this.createDateTime}
          />

          <Form.Input
            label='Start Time'
            type='time'
            name='time'
            width={4}
            onChange={this.createDateTime}
          />

          <Form.Input
            label='Quantity Available On These Dates'
            type='number'
            name='quantity'
            width={4}
            onChange={this.createDateTime}
          />
        </Form.Group>

        <Form.Group inline>
          <label>Include Only These Days:</label>
          {weekdayComponents}
        </Form.Group>
      </Segment>
    );
  }
}
