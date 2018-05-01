import React from 'react'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { EditPage, AboutPage, NotFoundPage } from 'pages'
import App from 'App'

const AppRouter = () => (
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

export default AppRouter
