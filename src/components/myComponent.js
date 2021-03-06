import React from 'react'
import { compose } from 'redux'
import withResize from 'hoc/withResize'
import withDebug from 'hoc/withDebug'

const MyComponent = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>

export default compose(
  withResize,
  withDebug
)(MyComponent)
