import React, { PropTypes } from 'react'

const Category = ({ onClick, title }) => (
  <a
    className="list-group-item"
    onClick={onClick}
  >
    {title}
  </a>
)

Category.porpTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Category
