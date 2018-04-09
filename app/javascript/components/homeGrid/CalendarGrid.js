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

  // getXandY=()=>{
  //   $(document).on('click', '.field', function (e) {
  //     let target = $(e.currentTarget),
  //       x = target.parents('.row').attr('data-id'),
  //       y = target.attr('data-id');
  //     //x = target.parents('.row').prevAll().length,
  //     //y = target.prevAll().length;
  //   });
  // }

  render () {
    return (
      <React.Fragment>
        <div id="current"></div>
        <div className="canvas">
          <ul className="grid">
            <li className="row" data-id="0">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="1">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="2">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="3">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="4">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="5">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="6">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="7">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="8">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
            <li className="row" data-id="9">
              <ul>
                <li className="field" data-id="0"></li>
                <li className="field" data-id="1"></li>
                <li className="field" data-id="2"></li>
                <li className="field" data-id="3"></li>
                <li className="field" data-id="4"></li>
                <li className="field" data-id="5"></li>
                <li className="field" data-id="6"></li>
                <li className="field" data-id="7"></li>
                <li className="field" data-id="8"></li>
                <li className="field" data-id="9"></li>
              </ul>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CalendarGrid
