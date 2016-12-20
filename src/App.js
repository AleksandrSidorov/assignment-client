import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import GetCategoriesButton from './containers/GetCategoriesButton'
import CategoryList from './containers/CategoryList'
import ProductsList from './containers/ProductsList'
import AddCategory from './containers/AddCategory'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <ButtonToolbar>
          <Button>Add Product</Button>
          <AddCategory />
          <GetCategoriesButton />
        </ButtonToolbar>
        <div className="row">
          <div className="col-md-4">
            <CategoryList />
          </div>
          <div className="col-md-8">
            <ProductsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App
