import * as React from 'react';
// import * as PropTypes from 'prop-types';

const Location = (props: any) => {
  return (
    <div>
      <select
        onChange={props.onChange}
        // placeholder="Location"
        name="location"
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

// Location.propTypes = {
//   locations: PropTypes.arrayOf(PropTypes.string).isRequired
// };

export default Location;
