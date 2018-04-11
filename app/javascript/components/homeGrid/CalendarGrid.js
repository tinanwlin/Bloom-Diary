import React from "react"
import PropTypes from "prop-types"
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

  daysInMonth(month,year) {
    return new Date(year,month,0).getDate();
  }


  drawWeek=(color)=>{
    const daysInAWeek = 7;
    let daysArray = [];
    for (let dayCount = 1; dayCount < daysInAWeek+1 ; dayCount++){
      daysArray.push(dayCount); 
    }
    return daysArray.map((day)=>{
      console.log("day", day);
      return <li className="day" data-id={day} style={{height:'50px', width:'50px', backgroundColor:color,border:"1px solid white",display:"inline-block"}}></li>
    });
    //return drawDay;
  }
  drawMonth=()=>{
    let days = this.daysInMonth(this.state.month, this.state.year);
    let weeks = Math.floor(days/7);
    let weeksArray = [];
    for (let weekCount = 1; weekCount < weeks+1; weekCount++) {
      weeksArray.push(weekCount);      
    }
    return weeksArray.map((week)=>{
      // console.log("week",week );
      return <ul className="week" data-id={week} style={{ margin: "0" }}>{this.drawWeek('black')}</ul>
    });
    // console.log(drawWeek)
    // return drawWeek;
  }

  drawCalendarCanvas = () => {
    let days = this.daysInMonth(this.state.month, this.state.year);
    let weeks = Math.ceil(days / 7);
    let weeksArray = [];
    for (let weekCount = 1; weekCount < weeks + 1; weekCount++) {
      weeksArray.push(weekCount);
    }
    return weeksArray.map((week) => {
      // console.log("week",week );
      return <ul className="background" data-id={week} style={{margin:"0"}}>{this.drawWeek('blue')}</ul>
    });
    // console.log(drawWeek)
    // return drawWeek;
  }

  drawReminder=()=>{
    let days = this.daysInMonth(this.state.month, this.state.year);
    console.log(days, this.state.year, this.state.month)
    let reminderDays = days % 7;
    console.log(reminderDays)
    let reminderDaysArray = [];
    for (let reminderCount = 1; reminderCount < reminderDays + 1; reminderCount++) {
      reminderDaysArray.push(reminderCount);
    }
    console.log(reminderDaysArray)
    return reminderDaysArray.map((day) => {
      // console.log("week",week );
      return <li className="day" data-id={day} style={{ height: '50px', width: '50px', color: 'white', backgroundColor: 'black', border: "1px solid white", display: "inline-block" }}></li>
    });
  }
  render () {

    return (
      <React.Fragment>
        <div className="grid_container">
          {this.state.year}
          {this.state.month}
          {this.state.day}
          <div className="calendar_canvas">
            {this.drawCalendarCanvas()}
          </div>
          <div className="calendar_month">
            {this.drawMonth()}
            {this.drawReminder()}
          </div>
        </div>

        
      </React.Fragment>
    );
  }
}

export default CalendarGrid
