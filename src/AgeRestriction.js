import React from 'react';


const AgeRestriction = (props) => (
    
    <div>
        <select>
        {props.restrictions.ageLimits.map((restriction, index) => {
            return (
                <option
                    key={index}
                    name={restriction.ageRestriction}
                    placeholder="Age Restriction"
                    value={restriction.ageRestriction}
                    checked={props.restrictions.selectedAge === restriction.ageRestriction}
                    onChange={props.onChange}
                >
                    {restriction.ageRestriction}
                </option>
            );
        })}
        </select>
    </div>
);

export default AgeRestriction;
