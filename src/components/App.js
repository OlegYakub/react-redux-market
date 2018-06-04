import React, { Component } from 'react';

import Main from './Main';
import Header from './header/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App
