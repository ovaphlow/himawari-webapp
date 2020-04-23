import React, { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar'

export function DeptPicker(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await window.fetch(`/api/common/dept/`)
      const res = await response.json()
      setList(res.content)
    })()
  }, [])

  return (
    <div className="form-group">
      <label>部门</label>
      <select name={props.name} value={props.value} className="form-control" onChange={props.handleChange}>
        <option value="0">未选择</option>
        {
          list.map(it => (
            <option key={it.id} value={it.id}>{it.v}</option>
          ))
        }
      </select>
    </div>
  )
}

const Toolbar = () => (
  <>
    <div className="btn-group">
      <a href="#数据管理/部门/新增" className="btn btn-success btn-sm">
        <i className="fa fa-fw fa-plus"></i>
        新增
      </a>
    </div>

    <div className="btn-group pull-right">
      <a href="#数据管理/部门" className="btn btn-secondary btn-sm">
        <i className="fa fa-fw fa-list"></i>
        列表
      </a>
    </div>
  </>
)

export const List = () => {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    fetch(`/api/common/dept/`)
      .then(response => response.json())
      .then(res => {
        if (res.message) {
          window.alert(res.message)
          return
        }
        setList(res.content)
      })
      .catch(err => window.console.error(err))
  }, [])

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-sitemap"></i>
          部门
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-header">
            查询条件
          </div>

          <div className="card-body">
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="text-right">序号</th>
                  <th>名称</th>
                  <th>用户数量</th>
                  <th>操作记录</th>
                </tr>
              </thead>

              <tbody>
                {
                  list.map(it => (
                    <tr key={it.id}>
                      <td>
                        <a href={`#数据管理/部门/${it.id}`}>
                          <i className="fa fa-fw fa-edit"></i>
                        </a>

                        <span className="pull-right">
                          {it.id}
                        </span>
                      </td>
                      <td>{it.v}</td>
                      <td>0</td>
                      <td>
                        <a href={`#数据管理/操作记录/部门/${it.id}`}>
                          <i className="fa fa-fw fa-history"></i>
                        </a>
                      </td>
                    </tr>
                  ))
                }
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
    name: '',
    remark: ''
  })

  const handleChange = e => {
    const { value, name } = e.target
    setItem(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    if (!!!item.name) {
      window.alert('请完整填写所需信息')
      return
    }
    fetch(`/api/common/dept/`, {
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
        window.location = '#数据管理/部门'
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
          <i className="fa fa-fw fa-sitemap"></i>
          部门 - 新增
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-body">
            <div className="row">
              <div className="form-group col-4">
                <label>名称</label>
                <input type="text" name="name" className="form-control" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>备注</label>
              <input type="text" name="remark" className="form-control" onChange={handleChange} />
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

export const Update = props => {
  const [item, setItem] = React.useState(0)

  React.useEffect(() => {
    fetch(`/api/common/dept/${props.match.params.id}`)
      .then(response => response.json())
      .then(res => {
        if (res.message) {
          window.alert(res.message)
          return
        }
        setItem(res.content)
      })
      .catch(err => window.console.error(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = e => {
    const { value, name } = e.target
    setItem(prev => ({ ...prev, [name]: value }))
  }

  const handleRemove = () => {
    if (!!!window.confirm('确定要删除当前数据吗？')) return
    fetch(`/api/common/dept/${item.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(res => {
        if (res.message) {
          window.alert(res.message)
          return
        }
        window.location = '#数据管理/部门'
      })
      .catch(err => window.console.error(err))
  }

  const handleUpdate = () => {
    if (!!!item.v) {
      window.alert('请完整填写所需信息')
      return
    }
    fetch(`/api/common/dept/${item.id}`, {
      method: 'PUT',
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
        window.location = '#数据管理/部门'
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
          <i className="fa fa-fw fa-sitemap"></i>
          部门 - 编辑
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-body">
            <div className="row">
              <div className="form-group col-3">
                <label>名称</label>
                <input type="text" name="v" value={item.v} className="form-control" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>备注</label>
              <input type="text" name="remark" value={item.remark} className="form-control" onChange={handleChange} />
            </div>
          </div>

          <div className="card-footer">
            <div className="btn-group">
              <button type="button" className="btn btn-danger" onClick={handleRemove}>
                删除
              </button>
            </div>

            <div className="btn-group pull-right">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>
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
