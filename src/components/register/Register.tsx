import * as React from 'react';
import { Component } from 'react';
import './Register.css';
import { Link, withRouter } from 'react-router-dom';
import { Form, Button, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { RegisterInterface } from '../../models/RegisterInterface';
import Authentication from '../../services/authentication';

const auth = new Authentication();

class Register extends Component<any, any> {

  state: RegisterInterface = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    zip_code: '',
    password: ''
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
    console.info('Register->register()', data);
    auth.register(data).then(res => {
      res.json()
        .then((payload: any) => {
          console.info('Register->register()->payload', payload);
          auth.setLogin(payload.token);
          this.props.history.push('/cart');
        });
    })
      .catch(error => {
        console.error('Register->register()->Error', error);
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
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      zip_code: '',
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
                  required
                />

                <Form.Input
                  fluid
                  placeholder='Last Name'
                  name='last_name'
                  onChange={this.onInputChange}
                  required
                />

                <Form.Input
                  fluid
                  placeholder='Phone Number'
                  name='phone_number'
                  onChange={this.onInputChange}
                  required
                />

                <Form.Input
                  fluid
                  placeholder='Zipcode'
                  name='zip_code'
                  onChange={this.onInputChange}
                  required
                />

                <Form.Input
                  fluid
                  placeholder='E-mail address'
                  name='email'
                  onChange={this.onInputChange}
                  required
                />
                <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.onInputChange}
                  required
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

export default withRouter(Register);
