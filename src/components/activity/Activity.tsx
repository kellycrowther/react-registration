import * as React from 'react';
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';

const Activity = (props: any) => {

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
          inverted
          color='green'
        >
          <Button.Content visible>
            Add To Cart
            </Button.Content>
          <Button.Content hidden>
            <Icon name='cart' />
          </Button.Content>
        </Button>
      </Card>
    </Grid.Column>
  );
};

export default Activity;
