import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddActivity extends Component {

    state = {
        activityName: '',
        date: 1528441200000, //in milliseconds
        location: '',
        ageRestriction: '',
        price: 30,
        uid: 1
    };

    onNameChange = e => {
        const activityName = e.target.value;
        // console.log('Name has changed', activityName);
        this.setState({ activityName: activityName });
        // console.log('State: ', this.state);
    }

    onSubmit = e => {
        if(e) e.preventDefault();
        console.log('My Activity Added', this.state.activityName);
        this.props.addActivity(this.state.activityName);
        this.setState({ name: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Class Name:<br />
                <input 
                    type="text" 
                    placeholder="Class Name" 
                    value={this.state.activityName}
                    onChange={this.onNameChange}
                    /><br />
                Enter Date:<br />
                <input type="date" placeholder="Enter Date" /><br />
                Enter Time:<br />
                <input type="time" placeholder="Enter Time" /><br />
                Enter Location:<br />
                <input type="text" placeholder="Location" /><br />
                Age:<br />
                <input type="text" placeholder="Age" /><br />
                Price:<br />
                <input type="text" placeholder="Price" /><br />
                <input type="submit" value="Add Activity" />
            </form>
        );
    };
}

// AddActivity.PropTypes = {}
