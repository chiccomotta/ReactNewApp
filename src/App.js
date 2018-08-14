import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'
import AddTodo from './components/AddTodo'
import ComponentList from './components/ComponentList'
import logo from './logo.svg'
import './App.css'
import gatto from './images/gatto.jpg' // Tell Webpack this JS file uses this image
import MyComponent from 'components/myComponent'
import WebcamCapture from './components/webcam'
import RotateImage from './components/RotateImage'
import ControlledComponent from './components/ControlledComponent'

class App extends Component {
  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('app-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  // fake authentication Promise (simulo il caricamento dell'applicazione)
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={gatto} />
        </header>
        <AddTodo />

        <ComponentList />
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
