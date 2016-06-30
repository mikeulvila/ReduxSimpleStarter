import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import API_KEY from './API_KEY.js';


// youtube api call
YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
  console.log("API DATA", data);
});

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
