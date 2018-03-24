import React from 'react';
import PropTypes from 'prop-types';

const AgeRestriction = (props) => {
  return (
    <div>
      <select
        onChange={props.onChange}
        placeholder="Age Restriction"
        name="ageRestriction"
      >
        {props.restrictions.map((ageLimit, index) => {
          return (
            <option
              key={index}
              name={ageLimit}
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

AgeRestriction.propTypes = {
  restrictions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default AgeRestriction;
