import React from 'react'

import Sidebar from './components/Sidebar'

const JournalList = () => {
  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
        <h3 className="text-muted">
          <i className="fa fa-fw fa-history"></i>
          操作记录
        </h3>

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
                  <th>日期</th>
                  <th>时间</th>
                  <th>用户</th>
                  <th>操作</th>
                  <th>档案</th>
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

export default JournalList