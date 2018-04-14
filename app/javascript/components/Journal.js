import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Modal, Input, Button } from "react-materialize"
import CKEditor from "react-ckeditor-component"
import happyFlower from "../../assets/images/flying.gif"
import sadFlower from "../../assets/images/crying.gif" 

let CK;
class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.dateObject.content || '',
      state: this.props.status || null
    }
    this.onChange = this.onChange.bind(this);
    this.handleJournalSubmit = this.handleJournalSubmit.bind(this);
  }

  componentDidUpdate() {

  }

  onReady = (evt) => {
    CK = evt;
    setTimeout(() => {
      CK.editor.setData("");
    }, 2000);
  }

  onChange(evt) {
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
  }


  handleJournalSubmit(event, id) {
    let uniqueId = this.props.dateObject.day + "journalModal";
    // console.log("click journal submit!");
    let $journalContent = this.state.content;
    $.post("/watson", { content: $journalContent, year: this.props.dateObject.year, month: this.props.dateObject.month, day: this.props.dateObject.day }, (response) => {
      // console.log("response:", response);
      if (!response.error) {
        $('#' + uniqueId).modal('close');
        CK.editor.setData('');
      } else {
        alert(response.error)
      }
    })
  }

  render() {
    let uniqueId = this.props.dateObject.day + "journalModal";

    let img;
    let buttonContent = <p>C</p>;
    if (this.props.journalData) {
      let sentiment_score = this.props.journalData && this.props.journalData.sentiment_score;
      if (sentiment_score < 0) {
        img = <img className="calImg" src={ sadFlower } alt="" />;
      } else {
        img = <img className="calImg" src={ happyFlower } alt="" />;
      }
      buttonContent = <p>{img}</p>;
    }

    return (
      <React.Fragment>

        <Button id="createJournalButton"
          onClick={() => {
            $('#' + uniqueId).modal('open');
          }}>
          {buttonContent}
        </Button>

        <Modal
          header='Journal'
          id={uniqueId}>
          <CKEditor
            activeClass="p10"
            content={this.props.journalContent}
            events={{
              "change": this.onChange,
              "loaded": this.onReady
            }} />
          <button onClick={this.handleJournalSubmit}>Create Journal</button>
        </Modal>

      </React.Fragment>
    );
  }
}


export default Journal
