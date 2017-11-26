import React from 'react';


const AgeRestriction = (props) => (
    
    <div>
        <label className="form-label">{props.title}</label>
        <div className="checkbox-group">
            {props.restrictions.ageLimits.map((restriction, index) => {
                return (
                    <label key={index}>
                        <input
                            name={restriction.ageRestriction}
                            value={restriction.ageRestriction}
                            checked={props.restrictions.selectedAge === restriction.ageRestriction}
                            onChange={props.onChange}
                            type='radio' />
                             {restriction.ageRestriction}
                    </label>
                );
            })}
        </div>
    </div>
);
// onChange={props.controlFunc}
// checked={props.selectedOptions.indexOf(restriction) > -1}

export default AgeRestriction;