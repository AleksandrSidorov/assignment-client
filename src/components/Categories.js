import React, { PropTypes, Component } from 'react'

export default class Categories extends Component {
  render() {
    return (
      <ul>
        {this.props.categories.map((category, i) =>
          <li key={i}>{category.title}</li>
        )}
      </ul>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}
