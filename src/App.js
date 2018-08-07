import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'
import AddTodo from './components/AddTodo'
import ComponentList from './components/ComponentList'
import logo from './logo.svg'
import './App.css'
import gatto from './images/gatto.jpg' // Tell Webpack this JS file uses this image
import MyComponent from './myComponent'
import WebcamCapture from './components/webcam'
import RotateImage from './components/RotateImage'
import ControlledComponent from './components/ControlledComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={gatto} />
          <img src={logo} className="App-logo" alt="logo" /> */}
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
        <MyComponent />
        <FetchComponent />
        <ControlledComponent />
        {/* <WebcamCapture /> */}
        {/* <RotateImage /> */}
      </div>
    )
  }
}

export default App
