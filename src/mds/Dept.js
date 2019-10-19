import React from 'react'

import Sidebar from './components/Sidebar'

const Toolbar = () => {
  return (
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
}

export const List = () => {
  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9">
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
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th>序号</th>
                  <th>名称</th>
                  <th>用户数量</th>
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
                <input type="text" name="name"
                    className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="card-footer">
            <div className="btn-group pull-right">
              <button type="button" className="btn btn-primary">
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