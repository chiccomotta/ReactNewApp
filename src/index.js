import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store/store'

import './index.css'
import App from './App'
import { EditPage, AboutPage, NotFoundPage } from './pages'

import registerServiceWorker from './registerServiceWorker'

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact={true} path="/about" component={AboutPage} />
        <Route exact={true} path="/edit" component={EditPage} />

        {/* è importante l'ordine: questa route deve essere l'ultima dello switch */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
