import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import GetCategoriesButton from './containers/GetCategoriesButton';
import CategoriesList from './containers/CategoriesList';
import ProductsList from './containers/ProductsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ButtonToolbar>
          <ButtonGroup>
            <Button>Add Product</Button>
            <GetCategoriesButton />
          </ButtonGroup>
        </ButtonToolbar>
        <div className="row">
          <div className="col-md-4">
            <CategoriesList />
          </div>
          <div className="col-md-8">
            <ProductsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
