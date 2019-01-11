import React, { Component } from 'react'
import TodoItems from "./TodoItems"
import PropTypes from "prop-types"
class Todos extends Component {
  render() {
      let todos = this.props.todos.map((items) => {
          return(
              <TodoItems key={items.id} todo = {items} />
          )
      })
    return (
      <div>
        <h1>Todos</h1>
        {todos}
      </div>
    )
  }
}


Todos.propTypes = {
    todos : PropTypes.array.isRequired
}
export default Todos;