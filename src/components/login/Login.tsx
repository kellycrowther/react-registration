import * as React from 'react';
import { Component } from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import { Form, Button, Grid, Message, Segment, Header } from 'semantic-ui-react';
import { LoginInterface } from '../../models/LoginInterface';
import Authentication  from '../../services/authentication';

const auth = new Authentication();

class Login extends Component<any, any> {

  state: LoginInterface = {
    email: '',
    password: ''
  };

  onSubmit = (e: React.FormEvent<any>) => {
    if (e) {
      e.preventDefault();
    }
    console.log('User Info', this.state);

    this.login(this.state);
    this.resetState(e);
  }

  login = (data: LoginInterface) => {
    auth.login(data).then(res => {
      if (res.status === 200) {
        res.json()
          .then((payload: any) => {
            console.log('Response:', res);
            console.log('payload: ', payload);
            auth.setLogin(payload.token, payload.role);
            this.props.history.push('/cart');
          });
      } else {
        console.log('Authentication Failed');
      }
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
            <Form size='large' onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name='email'
                  required
                  onChange={this.onInputChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  required
                  onChange={this.onInputChange}
                />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Login);
