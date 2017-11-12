import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Black Butte Ranch Recreation Registration</h1>
        <div className="app-main">
          <div className="registration">
            <h3>Class Registration</h3>
            <table>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Class Name</th>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Age</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" id="activity" />
                  </td>
                  <td>Glass Fusing</td>
                  <td>June 8</td>
                  <td>Friday</td>
                  <td>10:30am</td>
                  <td>Lakeside Activity Center</td>
                  <td>18 & Older</td>
                  <td>$30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cartSummary">
            <h3>Cart Summary</h3>
            <div>
              <h5>My Classes</h5>
              <h5>Price</h5>
            </div>
            <div>
              <p>Some Class</p>
              <p>Some Price</p>
            </div>
            <h4>Total: $55</h4>
            <button>
              Checkout
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
