import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { fetchUser } from 'store/ActionCreators'
import '../App.css'

/******
    Sono le funzioni che voglio rendere disponibili, tramite le props, al componente.
    Queste funzioni dispacciano le action allo store per modificare lo stato globalmente.
***/
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

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
    // var id = toast.error('PIPPI TI AMO MA STAI ZITTA!', {
    //   position: toast.POSITION.TOP_CENTER
    // })

    this.props.fetchUser()
  }

  render() {
    const { userId, title } = this.props.state.users
    const { loading } = this.props.state

    return (
      <div>
        {loading && <h2>attendere prego....</h2>}
        {this.state.error}
        <button onClick={this.notify}>Call remote API</button>;
        <ToastContainer hideProgressBar />
        {/* <div>{this.props.state.users}</div> */}
        {!loading && (
          <Fragment>
            <div>
              <h2>{userId}</h2>
            </div>
            <div>
              <h2>{title}</h2>
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchComponent)
