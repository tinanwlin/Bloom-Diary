import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App
