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
import TransferOut from './TransferOut'
import ListIsolate from './ListIsolate'
import DetailIsolate from './DetailIsolate'
import ImportData from './ImportData'

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
            <Route exact path="/档案/中转区"><ListIsolate /></Route>
            <Route path="/档案/中转区/:id"><DetailIsolate /></Route>
            <Route path="/档案/导入"><ImportData /></Route>
            <Route exact path="/档案/:id" component={Detail} />
            <Route path="/档案/:id/扫描" component={Capture} />
            <Route exact path="/档案/:id/图像" component={PictureList} />
            <Route path="/档案/:master_id/图像/:id"><Picture /></Route>
            <Route path="/档案/:id/转出"><TransferOut /></Route>
          </Switch>
        </div>
      </>
    </HashRouter>
  )
}

export default Index
