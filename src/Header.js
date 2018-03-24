import React from 'react';
// import PropTypes from 'prop-types';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Black Butte Ranch Recreation Registration</h1>
      <nav className='main-nav'>
        <ul>
          <li>
            <Link to='/'>
              <Button inverted color='blue'>Home</Button>
            </Link>
          </li>
          <li>
            <Link to='/cart'>
              <Button inverted color='blue'>
                <Icon name='cart' />
                Cart
              </Button>
            </Link></li>
          <li>
            <Link to='/add'>
              <Button inverted color='blue'>Add Activity</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
};

export default Header;