import React from 'react';


const Location = (props) => (

    <div>
        <label></label>
        <div>
            {props.locations.locations.map((location, index) => {
                return (
                    <label key={index}>
                        <input
                            name={location}
                            placeholder="Location"
                            value={location}
                            checked={props.locations.selectedLocation === location}
                            onChange={props.onChange}
                            type='radio' />
                        {location}
                    </label>
                );
            })}
        </div>
    </div>
);

export default Location;
