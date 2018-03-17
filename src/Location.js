import React from 'react';


const Location = (props) => (

    <div>
        <select onChange={props.onChange}>
            {props.locations.map((location, index) => {
                return (
                    <option
                        key = {index}
                        value={location}
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
