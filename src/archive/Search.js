import React from 'react'

import Sidebar from './components/Sidebar'

const Search = () => {
  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">查询档案</h3>

        <hr />

        <div className="card shadow">
          <div className="card-header">
            查询条件
          </div>

          <div className="card-body">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th>序号</th>
                  <th>档案号</th>
                  <th>身份证</th>
                  <th>姓名</th>
                  <th>出生日期</th>
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

export default Search
