import React, {Component} from 'react'
var RadarChart = require('react-chartjs').Radar

class MyComponent extends Component {
  constructor (props) {
    super(props)
    console.log('journal', this.props.listOfJournal)
    this.state = {
      listOfJournal: []
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({listOfJournal: newProps.listOfJournal})
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  render () {
    let emotions = {
      joy: 0,
      anger: 0,
      disgust: 0,
      sadness: 0,
      fear: 0
    }
    if (this.state.listOfJournal[0]) {
      emotions.joy = this.state.listOfJournal[0].joy
      emotions.anger = this.state.listOfJournal[0].anger
      emotions.disgust = this.state.listOfJournal[0].disgust
      emotions.sadness = this.state.listOfJournal[0].sadness
      emotions.fear = this.state.listOfJournal[0].fear
    }

    return (<RadarChart
      data={{
        labels: [
          'joy', 'anger', 'disgust', 'sadness', 'fear'
        ],
        datasets: [
          {
            label: 'Yesterday',
            fillColor: 'rgba(136, 135, 255,0.2)',
            strokeColor: 'rgba(136, 135, 255,1)',
            pointColor: 'rgba(136, 135, 255,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(136, 135, 255,1)',
            data: [emotions.joy, emotions.anger, emotions.disgust, emotions.sadness, emotions.fear]
          }, {
            label: 'Today',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [0.2, 0.10, 0.04, 0.12, 0.08]
          }
        ]
      }}
      height={600}
      width={700}
      redraw/>)
  }
}

export default MyComponent
