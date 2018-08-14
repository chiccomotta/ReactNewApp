import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { fetchUser } from 'store/ActionCreators'
import 'App.css'
import spinner from 'images/spinner.gif' // Tell Webpack this JS file uses this image

/******
    Sono le funzioni che voglio rendere disponibili, tramite le props, al componente.
    Queste funzioni dispacciano le action allo store per modificare lo stato globalmente.
***/
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

// Mappo lo state nelle props del componente
const mapStateToProps = state => {
  return {
    state
  }
}

class FetchComponent extends React.Component {
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
    // var id = toast.error('TOASTER NOTIFICATION!', {
    //   position: toast.POSITION.TOP_CENTER
    // })

    this.props
      .fetchUser(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
      .then(response => console.log(response))
  }

  render() {
    const { id, title } = this.props.state.user
    const { loading, error } = this.props.state

    return (
      <div>
        <button onClick={this.notify}>Call remote API</button>
        <ToastContainer hideProgressBar />
        <div>
          {loading && <img src={spinner} alt="" />}
          {!loading &&
            !error && (
              <Fragment>
                <div>
                  <h2>{id}</h2>
                </div>
                <div className="highligth">
                  <h2>{title}</h2>
                </div>
              </Fragment>
            )}
          {error && (
            <Fragment>
              <div>
                <h2>FAILURE {error}</h2>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchComponent)
