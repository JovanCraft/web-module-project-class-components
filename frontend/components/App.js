import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
        <Form />
      </div>
    )
  }
}
