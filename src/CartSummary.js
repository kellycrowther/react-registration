import React, {Component} from 'react';

export default class CartSummary extends Component {

    constructor(props){
        super(props);
        // console.log("Cart Summary: ", props);
    }
    
    render() {
        if (this.props.cartSelection[0] !== undefined) {
            console.log("Cart Summary: ", this.props.cartSelection[0].price);
        }
        
        return(
            <div className="cartSummary">
                <h3>Cart Summary</h3>
                <div>
                    <h5>My Classes</h5>
                    <h5>Price</h5>
                </div>
                <div>
                    {this.props.cartSelection[0] ?
                    <p>{this.props.cartSelection[0].activityName}</p>
                    :
                    <p>None Selected</p>
                    }
                    
                    {this.props.cartSelection[0] ? 
                    <p>{this.props.cartSelection[0].price}</p> 
                    :
                    <p>0</p>
                    }
                </div>
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