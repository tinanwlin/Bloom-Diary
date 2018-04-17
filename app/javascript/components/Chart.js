import React, { Component } from 'react'
var RadarChart = require('react-chartjs').Radar

class MyComponent extends Component {
  constructor(props) {
    super(props)
    console.log('journal', this.props.listOfJournal)
    this.state = {
      listOfJournal: [],
      days: {
        value1: "",
        value2: ""
      },
      emotions1: {
        length: 0,
        joy: 0,
        anger: 0,
        disgust: 0,
        sadness: 0,
        fear: 0
      },
      emotions2: {
        length: 0,
        joy: 0,
        anger: 0,
        disgust: 0,
        sadness: 0,
        fear: 0
      }
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ listOfJournal: newProps.listOfJournal })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  getEmotionAvg = (journalList, daysAgo) => {
    console.log('function start')
    console.log(journalList)
    let dateFromToday = new Date();
    dateFromToday.setDate(dateFromToday.getDate() - daysAgo);
    let today = new Date();

    let emotions = ["joy", "anger", "disgust", "sadness", "fear"]

    let emotionAvg = {
      length: 30,
      joy: 0,
      anger: 0,
      disgust: 0,
      sadness: 0,
      fear: 0
    }

    let emotionList = {
      joy: [],
      anger: [],
      disgust: [],
      sadness: [],
      fear: []
    }

    if (journalList) {
      journalList.forEach(journal => {
        let journalDate = new Date(journal.date + "T12:00:00")
        if (journalDate <= today && journalDate >= dateFromToday) {
          emotionList.joy.push(journal.joy);
          emotionList.anger.push(journal.anger);
          emotionList.disgust.push(journal.disgust);
          emotionList.sadness.push(journal.sadness);
          emotionList.fear.push(journal.fear);
        }
      })

      emotions.forEach(key => {
        let tempSum = emotionList[key].reduce(function (previousVal, currentVal) {
          return previousVal + currentVal;
        }, 0);
        emotionAvg[key] = tempSum / emotionList[key].length;
      })
    }
    if (isNaN(emotionAvg.joy)){
      alert ("Oh No! No data between these days.")
    } else {
    return emotionAvg;
    }
  }

  handleChange = (name, value) => {
    const { days } = this.state;
    days[name] = value;
    this.setState({ days });
    console.log(days)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { days } = this.state;
    let emotions1 = this.getEmotionAvg(this.state.listOfJournal, days.value1)
    let emotions2 = this.getEmotionAvg(this.state.listOfJournal, days.value2)
    this.setState({emotions1: emotions1, emotions2: emotions2});
    console.log('A days was submitted111:');
    console.log(emotions1)
    console.log('A days was submitted222:');
    console.log(emotions2)

  }


  render() {

    return (
      <React.Fragment>
        <RadarChart
          data={{
            labels: [
              'joy', 'anger', 'disgust', 'sadness', 'fear'
            ],
            datasets: [
              {
                label: this.state.days.value1 + 'day(s) from now',
                fillColor: "rgba(136, 135, 255,0.2)",
                strokeColor: "rgba(136, 135, 255,1)",
                pointColor: "rgba(136, 135, 255,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(136, 135, 255,1)",
                data: [this.state.emotions1.joy, this.state.emotions1.anger, this.state.emotions1.disgust, this.state.emotions1.sadness, this.state.emotions1.fear]
              }, {
                label: this.state.days.value2 + 'day(s) from now',
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [this.state.emotions2.joy, this.state.emotions2.anger, this.state.emotions2.disgust, this.state.emotions2.sadness, this.state.emotions2.fear]
              }
            ]
          }}
          height={600}
          width={700}
          redraw />

        <form className="chartForm" onSubmit={this.handleSubmit}>
          <label>
            How many days from today?
            <input name="emotions1" type="text" value={this.state.days.value1} onChange={e => this.handleChange('value1', e.target.value)} />
          </label>
          <br />
          <label>
            How many days from today?
            <input name="emotions2" type="text" value={this.state.days.value2} onChange={e => this.handleChange('value2', e.target.value)} />
          </label>
          <button type="submit">Let's Compare</button>
        </form>

      </React.Fragment>
    )
  }
}

export default MyComponent;
