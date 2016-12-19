import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions';

class CategoriesList extends Component {

  // Fetch Categories data from backend after a component is mounted
  componentDidMount() {
    this.props.fetchCategories();
  }

  // Render each category to a list group item
  renderCategory(categoryData) {
    return (
      <a href="#" key={categoryData._id} className="list-group-item">{categoryData.title}</a>
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
  return bindActionCreators({ fetchCategories }, dispatch);
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
