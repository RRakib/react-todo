import React, { Component } from 'react'

class TodoItems extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.titles}</h3>
      </div>
    )
  }
}
export default TodoItems;