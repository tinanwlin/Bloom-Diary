import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'
import NavbarComponent from './Navbar'
import Footer from './Footer'
import Profile from './Profile'
import Home from './Home'
import JournalsList from './JournalsList'
import Journal from './Journal'

const NoMatch = ({location}) => (
  <div>
    <h3>
      No match for
      <code>{location.pathname}</code>
    </h3>
  </div>
)

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentUser: null,
      currentUserId: null,
      serverResponse: [{}]
    }
  }

  setCurrentUser = (sessionData) => {
    this.setState({currentUser: sessionData})
  }

  componentDidMount () {
    $.get('/me', (data) => {
      console.log('/me:', data)
      if (data) {
        this.setState({currentUser: data.nickname, currentUserId: data.id})
      }
    })
  }

  updateUserNickname = (newNickname) =>{
    this.setState({currentUser: newNickname})
  }

  render () {
    console.log(this.state.currentUserId)
    return (
      <BrowserRouter>
        <div>

          <NavbarComponent setUser={this.setCurrentUser} userSession={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' render={(props) => (<Home {...props} userSession={this.state.currentUser} currentUserId={this.state.currentUserId}/>)}/>
            <Route path='/profile' render={(props) => (
              <Profile {...props} updateUserNickname={this.updateUserNickname}/>
            )}/>
            <Route path='/journals' render={(routeProps) => (
              <JournalsList {...routeProps} currentUserId={this.state.currentUserId}/>
            )}/>
            <Route component={NoMatch} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}