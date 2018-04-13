import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Modal, Input, Button } from "react-materialize"
import CKEditor from "react-ckeditor-component"

let CK;
class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.dateObject.content || '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleJournalSubmit = this.handleJournalSubmit.bind(this);

  
  }

  onChange(evt) {
    CK = evt;
    //console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    //console.log(newContent)
    this.setState({
      content: newContent
    })
  }


  handleJournalSubmit(event) {
    console.log("click journal submit!");
    let $journalContent = this.state.content;
    $.post("/watson", { content: $journalContent, year: this.props.dateObject.year, month: this.props.dateObject.month, day: this.props.dateObject.day}, (response) => {
      console.log("response:", response);
      if (!response.error){
        $('#journalModal').modal('close');
        CK.editor.setData('');
      } else {
        alert(response.error)
      }
    })
  }

  render() {
    let uniqueId = this.props.dateObject.day + "journalModal";
    return (
      <React.Fragment>
        <Button id="createJournalButton" onClick={() => { $('#' + uniqueId).modal('open') }}>C</Button>
        <Modal
          header='Journal'
          id={uniqueId}>
          <CKEditor
            activeClass="p10"
            content={this.state.content}
            events={{
              "change": this.onChange
            }} />
            
          <button onClick={this.handleJournalSubmit}>Create Journal</button> 
        </Modal>
        
      </React.Fragment>
    );
  }
}


export default Journal
