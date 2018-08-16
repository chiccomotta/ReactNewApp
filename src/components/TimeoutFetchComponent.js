import React from 'react'
import { compose } from 'redux'

class TimeoutFetchComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      message: null
    }
  }

  componentDidMount() {
    // Esempio di implementazione di un timeout per una request con fecth
    Promise.race([
      fetch('http://localhost:3001/api/testapi'),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
    ])
      .then(response => {
        return response.text()
      })
      .then(text => this.setState({ message: text }))
      .catch(err => {
        console.log(err)
        this.setState({ error: 'Timeout API!' })
      })
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.message}{' '}
          {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
        </h2>
      </div>
    )
  }
}

export default TimeoutFetchComponent
