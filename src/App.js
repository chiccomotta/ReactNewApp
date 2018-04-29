import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import AddTodo from './components/addTodo'
import ComponentList from './components/componentList'
import logo from './logo.svg'
import './App.css'
import gatto from './images/gatto.jpg' // Tell Webpack this JS file uses this image
import MyComponent from './myComponent'
import WebcamCapture from './components/webcam'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <AddTodo />
        <div
          style={{
            float: 'left',
            border: '1px solid red',
            width: '400px',
            height: '200px'
          }}
        >
          <ComponentList />
        </div>

        {/* <WebcamCapture /> */}
      </div>
    )
  }
}

export default App
