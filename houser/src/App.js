import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import House from './component/House/House';
import Wizard from './component/Wizard/Wizard';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
        
        
      </div>
    );
  }
}

export default App;
