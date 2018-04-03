import * as React from 'react';
import { Component } from 'react';
import { Form } from 'semantic-ui-react';

interface DateTimeInterface {
  startDate: string;
  endDate: string;
  time: string;
}
let dateTime: DateTimeInterface = { startDate: '', endDate: '', time: '' };

export default class DatePicker extends Component<any, any> {

  // setState here instead? Getting errors using it
  createDateTime = (e: any) => {
    const value = e.target.value;
    dateTime[e.target.name] = value;
    this.props.getDateTime(dateTime);
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
          label='Choose Time'
          type='time'
          name='time'
          width={6}
          // value={this.state.newActivity.time}
          onChange={this.createDateTime}
        />
      </Form.Group>
    );
  }
}
