import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
class Footer extends React.Component {
    render() {
    const Footer = styled.footer`
      margin: 0;
      padding: 0;
      font-size: 1em;
      text-align: center;
      color: palevioletred;
      background-color: black;
      
    `;

        return (
            <React.Fragment>
                <Footer>This is a Footer</Footer>
            </React.Fragment>
        );
    }
}

export default Footer
