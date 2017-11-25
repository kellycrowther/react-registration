import React, {Component} from 'react';

import CartActivity from './CartActivity';

export default class CartSummary extends Component {
    render() {

        const cartActivityComponents = this.props.cartSelection.map((activity, index) => {
            return <CartActivity 
                activity={activity}
                key={index}
            />
        })
        
        return(
            <div className="cartSummary">
                <h3>Cart Summary</h3>
                <div>
                    <h5>My Classes</h5>
                    <h5>Price</h5>
                </div>
                { cartActivityComponents }
                <h4>Total: $55</h4>
                <button>
                    Checkout
                </button>
            </div>
        );
    }
}

// const CartSummary = props => {
//     console.log("Cart Props: ", props);
//     return (
//         <div className="cartSummary">
//             <h3>Cart Summary</h3>
//             <div>
//                 <h5>My Classes</h5>
//                 <h5>Price</h5>
//             </div>
//             <div>
//                 <p>Some Class</p>
//                 <p>Some Price</p>
//             </div>
//             <h4>Total: $55</h4>
//             <button>
//                 Checkout
//                 </button>
//         </div>
//     );
// }

// export default CartSummary;