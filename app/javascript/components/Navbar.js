import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import {Navbar, NavItem, Modal, Input, Button} from 'react-materialize'

class NavbarComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginEmailValue: '',
      loginPasswordValue: ''
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.loginEmailOnChange = this.loginEmailOnChange.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleUserLogout = this.handleUserLogout.bind(this)
  }
  // should I use Jquery to get the value of form or react states?
  loginEmailOnChange (event) {
    this.setState({ loginEmailValue: event.target.value })
  }

  handleLoginSubmit (event) {
    console.log('Login Sumbit Clicked!')
    let $email = $('#loginEmail').val()
    let $password = $('#loginPassword').val()
    console.log('$Email', $email, '$Password', $password)
    $.post('/sessions', {email: $email, password: $password}, (response) => {
      if (!response.data) {
        alert(response.message)
      } else {
        $.get('/me', (data) => {
          console.log('login/me:', data)
          this.props.setUser(data.nickname)
        })
        $('#loginModal').modal('close')
      }
    })
  }

  handleRegisterSubmit (event) {
    console.log('Register Submit Clicked!')
    let $email = $('#registerEmail').val()
    let $nickname = $('#registerNickname').val()
    let $password = $('#registerPassword').val()
    let $confirmpassword = $('#registerConfirmPassword').val()
    $.post('/users', {email: $email, nickname: $nickname, password: $password, password_confirmation: $confirmpassword}, (response) => {
      // handle error response
      if (response.errors) {
        let errmsg = ''
        response.errors.forEach((msg) => {
          errmsg += msg + '\n'
        })
        alert(errmsg)
      } else {
        $.get('/me', (data) => {
          console.log('register/me:', data)
          this.props.setUser(data.nickname)
        })
        $('#registerModal').modal('close')
      }
    })
  }

  handleUserLogout () {
    $.ajax({
      url: '/sessions',
      type: 'DELETE',
      success: () => {
        // Getting current User
        $.get('/me', (data) => {
          this.props.setUser(null)
        })
      }
    })
  }

  navManagement (sessionState) {
    if (sessionState) {
      return (
        <React.Fragment>
          <NavItem>Welcome {this.props.userSession}</NavItem>
          <NavItem onClick={this.handleUserLogout}>Logout</NavItem>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <NavItem onClick={() => {
            $('#loginEmail').val('')
            $('#loginPassword').val('')
            $('#loginModal').modal('open')
            // console.log('fired! @login')
          }}>Login</NavItem>
          <NavItem onClick={() => {
            $('#registerEmail').val('')
            $('#registerPassword').val('')
            $('#registerNickname').val('')
            $('#registerConfirmPassword').val('')
            $('#registerModal').modal('open')
          }}>Register</NavItem>
        </React.Fragment>
      )
    }
  }

  closeModal (value) {
    return () => {
      $('#' + value).modal('close')
    }
  }

  render () {
    return (
      <React.Fragment>
        <Navbar right className="topNav">
          <a href='/' className="brand-logo center">Bloom Diary</a>
          <ul>
            {/* <li><Link to='/' className="NavItem">Home</Link></li> */}
            <li><Link to='/journals'>Journals</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            {this.navManagement(this.props.userSession)}
          </ul>
        </Navbar>

        <Modal
          header='Login'
          id="loginModal"
          actions = {
            <React.Fragment>
              <Button id="loginSubmit" waves='light' onClick={this.handleLoginSubmit}>Submit</Button>
              <Button onClick={this.closeModal('loginModal')} flat={true}>Close</Button>
            </React.Fragment>
          }>
          <Input id="loginEmail" type="email" label="Email" s={6} onChange={this.loginEmailOnChange}/>
          <Input id="loginPassword" type="password" label="Password" s={6} />
        </Modal>

        <Modal
          header='Register'
          id="registerModal"
          actions={
            <React.Fragment>
              <Button id="registerSubmit" waves='light' onClick={this.handleRegisterSubmit}>Submit</Button>
              <Button onClick={this.closeModal('registerModal')} flat={true}>Close</Button>
            </React.Fragment>
          }>
          <Input id="registerEmail" type="email" label="Email" s={12} />
          <Input id="registerNickname" s={12} label="Nickname" />
          <Input id="registerPassword" type="password" label="Password" s={12} />
          <Input id="registerConfirmPassword" type="password" label="Confirm Password" s={12} />
        </Modal>

      </React.Fragment>
    )
  }
}

export default NavbarComponent
