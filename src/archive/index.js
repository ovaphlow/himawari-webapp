import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Title from '../components/Title'
import Navbar from '../components/Navbar'
import Save from './Save'
import Filter from './Filter'
import Detail from './Detail'
import Capture from './Capture'
import PictureList from './PictureList'
import Picture from './Picture'

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
            <Route exact path="/档案/查询" component={Filter} />
            <Route exact path="/档案/转入" component={Save} />
            <Route exact path="/档案/:id" component={Detail} />
            <Route path="/档案/:id/扫描" component={Capture} />
            <Route exact path="/档案/:id/图像" component={PictureList} />
            <Route path="/档案/:master_id/图像/:id"><Picture /></Route>
          </Switch>
        </div>
      </>
    </HashRouter>
  )
}

export default Index
