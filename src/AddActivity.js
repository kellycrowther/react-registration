import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AgeRestriction from './AgeRestriction';
import Location from './Location';

export default class AddActivity extends Component {

    state = {
        newActivity: {
            activityName: '',
            date: '',
            time: '',
            location: '',
            ageRestriction: '',
            price: 0
        },
        ageLimits: [
            '',
            '5 & Up',
            '10 & Up',
            '18 & Up',
            '21 & Up'
        ],
        selectedAge: '',
        locations: [
            '',
            'Lakeside',
            'GMRC'
        ]
    };

    // e.target.name === state.newActivity.activityName/date/time
    onInputChange = (e) => {
        // console.log('My Event: ', e.target);
        const value = e.target.value;
        this.setState({
            newActivity: {
                ...this.state.newActivity,
                [e.target.name]: value
            }
        });
    }

    onSubmit = e => {
        if(e) e.preventDefault();
        // console.log('My Activity Added', this.state.activityName);
        this.props.addActivity(this.state.newActivity);
        this.setState({ 
            newActivity: {
                activityName: '',
                date: '',
                time: '',
                location: '',
                ageRestriction: '',
                price: 0
            }
        });
    }

    render() {

        return (
            <form 
                onSubmit={this.onSubmit}
                className="activities"
            > 
                <input type="submit" value="Add Activity" />
                <input 
                    type="text" 
                    placeholder="Class Name"
                    name="activityName"
                    value={this.state.newActivity.activityName}
                    onChange={this.onInputChange}
                    />

                <input 
                    type="date" 
                    placeholder="Enter Date" 
                    name="date"
                    value={this.state.newActivity.date}
                    onChange={this.onInputChange}
                    />

                <div></div> {/* empty placeholder alignment*/}

                <input 
                    type="time" 
                    placeholder="Enter Time"
                    name="time"
                    value={this.state.newActivity.time}
                    onChange={this.onInputChange}
                    />

                <Location 
                    locations={this.state.locations}
                    onChange={this.onInputChange}
                />
                
                <AgeRestriction 
                    restrictions={this.state.ageLimits}
                    onChange={this.onInputChange}
                />
                
                <input 
                    type="text" 
                    placeholder="Price"
                    name="price"
                    value={this.state.newActivity.price}
                    onChange={this.onInputChange}
                    />
                
            </form>
        );
    };
}

AddActivity.PropTypes = {
    onNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
