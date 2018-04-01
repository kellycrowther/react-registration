import * as React from 'react';
// import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button, Icon, Grid } from 'semantic-ui-react';

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
        <Link to='/add'>
          <Button inverted color='blue'>Add Activity</Button>
        </Link>
      </Grid.Column>
    </header>
  );
};

export default Header;
