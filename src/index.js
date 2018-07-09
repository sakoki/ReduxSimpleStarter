// Packages installed with npm do not need to be called with
//  a relative path. 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Files created by us requires a relative path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// API key for YouTube
const API_KEY = 'AIzaSyC_zuXPTFrlvbPKViziRcPcY6KQo75eJAI';

// Create a new component. This component should produce some HTML

class App extends Component {
  // Run when App gets creteed
  constructor(props) {
    super(props);
    
    this.state = { videos: [] };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // ES6 syntax that works when the key and property are the same name 
      // this.setstate({ videos: videos }); 
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />         
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
