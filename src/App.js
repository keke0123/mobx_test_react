import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Testapp from './components/testapp';

import Counter from './store/Counter';
import {Provider} from 'mobx-react';

const counter = new Counter();
class App extends Component {
  render() {
    return (
      <Provider counter={counter}>
        <div className="App">
          <h3>app page</h3>
          <Testapp></Testapp>
        </div>
      </Provider>
    );
  }
}

export default App;
