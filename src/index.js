import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar,VideoList,VideoDetail} from './components/index.js';
import YTSearch from 'youtube-api-search';

const API = 'AIzaSyC5wVfxHWtd8Idnk-nvHER5SpP3Fqfwm0o';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('goat');
  }

  videoSearch(term){
    YTSearch({key:API, term: term},(videos)=>{
     this.setState({videos:videos,selectedVideo: videos[0]})
    })
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)

    return (
      <div>
        <SearchBar onSearchChange={term => this.videoSearch(term)} />
        <VideoDetail  video={this.state.selectedVideo} />
        <VideoList
        videos = {this.state.videos}
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }

}

ReactDOM.render(<App />,document.querySelector('.container'));
