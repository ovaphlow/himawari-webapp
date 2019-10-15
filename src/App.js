import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Archive from './archive'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/档案" component={Archive} />
      </Switch>
    </HashRouter>
  )
}

export default App
