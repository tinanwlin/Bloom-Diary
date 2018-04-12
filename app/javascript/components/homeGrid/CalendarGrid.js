import React from "react"
import PropTypes from "prop-types"
import { Button,Icon } from "react-materialize"
class CalendarGrid extends React.Component {
  constructor(props){
    super(props);
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    this.state = {
      year:year,
      month:month,
      day:day
    }
  }
  
  changeYear = (direction) => {
    this.setState({
      year: this.state.year + direction 
    });
  }

  changeMonth = (direction) => {
    if(this.state.month + direction > 12) {
      this.setState({
        month: 1,
        year: this.state.year + 1
      });
    } else if(this.state.month + direction < 1){
      this.setState({
        month: 12,
        year: this.state.year - 1
      });
    } else {
      this.setState({
        month: this.state.month + direction
      });
    }
  }

  daysInMonth(month,year) {
    return new Date(year,month,0).getDate();
  }


  drawWeek=(className,weekNumber)=>{
    const daysInAWeek = 7;
    let daysArray = [];
    for (let dayCount = 1; dayCount < daysInAWeek+1 ; dayCount++){
      daysArray.push(dayCount); 
    }
    return daysArray.map((day)=>{
      return <li key={day} className={className} data-id={day} onClick={()=>{console.log(`year: ${this.state.year} month: ${this.state.month} day:${(weekNumber-1)*7+day}`)}}>Flower2</li>
    });
  }

  drawMonth=()=>{
    let days = this.daysInMonth(this.state.month, this.state.year);
    let weeks = Math.floor(days/7);
    let weeksArray = [];
    for (let weekCount = 1; weekCount < weeks+1; weekCount++) {
      weeksArray.push(weekCount);      
    }
    return weeksArray.map((week)=>{
      return <ul key={week} className="week" data-id={week}>{this.drawWeek('day',week)}</ul>
    });
  }

  drawCalendarCanvas = () => {
    let days = this.daysInMonth(this.state.month, this.state.year);
    let weeks = Math.ceil(days / 7);
    let weeksArray = [];
    for (let weekCount = 1; weekCount < weeks + 1; weekCount++) {
      weeksArray.push(weekCount);
    }
    return weeksArray.map((week) => {
      return <ul key={week} className="canvasWeek" data-id={week}>{this.drawWeek('canvasDay')}</ul>
    });
  }

  drawReminder=()=>{
    let days = this.daysInMonth(this.state.month, this.state.year);
    let reminderDays = days % 7;
    let reminderDaysArray = [];
    for (let reminderCount = 1; reminderCount < reminderDays + 1; reminderCount++) {
      reminderDaysArray.push(reminderCount);
    }
    return reminderDaysArray.map((day) => {
      return <li key={day} className="day" data-id={day} onClick={() => { console.log(`year: ${this.state.year} month: ${this.state.month} day:${28 + day}`)}}>Flower</li>
    });
  }
  render () {

    return (
      <React.Fragment>
            <div className="calendarSelection">
            Year
              <div style={{display:"block"}}>
            <Button waves='light' onClick={()=>this.changeYear(-1)}>Previous<Icon left>chevron_left</Icon></Button>
              {this.state.year}
            <Button waves='light' onClick={()=>this.changeYear(+1)}>Next<Icon left>chevron_right</Icon></Button>
              </div>
            <div>
              Month
            <Button waves='light' onClick={()=>this.changeMonth(-1)}>Previous<Icon left>chevron_left</Icon></Button>
                {this.state.month}
            <Button waves='light' onClick={() => this.changeMonth(+1)}>Next<Icon left>chevron_right</Icon></Button>
            </div>
        </div>
        <div className="grid_container">
          <div className="calendar_canvas">
            {this.drawCalendarCanvas()}
          </div>
          <div className="calendar_month">
            {this.drawMonth()}
            <ul className="week" data-id={5}>{this.drawReminder()}</ul>
          </div>
        </div>

        
      </React.Fragment>
    );
  }
}

export default CalendarGrid
