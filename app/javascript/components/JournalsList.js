import React, {Component} from 'react';

class JournalsList extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      listOfJournal: []
    }
  }

  componentDidMount(){
    $.get(`/users/${this.props.currentUserId}/journals`, (data) => {
      if (data) {
       this.setState({listOfJournal: data}); 
      }
    });
  }
  
  render() {
    return (
      //Main div starts here.
      <div className="container"> 
        
        <h1 className="journals-header">
          REFLECTIONS
        </h1>
        
          {/* Flower */}
          <div id="position" className="sunflower">
          <div className="head">
          <div id="eye-1" className="eye"></div>
          <div id="eye-2" className="eye"></div>
          <div className="mouth"></div>
        </div>
          <div className="petals"></div>
          <div className="trunk">
          <div className="left-branch"></div>
          <div className="right-branch"></div>
        </div>
        {/* end Flower */}
        
      
        <div className="vase"></div>
        </div>
        {this.state.listOfJournal.map(journal =>
          <div key={journal.id} className="journals-container">
            <div className="journal">
              <h5  className="journal-header individual-journal">
                {journal.date}
              </h5>
                <div className="journal-content" dangerouslySetInnerHTML={{ __html: journal.content }} />
            </div>
          </div>
        )};
      </div> //main Div Container here
    ); //return Bracket Ends here
  } //render Function ends here
} //class Ends here.

export default JournalsList