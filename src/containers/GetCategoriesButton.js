import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { Button } from 'react-bootstrap';

class GetCategoriesButton extends Component {
  render() {
    return (
      /*
      <Button onClick={this.onGetCategories}>Get Category</Button>
      */
      <Button onClick={() => this.props.fetchCategories()}>Get Category</Button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories }, dispatch);
}

export default connect(null, mapDispatchToProps)(GetCategoriesButton);
