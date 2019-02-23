import React from 'react';
import ReactDOM from 'react-dom/server';

import App from './App';

ReactDOM.hydrate(<App />, document.getElementById('app'));
