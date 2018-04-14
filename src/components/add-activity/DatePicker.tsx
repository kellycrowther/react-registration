import * as React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AvailabilityInterface } from '../../models/AvailabilityInterface';

export default class DatePicker extends Component<any, any> {

  state: AvailabilityInterface = { 
    startDate: '',
    endDate: '',
    time: '',
    index: 0,
    quantity: 0
  };

  // setState here instead? Getting errors using it
  createDateTime = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const index = this.props.index;
    this.state[name] = value;
    this.state.index = index;
    this.props.getDateTime(this.state);
  }

  render() {
    return (
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
    );
  }
}
