import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
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
        <Nav>This is a Navbar</Nav>
      </React.Fragment>
    );
  }
}

export default Navbar
