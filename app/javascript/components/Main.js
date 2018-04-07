import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from 'react-router-dom'
import Profile from "./Profile"
import  Home  from "./Home"
import User from "./User"
import Test from "./Test"

//this is the front-end Route Manager to Render all the sub-pages
class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/user' component={User} />
          <Route path='/test' component={Test} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main
