import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js'
// Create component.  This component will produce HTML

const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
    );
}

// Take components HTML and put it on the DOM

ReactDOM.render(<App/>, document.querySelector('.container'));
