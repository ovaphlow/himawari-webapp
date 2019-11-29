import React from 'react'

function Toolbar(props) {
  return (
    <div className="mb-2">
      <div className="btn-group">
        <button type="button" className="btn btn-sm btn-outline-warning">
          <i className="fa fa-fw fa-mail-forward"></i>
          转出
        </button>
      </div>

      <div className="btn-group pull-right">
        <a href={`#档案/${props.id}/扫描`} className="btn btn-sm btn-outline-success">
          <i className="fa fa-fw fa-camera"></i>
          扫描
        </a>

        <a href={`#档案/${props.id}/图像`} className="btn btn-sm btn-outline-info">
          <i className="fa fa-fw fa-image"></i>
          查看档案图像
        </a>

        <a href={`#档案/${props.id}`} className="btn btn-sm btn-outline-primary">
          <i className="fa fa-fw fa-archive"></i>
          档案信息
        </a>
      </div>
    </div>
  )
}

export default Toolbar