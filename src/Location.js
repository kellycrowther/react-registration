import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
    return (
        <div>
            <select
                onChange={props.onChange}
                placeholder="Location"
            >
                {props.locations.map((location, index) => {
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

Location.propTypes = {
    locations: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Location;
