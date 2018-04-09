import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Navbar, NavItem, Modal, Input, Button } from "react-materialize"

class Journal extends React.Component {
  render() {

    return (
      <React.Fragment>

        <Button onClick={() => { $('#journalModal').modal('open') }}>Journal</Button>

        <Modal
          header='Journal'
          id="journalModal">
          <Input id="journalInput" type="text" label="Text" s={6} />
          <Button waves='light'>Create Journal</Button>
        </Modal>


      </React.Fragment>
    );
  }
}

export default Journal
