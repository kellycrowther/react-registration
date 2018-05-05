import * as React from 'react';
import { Component } from 'react';
import './Login.css';
import { Form, Button, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { LoginInterface } from '../../models/LoginInterface';

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/activities';

export default class Login extends Component<any, any> {

  state: LoginInterface = {
    email: '',
    password: ''
  };

  onSubmit = (e: React.FormEvent<any>) => {
    if (e) {
      e.preventDefault();
    }
    console.log('My Activity Added', this.state);
    let user: LoginInterface = {
      email: '',
      password: ''
    };

    this.props.toggleDimmer();
    this.login(user);
    this.resetState(e);
  }

  public login(data: LoginInterface) {
    fetch(API + DEFAULT_QUERY, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      res.json();
      console.log('Success:', res);
      this.props.toggleSuccess();
    })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // target.name must eqaul state.newActivity.activityName/date/time
  onInputChange = (e: React.ChangeEvent<any>) => {
    // console.log('My Event: ', e.target.value);
    const value = e.target.value;
    this.setState({
        [e.target.name]: value
    });
  }

  resetState = (e: React.ChangeEvent<any>) => {
    e.target.reset();
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {

    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          className='login'
          verticalAlign='middle'
        >
          <Grid.Column className='login-width'>
            <Header as='h2' color='teal' textAlign='center'>
              {' '}Log-in to your account
        </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
