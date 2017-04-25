import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/index.js';
import YTSearch from 'youtube-api-search';

const API = 'AIzaSyC5wVfxHWtd8Idnk-nvHER5SpP3Fqfwm0o';


class App extends Component{
  constructor(props){
    super(props);
    this.state={videos: []}
    YTSearch({key:API, term: 'funny goat'},(videos)=>{
     this.setState({videos})
    })
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }

}

ReactDOM.render(<App />,document.querySelector('.container'));
