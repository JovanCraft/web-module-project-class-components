import React from 'react'
import Form from './Form'
import TodoList from './TodoList'


let id = 0
let getId = () => ++id

const initialTodos = [
  { id: getId(), name: 'Walk the dog', completed: false },
  { id: getId(), name: 'Learn React', completed: false },
  { id: getId(), name: 'Have fun', completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <Form />
      </div>
    )
  }
}
