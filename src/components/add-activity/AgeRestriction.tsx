import * as React from 'react';
// import * as PropTypes from 'prop-types';

const AgeRestriction = (props: any) => {
  return (
    <div>
      <select
        onChange={props.onChange}
        // placeholder="Age Restriction"
        name="ageRestriction"
      >
        {props.restrictions.map((ageLimit: string, index: number) => {
          return (
            <option
              key={index}
              // name={ageLimit}
              value={ageLimit}
            >
              {ageLimit}
            </option>
          );
        })}
      </select>
    </div>
  );
};

// AgeRestriction.propTypes = {
//   restrictions: PropTypes.arrayOf(PropTypes.string).isRequired
// };

export default AgeRestriction;
