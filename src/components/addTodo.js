import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddTodo, actAddCredits } from 'store/ActionCreators'

/******
    Sono le funzioni che voglio rendere disponibili, tramite le props, al componente.
    Queste funzioni dispacciano le action allo store per modificare lo stato globalmente.
***/
const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => dispatch(actAddTodo(value)),
    addCredits: credits => dispatch(actAddCredits(credits))
  }
}

// Esempio di controlled component
class addTodo extends Component {
  state = {
    todo: ''
  }

  onChange = e => {
    this.setState({ todo: e.target.value })
  }

  setTodo = () => {
    const { addTodo } = this.props
    addTodo(this.state.todo)
  }

  addCredits = () => this.props.addCredits(1000)

  render() {
    return (
      <div className="addTodo">
        <input type="text" value={this.state.todo} onChange={this.onChange} />
        <button onClick={this.setTodo}>Add todo</button>
        <button onClick={this.addCredits}>Add credits</button>
        <p>Aggiungi un TODO alla lista</p>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(addTodo)
