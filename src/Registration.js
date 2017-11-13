import React from 'react';
import PropTypes from 'prop-types';


const Registration = props => {
    return (
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" id="activity" />
                </td>
                <td>{props.activity.activityName}</td>
                <td>June 8</td>
                <td>Friday</td>
                <td>10:30am</td>
                <td>{props.activity.location}</td>
                <td>{props.activity.ageRestriction}</td>
                <td>${props.activity.price}</td>
            </tr>
        </tbody>
    );
}

Registration.propTypes = {
    activity: PropTypes.shape({
        activityName: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        ageRestriction: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        uid: PropTypes.number.isRequired
    })
}

export default Registration;