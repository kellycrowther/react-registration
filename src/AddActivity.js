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
            price: 0,
            uid: 1
        },
        ageLimits: [
            {
                ageRestriction: '5 & Up',
                selected: false
            },
            {
                ageRestriction: '10 & Up',
                selected: false
            },
            {
                ageRestriction: '18 & Up',
                selected: false
            },
            {
                ageRestriction: '21 & Up',
                selected: false
            }
        ],
        selectedAge: '',
        locations: [
            'Lakeside Activity Center',
            'Glaze Meadow Recreation Center'
        ],
        selectedLocation: ''
    };

    // trying to keep code dry by using switch instead of multiple functions
    onInputChange = (e) => {
        switch(e.target.placeholder) {
            case 'Class Name':
                // console.log("Name Target: ", e.target.value);
                const activityName = e.target.value;
                this.setState({ 
                    newActivity: {
                        ...this.state.newActivity,
                        activityName: activityName
                    } 
                });
                break;

            case 'Enter Date':
                // console.log("Date Target: ", e.target.value);
                const date = e.target.value;
                this.setState({ 
                    newActivity: {
                        ...this.state.newActivity,
                        date: date
                    } 
                });
                break;

            case 'Enter Time':
                const time = e.target.value;
                this.setState({ 
                    newActivity: {
                        ...this.state.newActivity,
                        time: time
                    }
                 });
                break;

            case 'Price':
                let price = e.target.value;
                price = parseInt(price, 10) || 0;
                this.setState({ 
                    newActivity: {
                        ...this.state.newActivity,
                        price: price
                    }
                 });
                break;

            case 'Location':
                // console.log("Location: ", e.target.value);
                const location = e.target.value;
                this.setState({ selectedLocation: location });
                this.setState({
                    newActivity: {
                        ...this.state.newActivity,
                        location: location
                    }
                })
                break;

            case 'Age Restriction':
                const age = e.target.value;
                this.setState({ selectedAge: e.target.value });
                this.setState({
                    newActivity: {
                        ...this.state.newActivity,
                        ageRestriction: age
                    }
                })
                break;
            default:
                break;
        }
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
                price: 0,
                uid: 1
            }
        });
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                Class Name:<br />
                <input 
                    type="text" 
                    placeholder="Class Name" 
                    value={this.state.newActivity.activityName}
                    onChange={this.onInputChange}
                    /><br />
                Enter Date:<br />
                <input 
                    type="date" 
                    placeholder="Enter Date" 
                    value={this.state.newActivity.date}
                    onChange={this.onInputChange}
                    /><br />
                Enter Time:<br />
                <input 
                    type="time" 
                    placeholder="Enter Time" 
                    value={this.state.newActivity.time}
                    onChange={this.onInputChange}
                    /><br />
                Enter Location:<br />

                <Location 
                    locations={this.state}
                    onChange={this.onInputChange}
                />

                Age:<br />
                
                <AgeRestriction 
                    restrictions={this.state}
                    onChange={this.onInputChange}
                />
                
                <br />
                Price:<br />
                <input 
                    type="text" 
                    placeholder="Price" 
                    value={this.state.newActivity.price}
                    onChange={this.onInputChange}
                    /><br />
                <input type="submit" value="Add Activity" />
            </form>
        );
    };
}

AddActivity.PropTypes = {
    onNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
