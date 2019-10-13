import React, { Component} from 'react';
import './css/App.css';
import SpeedCalculator from './components/speedcalculator';
import Headerbar from './components/headerbar';

class App extends Component {
  render() {
    return (
      <div className = "app">
      	<Headerbar/>
        <div className = "app-body-content">
          <SpeedCalculator/>
        </div>
      </div>
    );
  }
}

export default App;
