import React, { Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class FetchComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  componentDidMount() {
    fetch('http://httpstat.us/500')
      .then(function(response) {
        if (!response.ok && response.status === 500) {
          return new Promise((resolve, reject) => reject(response))
        }
        return response
      })
      .then(function(response) {
        console.log('ok')
      })
      .catch(response => {
        this.setState({ error: response.statusText })
      })
  }

  notify = () => {
    var id = toast.error('PIPPI TI AMO MA STAI ZITTA!', {
      position: toast.POSITION.TOP_CENTER
    })

    console.log(id)
  }

  render() {
    return (
      <div>
        {this.state.error}
        <button onClick={this.notify}>Notify</button>;
        <ToastContainer hideProgressBar />
      </div>
    )
  }
}
