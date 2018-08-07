import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddCredits } from 'store/ActionCreators'

const mapDispatchToProps = dispatch => {
  return {
    addCredits: credits => dispatch(actAddCredits(credits))
  }
}

class ControlledComponent extends Component {
  state = { text: 'il tuo nome' }

  handleChange = event => {
    this.props.addCredits('ciccio')

    this.setState({ text: event.target.value }, () => {
      // Called third
      console.log(this.state)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // Called second
    console.log('prevState', prevState)
  }

  render() {
    // Called first
    console.log('render', this.state)

    return (
      <form>
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <button>Submit</button>
      </form>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ControlledComponent)
