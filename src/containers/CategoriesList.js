import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories, fetchProducts } from '../actions';

class CategoriesList extends Component {
  // Fetch Categories data from backend after a component is mounted
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts("5853923ab7a629193823abe5");
  }

  // Render each category to a list group item
  renderCategory(categoryData) {
    return (
      <a href="#"
        key={categoryData._id}
        className="list-group-item"
        onClick={e => {
          e.preventDefault()
          fetchProducts(categoryData._id)
        }}
      >
        {categoryData.title}
      </a>
    )
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.categories.map(this.renderCategory)}
      </ul>
    )
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts, fetchCategories }, dispatch);
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
