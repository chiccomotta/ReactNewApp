import React, { Component } from "react"

const withResize = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        innerWidth: window.innerWidth
      }

      this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize)
    }
    componetWillUnmount() {
      window.removeEventListener("resize", this.handleResize)
    }

    handleResize() {
      this.setState({
        innerWidth: window.innerWidth
      })
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }

export default withResize
