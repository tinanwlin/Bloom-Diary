import React from "react"
import PropTypes from "prop-types"
import Grid from "./homeGrid/CalendarGrid"

class Home extends React.Component {
constructor(props){
  super(props);
}
  getXandY = () => {
    $(document).on('click', '.day', (e) => {
      let target = $(e.currentTarget),
        x = target.parents('.week').attr('data-id'),
        y = target.attr('data-id');
      console.log(`x:${x} and y:${y}`);
    });
  }

  render () {
    return (
      //This will be where we add the Grid for the flowers
      <React.Fragment>
        <div className="container" style={{ display: "block" }}>
          <h3>this is the index page in the home controller</h3>
          <form method="post" action="/watson">
            <input type="submit" text="submit" value="submit" />
          </form>

        </div>
        <h1>{this.props.userSession}</h1>
        {(this.props.userSession!==null)?<Grid onClick={this.getXandY()}/>: ""}
         {/* Simulation to test Watson API */}
         
      </React.Fragment>
    );
  }
}

export default Home
