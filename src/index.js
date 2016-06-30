import _ from 'lodash';
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

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // youtube api call
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} />
        </div>
      );
  };
}

// Take components HTML and put it on the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
