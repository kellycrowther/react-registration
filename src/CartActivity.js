import React from 'react';

const CartActivity = props => {
    return (
        <div>
            <p>{props.activity.activityName}</p>
            <p>${props.activity.price}</p>
        </div>
    );
}

export default CartActivity;