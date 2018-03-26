import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
// import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
// import "semantic-ui-less/semantic.less";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById('root'));
// registerServiceWorker();
