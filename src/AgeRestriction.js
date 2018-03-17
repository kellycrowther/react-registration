import React from 'react';


const AgeRestriction = (props) => (
    
    <div>
        <select
            onChange={props.onChange}
            placeholder="Age Restriction"
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

export default AgeRestriction;
