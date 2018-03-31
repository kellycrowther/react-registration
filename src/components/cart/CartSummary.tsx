import * as React from 'react';
import { Component } from 'react';

import CartActivity from './CartActivity';

export default class CartSummary extends Component<any, any> {
  render() {
    const cartActivityComponents = this.props.cartSelection.map((activity: any, index: number) => {
      return (
        <CartActivity
          activity={activity}
          key={index}
        />
      );
    });

    // console.log('Cart Summary: ', this.props.cartSelection);
    let myTotal = 0;
    this.props.cartSelection.map((price: any, index: number) => {
      // console.log(price.price);
      return myTotal = myTotal + price.price;
    });

    // console.log('my total: ', myTotal);

    return (
      <div className='cartSummary'>
        <h3>Cart Summary</h3>
        <div>
          <h5>My Classes</h5>
          <h5>Price</h5>
        </div>
        {cartActivityComponents}
        <h4>Total: ${myTotal}</h4>
        <button>
          Checkout
                </button>
      </div>
    );
  }
}
