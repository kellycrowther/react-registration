import * as React from 'react';
import { Form } from 'semantic-ui-react';

const AgeRestriction = (props: any) => {
  return (
    <Form.Field
      label='Age Restriction'
      control='select'
      onChange={props.onChange}
      name='ageRestriction'
    >
      {props.restrictions.map((ageLimit: string, index: number) => {
        return (
          <option
            key={index}
            value={ageLimit}
          >
            {ageLimit}
          </option>
        );
      })}
    </Form.Field>
  );
};

export default AgeRestriction;
