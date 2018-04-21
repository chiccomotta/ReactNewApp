import React, { Component } from "react"
import withResize from "./withResize"

const MyComponent = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>

export default withResize(MyComponent)
