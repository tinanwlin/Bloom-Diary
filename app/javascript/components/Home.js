import React from "react"
import PropTypes from "prop-types"
import Journal from "./Journal"

class Home extends React.Component {
  render () {
    return (
      //This will be where we add the Grid for the flowers
      <React.Fragment>
        <h1>This is the homepage</h1>
        <Journal/>
      </React.Fragment>
    );
  }
}

export default Home
