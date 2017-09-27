import React, { Component } from 'react'
import MiniDropdown from './MiniDropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MiniDropdown trigger={<button>Open</button>}>
              test
          </MiniDropdown>
      </div>
    );
  }
}

export default App;
