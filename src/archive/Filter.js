import React from 'react'

import Sidebar from './components/Sidebar'

const Filter = () => {
  const [list, setList] = React.useState([])
  const [item, setItem] = React.useState({ // 查询条件
    sn: '',
    identity: '',
    name: ''
  })

  React.useEffect(() => {
    fetch(`/api/archive/`)
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

  const handleChange = e => {
    const { value, name } = e.target
    setItem(prev => ({ ...prev, [name]: value }))
  }

  const handleFilter = () => {
    fetch(`/api/archive/filter`, {
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
        window.console.info(res)
        setList(res.content)
      })
      .catch(err => window.console.error(err))
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">查询档案</h3>

        <hr />

        <div className="card shadow">
          <div className="card-header">
            <div className="row">
              <div className="form-group col">
                <label>档案号</label>
                <input type="text" name="sn" className="form-control" onChange={handleChange} />
              </div>

              <div className="form-group col">
                <label>身份证</label>
                <input type="text" name="identity" className="form-control" onChange={handleChange} />
              </div>

              <div className="form-group col">
                <label>姓名</label>
                <input type="text" name="name" className="form-control" onChange={handleChange} />
              </div>
            </div>

            <div className="btn-group">
              <button type="button" className="btn btn-secondary" onClick={() => window.location.reload(true)}>
                <i className="fa fa-fw fa-refresh"></i>
                重置
              </button>
            </div>

            <div className="btn-group pull-right">
              <button type="button" className="btn btn-success" onClick={handleFilter}>
                <i className="fa fa-fw fa-search"></i>
                查询
              </button>
            </div>
          </div>

          <div className="card-body">
            <table className="table table-hover table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>序号</th>
                  <th>档案号</th>
                  <th>附加档案号</th>
                  <th>身份证</th>
                  <th>姓名</th>
                  <th>出生日期</th>
                </tr>
              </thead>

              <tbody>
                {
                  list.map(it => (
                    <tr key={it.id}>
                      <td>
                        <a href={`#档案/${it.id}`}>
                          <i className="fa fa-fw fa-edit"></i>
                        </a>

                        <span className="pull-right">{it.id}</span>
                      </td>
                      <td>{it.sn}</td>
                      <td>{it.sn_alt}</td>
                      <td>{it.identity}</td>
                      <td>{it.name}</td>
                      <td>{it.birthday}</td>
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

export default Filter
