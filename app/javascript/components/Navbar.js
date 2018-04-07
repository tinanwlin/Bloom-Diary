import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    const Nav = styled.nav`
      margin: 0;
      padding: 0;
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
      background-color: black;
    `;

    return (
      <React.Fragment>
        <Nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/journals'>List</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/test'>Test</Link></li>
          </ul>
        </Nav>
      </React.Fragment>
    );
  }
}

export default Navbar
