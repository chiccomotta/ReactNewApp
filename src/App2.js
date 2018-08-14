import React, { Component } from 'react'
import { compose } from 'recompose'
import { withStore, withConfiguration } from 'ui/hoc'
import { Router } from './Router'
import 'styles/main.css'
import ResponsiveHelper from 'helpers/responsive'

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById('app-progress-indicator')
    if (ele) {
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
  }

  render() {
    return (
      <div className={ResponsiveHelper.applicationClasses()}>
        <Router {...this.props} />
      </div>
    )
  }
}

export default compose(
  withStore,
  withConfiguration
)(App)
