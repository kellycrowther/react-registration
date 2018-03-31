import * as React from 'react';

const CartActivity = (props: any) => {
    return (
        <div>
            <p>{props.activity.activityName}</p>
            <p>${props.activity.price}</p>
        </div>
    );
};

export default CartActivity;
