import React from 'react'

import Sidebar from './components/Sidebar'

const Search = () => {
  const [list, setList] = React.useState([])

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
            查询条件
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
                    <tr>
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

export default Search
