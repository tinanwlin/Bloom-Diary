import React from "react"
import PropTypes from "prop-types"
import { Modal, Input, Button } from "react-materialize"
import happyFlower from "../../assets/images/flying.gif"
import sadFlower from "../../assets/images/crying.gif" 
import RichTextEditor from 'react-rte'

export default class Journal extends React.Component {
  state = {
    content: RichTextEditor.createEmptyValue()
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      content: RichTextEditor.createValueFromString(newProps.content || "", 'html'),
      data: newProps.data || null
    });
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


    
    $.post("/watson", { content: content.toString('markdown'), year, month, day }, (response) => {
      console.log("response:", response);
      if (!response.error){
        this.closeModal();
        this.props.getData();

      } else {
        alert(response.error)
      }
    });

  }

  get uniqueId () {
      return `journalModal-${this.props.day}`;
  }

  get uniqueCreateButton () {
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (this.props.day === dd && this.props.month === mm && this.props.year === yyyy ) {
      return `createJournal-today`
    } else {
      return `createJournal-${this.props.day}`;
    }  
  }


  get dateString() {
    const { year, month, day } = this.props;
    return `${day}`;
  }


  render() {

    let img;
    let today = new Date();
    let journalToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let buttonDay = `${this.props.year}-${this.props.month}-${this.props.day}`;
    let buttonContent = this.dateString;
    if (journalToday === buttonDay){
      buttonContent = this.dateString + "\n" + "Today";
    }


    if (this.state.data) {
      let sentiment_score = this.state.data && this.state.data.sentiment_score;
      if (sentiment_score < 0) {
        img = <img className="calImg" src={ sadFlower } alt="" />;
      } else {
        img = <img className="calImg" src={ happyFlower } alt="" />;
      }
      buttonContent = img;
    }

    return (
      <React.Fragment>
        
        <Modal
          header={ `${this.props.year}-${this.props.month}-${this.props.day}` }
          id={this.uniqueId}
          trigger={
            <Button className="createJournalButton"
            id = {this.uniqueCreateButton}>
              {buttonContent}
            </Button>
          }
          actions={
            <React.Fragment>
              <Button className="submitJournalButton" onClick={this.handleJournalSubmit}>Create Journal</Button>
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