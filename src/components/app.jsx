import React, { Component } from 'react';

import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "TimdJbWqALMhh78DtE"},
      { id: "T9RRdWZFbfzblgGVhD"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="TimdJbWqALMhh78DtE" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}
export default App;
