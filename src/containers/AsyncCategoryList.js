import { connect } from 'react-redux'
import { fetchCategories, fetchProducts } from '../actions'
import CategoryList from '../components/CategoryList'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategoryClick: (id) => {
      dispatch(fetchProducts(id))
    }
  }
}

const AsyncCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export default AsyncCategoryList
