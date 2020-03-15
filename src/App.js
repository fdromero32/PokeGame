import React, { Component } from 'react';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
          <Pokegame />
            <button className="button" onClick={this.refreshPage}>Click to reload!</button>
           
      </div>
    );
  }
}

export default App;
