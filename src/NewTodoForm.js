import React, { Component } from 'react'

export default class NewTodoForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      task: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.task === ''){
      return
    }
    this.props.handleSubmit(this.state.task)
    e.target.reset()
    this.props.history.push("/todos")
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
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
    )
  }
}
