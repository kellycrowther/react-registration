import React from 'react';
import PropTypes from 'prop-types';

const Registration = props => {

    return (
        <div 
            className="activities"
            onDoubleClick={props.onDoubleClick}
        >
            <input
                type="checkbox"
                id="activity"
                value={props.activity.uid}
                onChange={props.onChange}
            />
            <p>{props.activity.activityName}</p>
            <p>{props.activity.date}</p>
            <p>Friday</p>
            <p>{props.activity.time}</p>
            <p>{props.activity.location}</p>
            <p>{props.activity.ageRestriction}</p>
            <p>${props.activity.price}</p>
        </div>
    );
}

Registration.propTypes = {
    activity: PropTypes.shape({
        activityName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        // time: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        ageRestriction: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        uid: PropTypes.number.isRequired
    })
}

export default Registration;