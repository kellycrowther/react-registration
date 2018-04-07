import * as React from 'react';
import { Form } from 'semantic-ui-react';

const Category = (props: any) => {
  return (
    <Form.Field
      label='Category'
      control='select'
      onChange={props.onChange}
      name='category'
    >
      {props.categories.map((category: string, index: number) => {
        return (
          <option
            key={index}
            value={category}
          >
            {category}
          </option>
        );
      })}
    </Form.Field>
  );
};

export default Category;
