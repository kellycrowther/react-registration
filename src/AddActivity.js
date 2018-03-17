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
        ],
        selectedLocation: ''
    };

    // trying to keep code dry by using switch instead of multiple functions
    onInputChange = (e) => {
        // console.log('My Event: ', e.target);
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
                 console.log('Price: ', e.target.value);
                let price = e.target.value;
                price = parseInt(price, 10) || 0;
                this.setState({ 
                    newActivity: {
                        ...this.state.newActivity,
                        price: price
                    }
                 });
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

    onSelectChange = e => {
        let placeholder = e.target.attributes.placeholder.value;
        console.log('Placeholder: ', placeholder);
        switch(placeholder){
            case 'Location':
                const location = e.target.value;
                this.setState({ selectedLocation: location });
                this.setState({
                    newActivity: {
                        ...this.state.newActivity,
                        location: location
                    }
                });
            break;

            case 'Age Restriction':
                const age = e.target.value;
                this.setState({ selectedAge: age });
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
                    value={this.state.newActivity.activityName}
                    onChange={this.onInputChange}
                    />

                <input 
                    type="date" 
                    placeholder="Enter Date" 
                    value={this.state.newActivity.date}
                    onChange={this.onInputChange}
                    />

                <div></div> {/* empty placeholder alignment*/}

                <input 
                    type="time" 
                    placeholder="Enter Time" 
                    value={this.state.newActivity.time}
                    onChange={this.onInputChange}
                    />

                <Location 
                    locations={this.state.locations}
                    onChange={this.onSelectChange}
                />
                
                <AgeRestriction 
                    restrictions={this.state.ageLimits}
                    onChange={this.onSelectChange}
                />
                
                <input 
                    type="text" 
                    placeholder="Price" 
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
