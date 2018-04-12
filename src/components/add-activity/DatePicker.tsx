import * as React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { DateTimeInterface } from '../../models/DateTimeInterface';

export default class DatePicker extends Component<any, any> {

  dateTime: DateTimeInterface = { startDate: '', endDate: '', time: '', index: 0 };

  // setState here instead? Getting errors using it
  createDateTime = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const index = this.props.index;
    this.dateTime[name] = value;
    this.dateTime.index = index;
    this.props.getDateTime(this.dateTime);
  }

  render() {
    return (
      <Form.Group>
        <Form.Input
          label='Start Date'
          type='date'
          name='startDate'
          width={6}
          // value={this.state.newActivity.date}
          onChange={this.createDateTime}
        />

        <Form.Input
          label='End Date'
          type='date'
          name='endDate'
          width={6}
          // value={this.state.newActivity.date}
          onChange={this.createDateTime}
        />

        <Form.Input
          label='Start Time'
          type='time'
          name='time'
          width={4}
          // value={this.state.newActivity.time}
          onChange={this.createDateTime}
        />

        <Form.Input
          label='Quantity Available On These Dates'
          type='number'
          name='quantity'
          width={4}
          onChange={this.props.onChange}
        />
      </Form.Group>
    );
  }
}
