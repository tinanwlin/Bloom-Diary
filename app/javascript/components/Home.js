import React from "react"
import PropTypes from "prop-types"
import Grid from "./homeGrid/CalendarGrid"
import Sun from "./Sun"

export default class Home extends React.Component {
  render () {
    return (
      // This will be where we add the Grid for the flowers
      <React.Fragment>
        <div className="sunContainer">
          <Sun className="sun"/>
        </div>
        {(this.props.userSession !== null) ? <Grid/> : '' }

      </React.Fragment>
    )
  }
}
