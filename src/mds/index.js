import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Title from '../components/Title'
import Navbar from '../components/Navbar'
import JournalList from './JournalList'
import { List as UserList, Save as UserSave } from './User'
import { List as DeptList, Save as DeptSave } from './Dept'
import { List as VaultList, Save as VaultSave } from './Vault'

const Index = () => {
  React.useEffect(() => {
    console.info('权限验证')
  }, [])

  return (
    <HashRouter>
      <>
        <Title />

        <Navbar category="mds" />

        <div className="container-fluid">
          <Switch>
            <Route path="/数据管理/操作记录" component={JournalList} />
            <Route exact path="/数据管理/用户" component={UserList} />
            <Route path="/数据管理/用户/新增" component={UserSave} />
            <Route exact path="/数据管理/部门" component={DeptList} />
            <Route path="/数据管理/部门/新增" component={DeptSave} />
            <Route exact path="/数据管理/档案库" component={VaultList} />
            <Route path="/数据管理/档案库/新增" component={VaultSave} />
          </Switch>
        </div>
      </>
    </HashRouter>
  )
}

export default Index

