import React, { Component } from 'react';
//import { connect } from 'react-redux';
//imp 

import Main from './Main';
import Header from './Header';

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
