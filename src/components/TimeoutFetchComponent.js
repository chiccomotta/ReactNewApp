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
    // Reset dei messaggi
    this.setState({ message: null, error: null })

    // Creo un oggetto AbortController
    this.abortController = new window.AbortController()

    // Fetch
    fetch('http://localhost:3001/api/testapi', {
      signal: this.abortController.signal,
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        pragma: 'no-cache',
        'cache-control': 'no-cache'
      }),
      body: JSON.stringify({ username: 'Chicco Motta' }),
      credentials: 'include'
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
        <div>
          <h2>{this.state.message}</h2>
        </div>
        {this.state.error && (
          <div style={{ color: 'red' }}>
            <h2>{this.state.error}</h2>
          </div>
        )}
        <button onClick={this.startRequest}>Start Request</button>
        <button onClick={this.abortRequest}>Abort Request</button>
        <button onClick={this.reload}>Reload</button>
      </div>
    )
  }
}

export default TimeoutFetchComponent
