import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { addTodo } = this.props
    addTodo(this.state.name)
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      name: value
    })
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' value={this.state.name} onChange={this.onChange}/>
        <input type='submit' />
      </form>
    )
  }
}
