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
          <div id="position" class="sunflower">
          <div class="head">
          <div id="eye-1" class="eye"></div>
          <div id="eye-2" class="eye"></div>
          <div class="mouth"></div>
        </div>
          <div class="petals"></div>
          <div class="trunk">
          <div class="left-branch"></div>
          <div class="right-branch"></div>
        </div>
        {/* end Flower */}
        
      
        <div class="vase"></div>
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