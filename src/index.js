import React from 'react';
import ReactDOM from 'react-dom';
// Create component.  This component will produce HTML

const App = function () {
  return <div>Hi!</div>;
}

// Take components HTML and put it on the DOM

ReactDOM.render(<App/>, document.querySelector('.container'));
