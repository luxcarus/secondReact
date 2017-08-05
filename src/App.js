import React, { Component } from 'react';
import './App.css';
import {BasicForm} from './containers/forms'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicForm></BasicForm>
      </div>
    );
  }
}