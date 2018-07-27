import React, { Component } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './actionCreators'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.state = {
      task: ""
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    if(this.state.task === ''){
      return
    }
    this.props.addTodo(this.state.task)
    e.target.reset()
    this.setState({
      ...this.state,
      task: ''
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  removeTodo(id){
    this.props.removeTodo(id)
  }
  render() {
    let todos = this.props.todos.map((value, index) => (
      <Todo
        task={value.task}
        key={index}
        removeTodo={this.removeTodo.bind(this, value.id)}
      />
    ))
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="task">Task </label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos,
  }
}

export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList)
