import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap'

class AddCategory extends Component {

  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div>
        <Button
          //bsStyle="primary"
          //bsSize="large"
          onClick={this.open}
        >
          Add Category
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <FormControl
                  type="text"
                  //value={this.state.value}
                  placeholder="Enter category"
                  //onChange={this.handleChange}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default AddCategory
