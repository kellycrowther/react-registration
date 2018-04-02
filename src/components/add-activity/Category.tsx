import * as React from 'react';
import { Form } from 'semantic-ui-react';

const Category = (props: any) => {
  return (
    <Form.Group inline>
      <label>Categories</label>
      {props.categories.map((category: string, index: number) => {
        return (
          <Form.Field
            key={index}
            label={category} 
            control='input' 
            type='checkbox' 
          />
        );
      })}
    </Form.Group>
  );
};

export default Category;