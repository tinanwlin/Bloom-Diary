import { BrowserRouter, Route,Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from "react"
import PropTypes from "prop-types"
import NavbarComponent from "./Navbar"
import Footer from "./Footer"
import Profile from "./Profile"
import Home from "./Home"
import User from "./User"

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

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

  componentDidMount(){
    $.get('/me', (data) => {
      console.log("/me:", data);
      this.setState({currentUser:data.nickname});
    });
  }

  render () {
    return (
        <BrowserRouter>
        <div>
            <NavbarComponent setUser={this.setCurrentUser} userSession={this.state.currentUser}/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/user' component={User} />
              <Route component={NoMatch} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}



export default App
