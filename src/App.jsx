import React, { Component } from 'react';
import './App.css';




import { Provider } from 'react-redux';
import store from './Store/index.jsx';
import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }

}

export default App;
