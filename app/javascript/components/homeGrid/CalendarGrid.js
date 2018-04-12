import React from "react"
import PropTypes from "prop-types"
import { Button,Icon } from "react-materialize"
import Journal from "../Journal"

let  x;
class CalendarGrid extends React.Component {


  constructor(props){
    super(props);
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    this.state = {
      year:yyyy,
      month:mm,
      day:dd,
      today: mm + "/" + dd + "/" + yyyy
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
  
  componentWillMount(){
    let date = new Date();
    let currentDay = date.getDate();
    let weekValue = Math.floor(currentDay/7) + 1;
    let dayValue = currentDay%7;
  }

  drawWeek=(className,weekNumber)=>{
    const daysInAWeek = 7;
    let daysArray = [];
    for (let dayNumber = 1; dayNumber < daysInAWeek+1 ; dayNumber++){
      daysArray.push(dayNumber); 
    }
    return daysArray.map((day)=>{
      let dateNumber = (weekNumber-1)*7+day;
      console.log("dateNumber: ",dateNumber,"weekNumber: ",weekNumber,"day: ",day);
      return <li key={day} className={className} data-id={day} data-datenumber={dateNumber} onClick={()=>{console.log(`year: ${this.state.year} month: ${this.state.month} day:${(weekNumber-1)*7+day}`)}}>
        {(className==="day")?<Journal/>:""}
      </li>
    });
  }

  drawMonth=()=>{
    let days = this.daysInMonth(this.state.month, this.state.year);
    let weeks = Math.floor(days/7);
    let weeksArray = [];
    for (let weekNumber = 1; weekNumber < weeks+1; weekNumber++) {
      weeksArray.push(weekNumber);      
    }
    return weeksArray.map((week)=>{
      return <ul key={week} className="week" data-id={week}>{this.drawWeek('day',week)}</ul>
    });
  }

  drawCalendarCanvas = () => {
    let days = this.daysInMonth(this.state.month, this.state.year);
    let weeks = Math.ceil(days / 7);
    let weeksArray = [];
    for (let weekNumber = 1; weekNumber < weeks + 1; weekNumber++) {
      weeksArray.push(weekNumber);
    }
    return weeksArray.map((week) => {
      return <ul key={week} className="canvasWeek" data-id={week}>{this.drawWeek('canvasDay',week)}</ul>
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
      return <li key={day} className="day" data-id={day} data-number={28+day} onClick={() => { console.log(`year: ${this.state.year} month: ${this.state.month} day:${28 + day}`)}}>
        <Journal/>
      </li>
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
