import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><Main /></Router>, document.getElementById('root'));

serviceWorker.unregister();
