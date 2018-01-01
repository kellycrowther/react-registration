import React from 'react';


const Location = (props) => (

    <div>
        <select>
            {props.locations.locations.map((location, index) => {
                return (
                    <option
                        key = {index}
                        value={location}
                        onChange={props.onChange}
                        checked={props.locations.selectedLocation === location}
                        placeholder="Location"
                    >
                        {location}
                    </option>
                );
            })}
        </select>
    </div>
);

export default Location;
