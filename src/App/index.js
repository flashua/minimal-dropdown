import React, { Component } from 'react'
import MiniDropdown from './MiniDropdown'

class App extends Component {
  render() {
    return <MiniDropdown trigger={<button>Open</button>}>test</MiniDropdown>
  }
}

export default App
