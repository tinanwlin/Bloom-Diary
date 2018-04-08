import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import {Navbar,NavItem,Modal,Input,Button} from "react-materialize"
class NavbarComponent extends React.Component {
  render () {
    //  const Nav = styled.nav`
    //   margin: 0;
    //   padding: 0;
    //   font-size: 1.5em;
    //   text-align: center;
    //   color: palevioletred;
    //   background-color: black;
    // `;

    return (
      <React.Fragment>
        
          <Navbar brand='logo' right className="topNav">
            <ul>
              <li><Link to='/' className="NavItem">Home</Link></li>
              <li><Link to='/journals'>Journals</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <NavItem onClick={() => { $('#loginModal').modal('open')}}>Login</NavItem>
              <NavItem onClick={() => { $('#registerModal').modal('open') }}>Register</NavItem>
            </ul> 
          </Navbar>

        <Modal
          header='Login'
          id="loginModal">
          <Input id="loginEmailInput" type="email" label="Email" s={6} />
          <Input id="loginPasswordInput" type="password" label="password" s={6} />
          <Button waves='light'>Submit</Button>
        </Modal>

        <Modal
          header='Register'
          id="registerModal">
            <Input type="email" label="Email" s={12} />
            <Input s={12} label="Nickname" />
            <Input type="password" label="Password" s={12} />
            <Input type="password" label="Confirm Password" s={12} />
            <Button waves='light'>Submit</Button>
        </Modal>
       
      </React.Fragment>
    );
  }
}

export default NavbarComponent
