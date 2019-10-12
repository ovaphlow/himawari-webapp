import React from 'react'

const Navbar = props => (
  <nav className="navbar navbar-expand-sm navbar-dark sticky-top" style={{ marginTop: '-8px' }}>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={`nav-item ${props.category === 'home' ? 'active' : ''}`}>
          <a className="nav-link" href="#/">
            <i className="fa fa-fw fa-home"></i>
            首页
            <span className="sr-only">(current)</span>
          </a>
        </li>

        <li className={`nav-item ${props.category === 'filter' ? 'active' : ''}`}>
          <a className="nav-link" href="#查询档案">
            <i className="fa fa-fw fa-search"></i>
            查询档案
          </a>
        </li>

        <li className={`nav-item ${props.category === 'append' ? 'active' : ''}`}>
          <a className="nav-link" href="#转入档案">
            <i className="fa fa-fw fa-plus"></i>
            转入档案
          </a>
        </li>

        <li className={`nav-item ${props.category === 'remove' ? 'active' : ''}`}>
          <a className="nav-link" href="#转出档案">
            <i className="fa fa-fw fa-upload"></i>
            转出档案
          </a>
        </li>
      </ul>

      <ul className="navbar-nav pull-right">
        <li className="nav-item">
          <a className="nav-link" href="#数据管理/首页">
            <i className="fa fa-fw fa-cogs"></i>
            数据管理
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
