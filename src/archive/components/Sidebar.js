import React from 'react'

const Sidebar = props => {
  return (
    <div className="list-group shadow">
      <h6 className="text-muted text-center mt-2">选择功能</h6>

      <a href="#档案/转入"
          className={`list-group-item list-group-item-action ${props.category === 'append' ? 'active' : ''}`}
      >
        <i className="fa fa-fw fa-plus"></i>
        转入档案
        <span className="pull-right">
          <i className="fa fa-fw fa-angle-right"></i>
        </span>
      </a>

      <a href="#档案/查询"
          className={`list-group-item list-group-item-action ${props.category === 'search' ? 'active' : ''}`}
      >
        <i className="fa fa-fw fa-search"></i>
        查询档案
        <span className="pull-right">
          <i className="fa fa-fw fa-angle-right"></i>
        </span>
      </a>

      <a href="#档案/备用档案库"
          className={`list-group-item list-group-item-action ${props.category === 'secondary-vault' ? 'active' : ''}`}
      >
        <i className="fa fa-fw fa-folder-open-o"></i>
        备用档案库
        <span className="pull-right">
          <i className="fa fa-fw fa-angle-right"></i>
        </span>
      </a>
    </div>
  )
}

export default Sidebar