import React from "react"
import PropTypes from "prop-types"
// // import styled from "styled-components"
import { Modal, Input, Button } from "react-materialize"
import RichTextEditor from 'react-rte'

export default class Journal extends React.Component {
  state = {
    content: RichTextEditor.createEmptyValue()
  }

  componentWillReceiveProps(newProps) {
    this.setState({ content: RichTextEditor.createValueFromString(newProps.content, 'html') });
  }

  onChange = (content) => {
    this.setState({ content });
  }

  closeModal = () => {
    $('#' + this.uniqueId).modal('close');
  }

  handleJournalSubmit = (event, id) => {
    const { year, month, day } = this.props;
    const { content } = this.state;

    console.log("click journal submit!");
    
    $.post("/watson", { content: content.toString('markdown'), year, month, day }, (response) => {
      console.log("response:", response);
      if (!response.error){
        this.closeModal();
      } else {
        alert(response.error)
      }
    });
  }

  get uniqueId() {
    return `journalModal-${this.props.day}`;
  }

  get dateString() {
    const { year, month, day } = this.props;
    return `${year}-${month}-${day}`;
  }

  render() {
    console.log('Journal::render');
    return (
      <React.Fragment>
        
        <Modal
          header={ `${this.dateString} :: Journal` }
          id={this.uniqueId}
          trigger={
            <Button className="createJournalButton">
              {this.dateString}
            </Button>
          }
          actions={
            <React.Fragment>
              <Button onClick={this.handleJournalSubmit}>Create Journal</Button>
              <Button onClick={this.closeModal} flat={true}>Close</Button>
            </React.Fragment>
          }
        >
          <RichTextEditor
            value={this.state.content}
            onChange={this.onChange}
            />
        </Modal>
      </React.Fragment>
    );
  }
}