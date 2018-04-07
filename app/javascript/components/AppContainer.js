import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App'

class AppContainer extends Component {
 render() {
  return(
    <BrowserRouter>    
    <App/>
    </BrowserRouter>
  );
 }
}

export default AppContainer;