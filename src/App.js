import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout'
import Header from './components/header'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <Layout />
        </div>
      </div>
    );
  }
}

export default App;
