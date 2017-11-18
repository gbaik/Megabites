import React, { Component } from 'react';
import Home from './pages/Home/Home.jsx';
import Donor from './pages/Donor/Donor.jsx';
import Bank from './pages/Bank/Bank.jsx';


export default class App extends Component {

  render() {
    return (
      <div>
        <h1>App</h1>
        <Home />
        <Donor />
        <Bank />
      </div>
    );
  }
}
