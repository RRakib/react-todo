import React, { Component } from 'react'
import TodoItems from "./TodoItems"
class Todos extends Component {
  render() {
      let todos = this.props.todos.map((items) => {
          return(
              <TodoItems key={items.id} titles = {items.title} />
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
export default Todos;