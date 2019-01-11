import React, { Component } from 'react'
import TodoItems from "./TodoItems"
import PropTypes from "prop-types"
class Todos extends Component {
    state = {
        title : ""
    }


 handleSubmit = (e) => {
     e.preventDefault();
     this.props.handleSubmit(this.state.title);
     this.setState({
         title : " "
     })
 }

  render() {
      let todos = this.props.todos.map((items) => {
          return(
              <TodoItems 
                key          = {items.id} 
                todo         = {items}
                markComplete = {this.props.markComplete} 
                handleClick  = {this.props.handleClick}
              />
          )
      })
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit = {this.handleSubmit}>
        <input 
                type = "text"
                name = "title"
                onChange = {(e) => {this.setState({ title : e.target.value})}}
                value = {this.state.title}
        />
        <button>Add Todo</button>
        </form>
        {todos}
      </div>
    )
  }
}


Todos.propTypes = {
    todos : PropTypes.array.isRequired
}
export default Todos;