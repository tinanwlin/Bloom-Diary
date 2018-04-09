import React from "react"
import PropTypes from "prop-types"
class CalendarGrid extends React.Component {
  constructor(props){
    super(props);
  }

  daysInMonth(month,year) {
    return new Date(year,month,0).getDate();
  }

  render () {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default CalendarGrid
