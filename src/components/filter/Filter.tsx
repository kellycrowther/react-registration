import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

const Filter = (props: any) => {
  return (
    <Dropdown
      button
      className='icon'
      floating
      labeled
      icon='filter'
      options={props.filterOptions}
      text='Filter Category'
      onChange={props.onChange}
    />
  );
};

export default Filter;
