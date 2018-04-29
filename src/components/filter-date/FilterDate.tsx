import * as React from 'react';
import { Dropdown } from 'semantic-ui-react';

const FilterDate = (props: any) => {
  return (
    <Dropdown
      button
      className='icon'
      floating
      labeled
      icon='calendar outline'
      options={props.dateFilterOptions}
      text='Filter Date'
      onChange={props.onChange}
    />
  );
};

export default FilterDate;