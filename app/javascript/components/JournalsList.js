import React, {Component} from 'react'
import Moment from 'react-moment'
import star from '../../assets/images/star.png'

class JournalsList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      listOfJournal: []
    }
  }

  componentDidMount () {
    $.get(`/users/${this.props.currentUserId}/journals`, (data) => {
      if (data) {
        this.setState({listOfJournal: data})
      }
    })
    $.get(`/users/${this.props.currentUserId}/journals`, (data) => {
      if (data) {
        this.setState({listOfJournal: data})
      }
    })
  }

  render () {
    return (
      // Main div starts here.
      <div className="container">
        <h1 className="journals-header">
         <div id="journals-title"> REFLECTIONS </div>
        </h1>

        {/* Flower */}

        {/* Flower */}
        <div id="position" className="sunflower">
          <div className="head">
            <div id="eye-1" className="eye"></div>
            <div id="eye-2" className="eye"></div>
            <div className="mout"></div>
          </div>
          <div className="petals"></div>
          <div className="trunk">
            <div className="left-branch"></div>
            <div className="right-branch"></div>
          </div>
          <div className="vase"></div>
        </div>
        {/* end Flower */}

        {this.state.listOfJournal.map(journal =>
          <div key={journal.id}>

            <div className="journals-container">

              <h5 className="journal-header individual-journal">
                <Moment className="journal-date" format="MMMM Do YYYY">{journal.date}</Moment>
                <br/>
                <Moment className="journal-fromnow" fromNow>{journal.date}</Moment>
                <img src={star} alt="star" className='journal-star' />

              </h5>

              {/* <img src={flower} alt="flower" className='jornal-flower' /> */}

              <div className="journal-content" dangerouslySetInnerHTML={{ __html: journal.content }} />
              <div className='journal-footer'>
                <button className="journal-button"> Edit </button>
                <button className="journal-button"> Delete </button>
              </div>
            </div>
          </div>
        )}
      </div> // main Div Container here
    ) // return Bracket Ends here
  } // render Function ends here
} // class Ends here.

export default JournalsList
