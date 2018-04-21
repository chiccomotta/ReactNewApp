import React, { Component } from "react"
import store from "./store/store"

import logo from "./logo.svg"
import "./App.css"
import gatto from "./images/gatto.jpg" // Tell Webpack this JS file uses this image
import MyComponent from "./myComponent"
import WebcamCapture from "./components/webcam"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent />

        <WebcamCapture />
      </div>
    )
  }
}

export default App
