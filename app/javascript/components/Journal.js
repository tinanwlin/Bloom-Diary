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
      content: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleJournalSubmit = this.handleJournalSubmit.bind(this);
  }

  onChange(evt) {
    CK = evt;
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    console.log(newContent)
    this.setState({
      content: newContent
    })
  }


  handleJournalSubmit(event) {
    console.log("click journal submit!");
    let $journalContent = this.state.content;
    $.post("/watson", { content: $journalContent }, (response) => {
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
    return (
      <React.Fragment>
        <Button onClick={() => { $('#journalModal').modal('open') }}>Journal</Button>
        <Modal
          header='Journal'
          id="journalModal">
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
