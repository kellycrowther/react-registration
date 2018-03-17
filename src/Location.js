import React from 'react';


const Location = (props) => (

    <div>
        <select 
            onChange={props.onChange}
            placeholder="Location"
        >
            {props.locations.map((location, index) => {
                return (
                    <option
                        key = {index}
                        value={location}
                    >
                        {location}
                    </option>
                );
            })}
        </select>
    </div>
);

export default Location;
