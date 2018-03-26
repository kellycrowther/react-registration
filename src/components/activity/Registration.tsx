import * as React from 'react';
// import * as PropTypes from 'prop-types';
import { Card, Icon, Image, Grid, Button, Dimmer, Header } from 'semantic-ui-react';


const Registration = (props:any) => {

  return (
    <Grid.Column mobile={16} tablet={8} computer={8}>
      <Card fluid>
        <Image src='' />
        <Card.Content>
          <Card.Header>
            {props.activity.activityName}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {props.activity.date}
            </span>
            <p className='time'>
              {props.activity.time}
            </p>
          </Card.Meta>
          <Card.Description>
            <div>
              <Icon name='marker' />
              {props.activity.location}
            </div>
            <div>
              <Icon name='exclamation' />
              {props.activity.ageRestriction}
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Harum accusantium placeat magnam, iusto commodi aspernatur
              atque adipisci eos fuga, illum iure fugiat quos eius omnis
              ipsa magni? Ipsum, eum commodi.
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='dollar' />
          {props.activity.price}
        </Card.Content>
        <Button
          animated='fade'
          onClick={(e) => props.onClick(props.activity, e)}
          inverted color='green'
        >
          <Button.Content visible>
            Add To Cart
            </Button.Content>
          <Button.Content hidden>
            <Icon name='cart' />
          </Button.Content>
        </Button>
      </Card>

      {/* <Dimmer
        active={props.dimmer}
        onClickOutside={props.toggleDimmer}
        page
      >
        <Header as='h2' icon inverted>
          <Icon name='heart' />
          Success!
            <Header.Subheader>Your item was added to the cart!</Header.Subheader>
        </Header>
      </Dimmer> */}
    </Grid.Column>
  );
}

// Registration.propTypes = {
//   activity: PropTypes.shape({
//     activityName: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     ageRestriction: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     uid: PropTypes.number.isRequired
//   })
// }

export default Registration;