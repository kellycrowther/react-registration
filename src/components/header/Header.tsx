import * as React from 'react';
// import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button, Icon, Grid } from 'semantic-ui-react';
import Auth from '../../services/authentication';

const auth = new Auth();

const Header = () => {
  return (
    <header className='App-header'>
      <img src='' className='App-logo' alt='logo' />
      <h1 className='App-title'>Black Butte Ranch Recreation Registration</h1>
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <Link to='/'>
          <Button inverted color='blue'>Home</Button>
        </Link>
        <Link to='/cart'>
          <Button inverted color='blue'>
            <Icon name='cart' />
            Cart
            </Button>
        </Link>
        {
          auth.getRole() === 'admin' ?
            <Link to='/add'>
              <Button inverted color='blue'>Add Activity</Button>
            </Link>
            :
            null
        }
        <Link to='/login'>
          <Button inverted color='blue'>Login</Button>
        </Link>
      </Grid.Column>
    </header>
  );
};

export default Header;
