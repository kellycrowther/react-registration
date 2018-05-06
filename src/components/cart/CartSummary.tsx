import * as React from 'react';
import { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import CartActivity from './CartActivity';
import Authentication from '../../services/authentication';

const auth = new Authentication();

export default class CartSummary extends Component<any, any> {

  render() {
    const cartActivityComponents = this.props.cartSelection.map((activity: any, index: number) => {
      return (
        <CartActivity
          index={index}
          activity={activity}
          key={activity.date_id}
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
      <div>
        <h3>Cart Summary</h3>
        <Grid>
          {cartActivityComponents}
        </Grid>
        <h4>Total: ${myTotal}</h4>
        <Button
          animated='fade'
          inverted
          color='blue'
          onClick={auth.secret}
        >
          <Button.Content visible>
            Finalize Registeration
            </Button.Content>
          <Button.Content hidden>
            <Icon name='check' />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
