import * as React from 'react';
import { Form } from 'semantic-ui-react';

const Location = (props: any) => {
  return (
    <Form.Field 
      label='Location'
      control='select' 
      onChange={props.onChange} 
      name='location'
    >
        {props.locations.map((location: string, index: number) => {
          return (
            <option
              key={index}
              value={location}
            >
              {location}
            </option>
          );
        })}
    </Form.Field>
  );
};

export default Location;
