import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from "react"
import PropTypes from "prop-types"
import NavbarComponent from "./Navbar"
import Footer from "./Footer"
import Profile from "./Profile"
import Home from "./Home"
import User from "./User"
import Test from "./Test"

class App extends React.Component {
  render () {
    return (
        <BrowserRouter>
          <div>
          <NavbarComponent/>
              <Route exact path='/' component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/user' component={User} />
              <Route path='/test' component={Test} />
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App
