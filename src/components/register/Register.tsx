import * as React from 'react';
import { Component } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { Form, Button, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { RegisterInterface } from '../../models/RegisterInterface';

const API = 'http://localhost:3111';
const DEFAULT_QUERY = '/register';

export default class Login extends Component<any, any> {

  state: RegisterInterface = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    zip_code: '',
    password: '',
  };

  onSubmit = (e: React.FormEvent<any>) => {
    if (e) {
      e.preventDefault();
    }
    console.log('User Info', this.state);

    this.register(this.state);
    this.resetState(e);
  }

  public register(data: RegisterInterface) {
    console.log('data: ', data);
    fetch(API + DEFAULT_QUERY, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      res.json()
        .then(payload => {
          console.log('Response:', res);
          console.log('payload: ', payload);
        });
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
      <div className='register-form'>
        <Grid
          textAlign='center'
          className='register'
          verticalAlign='middle'
        >
          <Grid.Column className='register-width'>
            <Header as='h2' color='teal' textAlign='center'>
              {' '}Create your account
        </Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder='First Name'
                  name='first_name'
                  onChange={this.onInputChange}
                />

                <Form.Input
                  fluid
                  placeholder='Last Name'
                  name='last_name'
                  onChange={this.onInputChange}
                />

                <Form.Input
                  fluid
                  placeholder='Phone Number'
                  name='phone_number'
                  onChange={this.onInputChange}
                />

                <Form.Input
                  fluid
                  placeholder='Zipcode'
                  name='zipcode'
                  onChange={this.onInputChange}
                />

                <Form.Input
                  fluid
                  placeholder='E-mail address'
                  name='email'
                  onChange={this.onInputChange}
                />
                <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.onInputChange}
                />

                <Button color='teal' fluid size='large'>Register</Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <Link to='/login'>Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
