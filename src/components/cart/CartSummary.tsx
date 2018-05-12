import * as React from 'react';
import { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import CartActivity from './CartActivity';

const API = 'http://localhost:3111';
const ORDER_ROUTE = '/order';

export default class CartSummary extends Component<any, any> {
  getActivityIds = () => {
    let activityIds: Array<any> = [];
    let activityIdsObject: Object;
    for (let x = 0; x < this.props.cartSelection.length; x++) {
      activityIds.push(this.props.cartSelection[x].activity_id);
    }

    activityIdsObject = { activityIds: activityIds };
    return activityIdsObject;
  }

  submitOrder = () => {
    let activityIds = this.getActivityIds();
    console.log('activityIds: ', activityIds);
    let token = localStorage.getItem('token');
    console.log('token: ', token);
    fetch(API + ORDER_ROUTE, {
      method: 'POST',
      body: JSON.stringify(activityIds),
      headers: new Headers({
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      })
    })
      .then(res => {
        console.log('res: ', res);
        res.json().then(payload => {
          console.log('payload: ', payload);
        });
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }
  render() {
    const cartActivityComponents = this.props.cartSelection.map((activity: any, index: number) => {
      return (
        <CartActivity
          index={index}
          activity={activity}
          key={activity.availability_id}
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
          onClick={this.submitOrder}
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
