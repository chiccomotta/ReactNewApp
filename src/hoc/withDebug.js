import React, { Component } from 'react'

const withDebug = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log('DidMount in withDebug')
    }

    render() {
      return (
        <div style={{ border: '10px solid red' }}>
          <Component {...this.props} {...this.state} />
        </div>
      )
    }
  }

export default withDebug
