export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const GET_TODOS = "GET_TODOS"
const URL = "http://localhost:3001/api/todos/"

function handleTodos(data){
  return {
    type: GET_TODOS,
    data
  }
}

function handleAdd(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function handleRemove(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function getTodos(){
  return dispatch => {
    return fetch(URL)
    .then(res => res.json())
    .then(data => dispatch(handleTodos(data)))
    .catch(err => console.log("Something went wrong", err))
  }
}

export function addTodo(task){
  return dispatch => {
    return fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
    .then(res => res.json())
    .then(data => dispatch(handleAdd(data)))
    .catch(err => console.log("Something went wrong", err))
  }
}

export function removeTodo(id){
  return dispatch => {
    return fetch(URL + id, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => dispatch(handleRemove(id)))
    .catch(err => console.log("Something went wrong", err))
  }
}
