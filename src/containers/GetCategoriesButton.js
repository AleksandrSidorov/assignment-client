import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { Button } from 'react-bootstrap';

class GetCategoriesButton extends Component {
  constructor(props) {
    super(props);
    this.onGetCategories = this.onGetCategories.bind(this);
  }

  onGetCategories(event) {
    this.props.fetchCategories();
  }

  render() {
    return (
      <Button onClick={this.onGetCategories}>Get Category</Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories }, dispatch);
}

export default connect(null, mapDispatchToProps)(GetCategoriesButton);
