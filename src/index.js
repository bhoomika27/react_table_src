import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './source_js_redux/licomponents/App';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
