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

  onChange(evt) {
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
    // var cookieObj = (document.cookie).split(', ');
    // var result = {};
    // for (var i = 0; i < cookieObj.length; i++) {
    //   var temp = cookieObj[i].split('=');
    //   result[temp[0]] = temp[1];
    // }
    // var newResult = JSON.parse(result.user)
    // console.log("content:", $journalContent, "cookie:", newResult.id);
    $.post("/watson", { content: $journalContent }, (response) => {
      console.log("response:", response);
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
