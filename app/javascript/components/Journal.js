import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Modal, Input, Button } from "react-materialize"
import CKEditor from "react-ckeditor-component"

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleJournalSubmit = this.handleJournalSubmit.bind(this);
  }

  onChange(evt){
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    console.log(newContent)
    this.setState({
      content: newContent
    })
  }


  handleJournalSubmit(event){
    console.log("click journal submit!");
    let $journalContent = this.state.content;
    console.log("content", $journalContent);
    $.post("/journals", {content: $journalContent}, (response) => {
      console.log("this is response:",response);
    })
  }
 
  
  render() {
    return (
      <React.Fragment>
        <Button onClick={() => { $('#journalModal').modal('open') }}>Journal</Button>
        <Modal
          header='Journal'
          id="journalModal">
          <Input id="journalInput" type="textarea" label="Text" s={30} />
          <Button waves='light'>Create Journal</Button>
        </Modal>
      <div>  
      <CKEditor 
        activeClass="p10" 
        content={this.state.content} 
        events={{
          "change": this.onChange
        }}/>
      <button onClick={this.handleJournalSubmit}>Create Journal</button>
      </div>
      </React.Fragment>
    );
  }
}




export default Journal
