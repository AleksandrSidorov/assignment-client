import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductsList extends Component {

  renderProducts(productData) {
    return (
      <tr key={productData._id}>
        <th>{productData._id}</th>
        <th>{productData.title}</th>
        <th>{productData.buy_price}</th>
        <th>{productData.sell_price}</th>
        <th>Actions</th>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(this.renderProducts)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(ProductsList);
