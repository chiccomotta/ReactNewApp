import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"

import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const AboutPage = () => <div>About Page</div>

const EditPage = () => <div style={{ color: "red" }}>Edit Web App Page </div>

const routes = (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/about" component={AboutPage} />
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/edit" component={EditPage} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("root"))
registerServiceWorker()
