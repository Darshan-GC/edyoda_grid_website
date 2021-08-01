import React, { Component } from 'react';
import TopBar from './Components/Topbar';
import Header from './Components/Header';

import '../src/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: '',
    };
  }

  render() {
    return (
      <div id="background">
        <TopBar navCatClickHandler={(id) => this.setState({ click: id })} />
        <Header click={this.state.click} />
      </div>
    );
  }
}

export default App;
