import React from 'react'
import Grid from './homeGrid/CalendarGrid'
import Sun from './Sun'
import NotLogged from './NotLogged'

export default class Home extends React.Component {
  render () {
    return (
      // This will be where we add the Grid for the flowers
      <React.Fragment>
        <div className="sunContainer">
          <Sun className="sun"/>
        </div>
        {(this.props.userSession !== null) ? <Grid/> : <NotLogged/> }

      </React.Fragment>
    )
  }
}
