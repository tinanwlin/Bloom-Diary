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

 
         {/* Simulation to test Watson API */}
        <h3>this is the index page in the home controller</h3>
        <form method="post" action="/watson">
        <input type="submit" text="submit" value="submit" />
        </form>


      </React.Fragment>
    );
  }
}

export default Home
