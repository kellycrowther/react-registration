import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AgeRestriction from './AgeRestriction';

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
        selectedAge: ''
    };

    // trying to keep code dry by using switch instead of multiple functions
    onInputChange = (e) => {
        switch(e.target.placeholder) {
            case 'Class Name':
                // console.log("Name Target: ", e.target.value);
                const activityName = e.target.value;
                this.setState({ activityName: activityName });
                break;

            case 'Enter Date':
                // console.log("Date Target: ", e.target.value);
                const date = e.target.value;
                this.setState({ date: date });
                break;

            case 'Enter Time':
                const time = e.target.value;
                this.setState({ time: time });
                break;

            case 'Price':
                let price = e.target.value;
                price = parseInt(price, 10) || 0;
                this.setState({ price: price });
                break;

            case 'Location':
                console.log("Location: ", e.target.value);
                break;

            case 'Age Restriction':
                // console.log("Radio Change", e.target.value);
                // const ageRestriction = e.target.value;
                // // let newSelectionArray;
                // let radioIndex = this.ageLimits.indexOf(e.target.value);
                
                // this.ageLimits[0].selected === true;
                // this.setState({ location: location });
                // let mySlice = this.ageLimits.slice(0, restrictionIndex);
                // console.log("My Slice: ", mySlice);
                // this.ageLimits[restrictionIndex].selected = !this.ageLimits[restrictionIndex].selected;
                break;
            default:
                break;
        }
    }

    onSubmit = e => {
        if(e) e.preventDefault();
        console.log('My Activity Added', this.state.activityName);
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

    onRadioChange = e => {
        // this.state.selectedAge = e.target.value;
        // console.log("state selected age: ", this.state.selectedAge);
        this.setState({selectedAge: e.target.value});
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
                <label>
                        <input 
                            type="radio" 
                            placeholder="Location"
                            value='Lakeside Activity Center'
                            onChange={this.onInputChange}
                            />
                    Lakeside Activity Center
                </label><br />
                <label>
                    <input
                        type="radio"
                        placeholder="Location"
                        checked={true}
                        value='Glaze Meadow Recreation Center'
                        onChange={this.onInputChange}
                    />
                    Glaze Meadow Recreation Center
                </label><br />
                Age:<br />
                
                <AgeRestriction 
                    restrictions={this.state}
                    onChange={this.onRadioChange}
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
