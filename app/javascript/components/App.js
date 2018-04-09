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

  constructor (props){
    super(props);

    this.state = {
      currentUser:null,
      serverResponse:[{}]
    }

    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser(sessionData){
    this.setState({currentUser:sessionData});
  }


  render () {
    return (
        <BrowserRouter>
          <div>
          <div>lalalalala{this.state.currentUser}</div>
          <NavbarComponent setUser={this.setCurrentUser} userSession={this.state.currentUser}/>
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
