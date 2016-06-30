import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js'
import API_KEY from './API_KEY.js';

// Create component.  This component will produce HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // youtube api call
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });

  }
  render() {
    return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos} />
        </div>
      );
  };
}

// Take components HTML and put it on the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
