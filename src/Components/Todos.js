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
        <h1 style = {background}>Todo App</h1>
        <form style={form} onSubmit = {this.handleSubmit}>
        <input 
                style = {input}
                type = "text"
                name = "title"
                onChange = {(e) => {this.setState({ title : e.target.value})}}
                value = {this.state.title}
                placeholder = "Add Your Todo..."
        />
        <button style = {frmBtn}>Add Todo</button>
        </form>
        {todos}
      </div>
    )
  }
}


const background = {
    background : "#333",
    color: "white",
    padding : 15,
    textAlign : "center"
}
const form = {
    marginTop : 10
}
const input = {
    width : "84%",
    height : 35
}
const frmBtn = {
    width : "15%",
    height : 40,
    fontSize: 17
}

Todos.propTypes = {
    todos : PropTypes.array.isRequired
}
export default Todos;