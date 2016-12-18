import React, { Component } from 'react';
import logo from './logo.svg';
import { ButtonToolbar, ButtonGroup, Button, Modal, Input } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ButtonToolbar>
          <ButtonGroup>
            <Button>Add Product</Button>
            <Button>Add Category</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Input type="text" label="Recipe" placeholder="Recipe Name" id="title" />
              <Input type="textarea" label="Ingredients" placeholder="Enter Ingredients,Separated,By Commas" id="ingredients"/>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add} bsStyle="primary" id="addButton">Add Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
