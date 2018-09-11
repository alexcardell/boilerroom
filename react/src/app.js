import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>An App</div>;

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
