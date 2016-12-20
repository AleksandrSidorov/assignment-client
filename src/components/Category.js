import React, { Component, PropTypes } from 'react'

export default class Category extends Component {
  render() {
    const { _id, title, curId, onClick } = this.props
    const dynClass = (curId === _id) ? "list-group-item active" : "list-group-item"

    return (
      <a
        className={dynClass}
        onClick={() => onClick(_id)}
      >
        {title}
        <span className="pull-right">
          <span className="btn btn-xs btn-default">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </span>
        </span>
      </a>
    )
  }
}

Category.porpTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
