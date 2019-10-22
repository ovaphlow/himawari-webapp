import React from 'react'

import Sidebar from './components/Sidebar'

const Toolbar = () => {
  return (
    <>
      <div className="btn-group">
        <a href="#数据管理/用户/新增" className="btn btn-success btn-sm">
          <i className="fa fa-fw fa-plus"></i>
          新增
        </a>
      </div>

      <div className="btn-group pull-right">
        <a href="#数据管理/用户" className="btn btn-secondary btn-sm">
          <i className="fa fa-fw fa-list"></i>
          列表
        </a>
      </div>
    </>
  )
}

export const List = () => {
  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-users"></i>
          用户
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-header">
            查询条件
          </div>

          <div className="card-body">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>用户名</th>
                  <th>管理员权限</th>
                  <th>操作记录</th>
                </tr>
              </thead>

              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Save = () => {
  const [item, setItem] = React.useState({
    dept_id: 0,
    username: '',
    password: '',
    name: '',
    remark: '',
    auth_super: "0"
  })

  const handleChange = e => {
    const { value, name } = e.target;
    setItem(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    if (!!!item.name || !!!item.username) {
      window.alert('请完整填写所需信息')
      return
    }
    fetch(`/api/user/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(res => {
        if (res.message) {
          window.alert(res.message)
          return
        }
        window.location = '#数据管理/用户'
      })
      .catch(err => window.console.error(err))
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-users"></i>
          用户 - 新增
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-body">
            <div className="row">
              <div className="form-group col-4">
                <label>姓名</label>
                <input type="text" name="name"
                    className="form-control"
                    onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <label>用户名</label>
                <input type="text" name="username"
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>部门</label>
                <input type="text" name="dept_id"
                    className="form-control"
                    onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-3 col-lg-2">
                <label>权限：管理员</label>
                <select name="auth_super" className="form-control" onChange={handleChange}>
                  <option value="0">否</option>
                  <option value="1">是</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>备注</label>
              <input type="text" name="remark"
                  className="form-control"
                  onChange={handleChange}
              />
            </div>
          </div>

          <div className="card-footer">
            <div className="btn-group pull-right">
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                <i className="fa fa-fw fa-check"></i>
                确定
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}