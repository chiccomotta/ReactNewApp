import React, { Component } from 'react'

class ControlledComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { text: 'il tuo nome' }
  }

  handleChange = event => {
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
        <input
          type="text"
          defaultValue="Hello react"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default ControlledComponent
