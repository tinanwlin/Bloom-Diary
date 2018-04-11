import React from "react"
import PropTypes from "prop-types"
import Grid from "./homeGrid/CalendarGrid"
import Journal from "./Journal"

class Home extends React.Component {


  getXandY = () => {
    $(document).on('click', '.field', function (e) {
      let target = $(e.currentTarget),
        x = target.parents('.row').attr('data-id'),
        y = target.attr('data-id');
      //x = target.parents('.row').prevAll().length,
      //y = target.prevAll().length;
      console.log(`x:${x} and y:${y}`)
    });
  }

  render () {
    return (
      //This will be where we add the Grid for the flowers
      <React.Fragment>
        <h1>This is the homepage</h1>
        <Grid onClick={this.getXandY()}/>
        <Journal/>
      </React.Fragment>
    );
  }
}

export default Home
