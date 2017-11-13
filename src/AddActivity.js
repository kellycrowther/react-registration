import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddActivity extends Component {

    render() {
        return (
            <form>
                Class Name:<br />
                <input type="text" placeholder="Class Name" /><br />
                Enter Date:<br />
                <input type="date" placeholder="Enter Date" /><br />
                Enter Location:<br />
                <input type="text" placeholder="Location" /><br />
                Age:<br />
                <input type="text" placeholder="Age" /><br />
                Price:<br />
                <input type="text" placeholder="Price" />
            </form>
        );
    };
}

// AddActivity.PropTypes = {}
