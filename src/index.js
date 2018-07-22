/*
 Packages installed with npm do not need to be called with
  a relative path.
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Files created by us requires a relative path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// API key for YouTube
const API_KEY = 'AIzaSyD6KrLJ-Xy2JlMA3xnVi58G37QIcqj4pH4';

// Create a new component. This component should produce some HTML

class App extends Component {
  // Run when App gets creteed
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('surfboards');
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  // re-renders each time setState is ran
  // Pass function to VideoList. If VideoList calls this function, it updates Apps state. 
  // Passing a function that manipulates another component. 
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } // takes video and updates App's state. 
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
