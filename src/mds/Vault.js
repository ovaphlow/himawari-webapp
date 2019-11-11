import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Sidebar from './components/Sidebar'

const Toolbar = () => {
  return (
    <>
      <div className="btn-group">
        <a href="#数据管理/档案库/新增" className="btn btn-success btn-sm">
          <i className="fa fa-fw fa-plus"></i>
          新增
        </a>
      </div>

      <div className="btn-group pull-right">
        <a href="#数据管理/档案库" className="btn btn-secondary btn-sm">
          <i className="fa fa-fw fa-list"></i>
          列表
        </a>
      </div>
    </>
  )
}

export const List = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/vault/`)
      setData(result.data.content)
    }
    fetchData()
  }, [])

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-map-marker"></i>
          档案库
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-body">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>序号</th>
                  <th>名称</th>
                  <th>地址</th>
                  <th>电话</th>
                </tr>
              </thead>

              <tbody>
                {
                  data.map(it => (
                    <tr key={it.id}>
                      <td>
                        <a href={`#数据管理/档案库/${it.id}`}>
                          <i className="fa fa-fw fa-edit"></i>
                        </a>

                        <span className="pull-right">{it.id}</span>
                      </td>
                      <td>{it.name}</td>
                      <td>{it.addr}</td>
                      <td>{it.phone}</td>
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

const Form = props => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>名称</label>
            <input type="text" name="name" value={props.data.name}
                className="form-control"
                onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="col-4 offset-4">
          <div className="form-group">
            <label>电话</label>
            <input type="text" name="phone" value={props.data.phone}
                className="form-control"
                onChange={props.handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>地址</label>
        <input type="text" name="addr" value={props.data.addr}
            className="form-control"
            onChange={props.handleChange}
        />
      </div>
    </>
  )
}

export const Save = () => {
  const [data, setData] = React.useState({
    name: '',
    addr: '',
    phone: ''
  })

  const handleChange = e => {
    const { value, name } = e.target;
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    if (!!!data.name || !!!data.phone || data.addr) {
      window.alert('请完整填写所需信息')
      return
    }
    const result = await axios.post(`/api/vault/`, data)
    if (result.data.message) {
      window.alert(result.data.message)
      return
    }
    window.location = `#数据管理/档案库`
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-map-marker"></i>
          档案库 - 新增
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-body">
            <Form data={data} handleChange={handleChange} />
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

export const Update = () => {
  const [data, setData] = React.useState(0)
  const { id } = useParams()

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/vault/${id}`)
      setData(result.data.content)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = e => {
    const { value, name } = e.target;
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async () => {
    let result = await axios.put(`/api/vault/${id}`, data)
    if (result.data.message) {
      window.alert(result.data.message)
      return
    }
    window.location = '#数据管理/档案库'
  }

  const handleRemove = async () => {
    if (!!!window.confirm('确定要删除当前数据？')) return
    let result = await axios.delete(`/api/vault/${id}`)
    if (result.data.message) {
      window.alert(result.data.message)
      return
    }
    window.location = '#数据管理/档案库'
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-map-marker"></i>
          档案库 - 编辑
        </h3>

        <hr />

        <Toolbar />

        <div className="card shadow mt-2">
          <div className="card-body">
            <Form data={data} handleChange={handleChange} />
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
