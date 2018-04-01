import * as React from 'react';
import { Form } from 'semantic-ui-react';

const MultipleDate = (props: any) => {
  return (
    <Form.Group>
      <Form.Input
        label='Start Date'
        type='date'
        name='date'
        width={6}
        // value={this.state.newActivity.date}
        onChange={props.onChange}
      />

      <Form.Input
        label='End Date'
        type='date'
        name='date'
        width={6}
        // value={this.state.newActivity.date}
        onChange={props.onChange}
      />

      <Form.Input
        label='Choose Time'
        type='time'
        name='time'
        width={6}
        // value={this.state.newActivity.time}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default MultipleDate;
