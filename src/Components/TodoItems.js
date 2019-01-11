import React, { Component } from 'react'
import PropTypes from "prop-types"
class TodoItems extends Component {
  getStyle = () => {
      return{
        textDecoration : this.props.todo.completed? "line-through" : "none",
        background : "#eee",
        padding : 10,
        borderBottom : "2px solid #ccc",
        color : this.props.todo.completed? "#4d4d4d" : "black",
        fontSize : 20
      }
  }

  render() {
      const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <div>
            <input 
                type="checkbox"
                onChange = {() => this.props.markComplete(id)}
                checked = {this.props.todo.completed}
            />
            {title}
            <button style = {delBtn} onClick = {() => this.props.handleClick(id)}>
                X
            </button>

        </div>
      </div>
    )
  }
}

const delBtn= {
    float : "right",
    background : "red",
    borderRadius : "50%",
    outline : "none",
    border : "none",
    color : "white",
    fontSize : 15


}


TodoItems.propTypes = {
    todo : PropTypes.object.isRequired
}
export default TodoItems;