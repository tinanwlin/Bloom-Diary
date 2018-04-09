import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Modal, Input, Button } from "react-materialize"
import CKEditor from "react-ckeditor-component"

class Journal extends React.Component {
  constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            content: 'content',
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    onChange(evt){
      console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      console.log(newContent)
      this.setState({
        content: newContent
      })
    }

    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
      
    }

    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
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

      <CKEditor 
        activeClass="p10" 
        content={this.state.content} 
        events={{
          "blur": this.onBlur,
          "afterPaste": this.afterPaste,
          "change": this.onChange
        }}/>

      </React.Fragment>

    );
  }
}




export default Journal
