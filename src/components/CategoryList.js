import React, { PropTypes } from 'react'
import Category from './Category'

const CategoryList = ({ categories, onCategoryClick }) => (
  <ul className="list-group">
    {categories.map(category =>
      <Category
        key={category._id}
        {...category}
        onClick={() => onCategoryClick(category._id)}
      />
    )}
  </ul>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCategoryClick: PropTypes.func.isRequired
}

export default CategoryList
