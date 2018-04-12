import React, {Component} from 'react';

class JournalsList extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      listOfJornal: []
    }
  }

  componentDidMount(){
    $.get(`/users/${this.props.currentUserId}/journals`, (data) => {
      if (data) {
       this.setState({listOfJornal: data}); 
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
        {this.state.listOfJornal.map(jornal =>
          <div className="journals-container">
            <div className="journal">
              <h5 className="journal-header individual-journal">
                {jornal.date}
              </h5>
              <p className="journal-content">
                {jornal.content}
              </p>
            </div>
          </div>
        )};
      </div> //main Div Container here
    ); //return Bracket Ends here
  } //render Function ends here
} //class Ends here.

export default JournalsList