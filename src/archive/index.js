import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Title from '../components/Title'
import Navbar from '../components/Navbar'
import Save from './Save'
import Search from './Search'
import Detail from './Detail'

const Index = () => {
  React.useEffect(() => {
    console.info('权限验证')
  }, [])

  return (
    <HashRouter>
      <>
        <Title />

        <Navbar category="archive" />

        <div className="container-fluid">
          <Switch>
            <Route exact path="/档案/查询" component={Search} />
            <Route exact path="/档案/转入" component={Save} />
            <Route path="/档案/:id" component={Detail} />
          </Switch>
        </div>
      </>
    </HashRouter>
  )
}

export default Index

