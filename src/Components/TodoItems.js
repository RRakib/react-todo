import React, { Component } from 'react'
import PropTypes from "prop-types"
class TodoItems extends Component {
  getStyle = () => {
      return{
        textDecoration : this.props.todo.completed? "line-through" : "none",
        background : "#eee",
        padding : 5,
        borderBottom : "2px solid #ccc",
        color : this.props.todo.completed? "#4d4d4d" : "black"
      }
  }

  render() {
      const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input 
                type="checkbox"
                onChange = {() => this.props.markComplete(id)}
                checked = {this.props.todo.completed}
            />
            {title}
            <button onClick = {() => this.props.handleClick(id)}>
                X
            </button>

        </p>
      </div>
    )
  }
}

TodoItems.propTypes = {
    todo : PropTypes.object.isRequired
}
export default TodoItems;