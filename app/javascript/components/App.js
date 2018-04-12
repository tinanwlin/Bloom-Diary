import { BrowserRouter, Route,Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from "react"
import PropTypes from "prop-types"
import NavbarComponent from "./Navbar"
import Footer from "./Footer"
import Profile from "./Profile"
import Home from "./Home"
import User from "./User"
import JournalsList from './JournalsList'
import Journal from './Journal';

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
    this.updateUserNickname = this.updateUserNickname.bind(this);
  }

  setCurrentUser(sessionData){
    this.setState({currentUser:sessionData});
  }

  componentDidMount(){
    $.get('/me', (data) => {
      console.log("/me:", data);
      if (data) {
        this.setState({currentUser:data.nickname});
      }
    });
  }

  updateUserNickname(newNickname){
    this.setState({currentUser: newNickname});
  }

  render () {
    return (
        <BrowserRouter>
        <div>
            <NavbarComponent setUser={this.setCurrentUser} userSession={this.state.currentUser}/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/profile' render={(props) => (
                <Profile {...props} updateUserNickname={this.updateUserNickname}/>
              )}/>
              <Route path='/user' component={User} />
              <Route path='/journals' component={JournalsList} />
              <Route component={NoMatch} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}



export default App
