import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddTodo, actAddCredits } from 'store/actionCreators'

// Sono le funzioni che voglio rendere disponibili, tramite le props, al componente.
// Queste funzioni dispacciano le action allo store per modificare lo stato globalmente.
const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => dispatch(actAddTodo(value)),
    addCredits: credits => dispatch(actAddCredits(credits))
  }
}

class addTodo extends Component {
  constructor(props) {
    super(props)
  }

  setTodo = () => {
    const { addTodo } = this.props
    addTodo('TODO N.1')
  }

  addCredits = () => this.props.addCredits(1000)

  render() {
    return (
      <div>
        <p>Aggiungi un TODO alla lista</p>
        <button onClick={this.setTodo}>Add todo</button>
        <button onClick={this.addCredits}>Add credits</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(addTodo)
