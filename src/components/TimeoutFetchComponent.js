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

  xhr = new XMLHttpRequest()
  abortController = null

  componentDidMount() {
    // this.abortController = new window.AbortController()
    // // Esempio di implementazione di un timeout per una request con fecth
    // Promise.race([
    //   fetch('http://localhost:3001/api/testapi', { signal: this.abortController.signal }),
    //   new Promise((_, reject) =>
    //     setTimeout(() => {
    //       this.abortController.abort()
    //       //reject(new Error('Timeout'))
    //     }, 3000)
    //   )
    // ])
    //   .then(response => {
    //     return response.text()
    //   })
    //   .then(text => this.setState({ message: text }))
    //   .catch(err => {
    //     console.log(err)
    //     this.setState({ error: 'Timeout API!' })
    //   })
  }

  startRequest = () => {
    this.setState({ message: null, error: null })
    this.abortController = new window.AbortController()

    fetch('http://localhost:3001/api/testapi', {
      signal: this.abortController.signal,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'Chicco Motta' })
    })
      .then(response => {
        return response.text()
      })
      .then(text => this.setState({ message: text }))
      .catch(err => {
        console.log(err)
        this.setState({ error: 'Request Aborted!' })
      })
  }

  startRequest2 = () => {
    this.xhr.addEventListener('abort', err => {
      console.log(err)
    })

    this.xhr.open('POST', 'http://localhost:3001/api/testapi', true)
    this.xhr.setRequestHeader('Content-Type', 'application/json')
    this.xhr.send(JSON.stringify({ username: 'Chiccone' }))
  }

  abortRequest = () => {
    this.abortController.abort()
    //this.xhr.abort()
  }

  reload = () => {
    window.location.href = '/'
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.message}{' '}
          {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
          <button onClick={this.startRequest}>Start Request</button>
          <button onClick={this.abortRequest}>Abort Request</button>
          <button onClick={this.reload}>Reload</button>
        </h2>
      </div>
    )
  }
}

export default TimeoutFetchComponent
