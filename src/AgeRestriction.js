import React, {Component} from 'react';

export default class AgeRestriction extends Component {

    restrictionSelected = e => {
        console.log("Age Restrict: ", e.target.value);
        this.props.restriction.selected = true;
    }

    render() {
        return (
            <label>
                <input
                    type="radio"
                    placeholder="Age Restriction"
                    value={this.props.restriction.ageRestriction}
                    checked={this.props.restriction.selected}
                    onChange={this.props.onChange}
                />
                {this.props.restriction.ageRestriction}
            </label>
        );
    }

}