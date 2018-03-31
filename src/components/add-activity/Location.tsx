import * as React from 'react';

const Location = (props: any) => {
  return (
    <div>
      <select
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
      </select>
    </div>
  );
};

export default Location;
