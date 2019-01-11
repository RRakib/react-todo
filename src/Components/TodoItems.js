import React, { Component } from 'react'
import PropTypes from "prop-types"
class TodoItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed : this.props.todo.completed
        }
    }

  handleChange = () => {
        this.setState((pS) => {
            return{
                completed : !pS.completed
            }
        })
  }

  getStyle = () => {
      if(this.props.todo.id === this.props.todo.id && this.state.completed){
          return{
              textDecoration : "line-through",
              background : "#eee",
              padding : 5,
              borderBottom : "2px solid #ccc",
              color : "#4d4d4d"
          }
      }
      else{
          return{
              textDecoration : "none",
              background : "#eee",
              padding : 5,
              borderBottom : "2px solid #ccc"
          }
        }
  }


  render() {
    return (
      <div style={this.getStyle()}>
        <h3>
            <input 
                type="checkbox"
                onChange = {this.handleChange}
                checked = {this.state.completed}
            />
            {this.props.todo.title}
        </h3>
      </div>
    )
  }
}

TodoItems.propTypes = {
    todo : PropTypes.object.isRequired
}
export default TodoItems;