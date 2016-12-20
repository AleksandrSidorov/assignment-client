import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchProducts, setCurrentCategory } from '../actions'
import Category from '../components/Category'

class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
  }

  componentDidMount() {
    const { getCategories } = this.props
    getCategories()
  }

  // Load Products after Categoires potpulated
  componentDidUpdate() {
    let id = this.props.currentCategory.curId
    this.props.getProducts(id)
  }

  handleCategoryClick(id) {
    this.props.getProducts(id)
    this.props.setCategory(id)

  }

  render() {
    const { categories, currentCategory } = this.props
    return (
      <ul className="list-group">
        {categories.map(category =>
          <Category
            key={category._id}
            {...category}
            curId={currentCategory.curId}
            onClick={this.handleCategoryClick}
          />
        )}
      </ul>
    )
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  getCategories: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    currentCategory: state.currentCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(fetchCategories())
    },
    getProducts: (id) => {
      dispatch(fetchProducts(id))
    },
    setCategory: (id) => {
      dispatch(setCurrentCategory(id))
    }
  }
}

CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export default CategoryList
