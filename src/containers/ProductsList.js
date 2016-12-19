import React, { Component } from 'react';

export default class CategoriesList extends Component {
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
      </table>
    )
  }
}
