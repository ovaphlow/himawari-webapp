import React from 'react'

import Sidebar from './components/Sidebar'

const Detail = props => {
  const [item, setItem] = React.useState(0)

  React.useEffect(() => {
    fetch(`/api/archive/${props.match.params.id}`)
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
    if (!!!window.confirm('确定要删除当前数据？')) return
    fetch(`/api/archive/${item.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(res => {
        if (res.message) {
          window.alert(res.message)
          return
        }
        window.location = '#档案/查询'
      })
      .catch(err => window.console.error(err))
  }

  const handleUpdate = () => {
    if (!!!item.sn || !!!item.identity || !!!item.name) {
      window.alert('请完整填写所需信息')
      return
    }
    if (item.identity.length !== 18) {
      window.alert('身份证格式错误')
      return
    }
    fetch(`/api/archive/${item.id}`, {
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
        window.location.reload(true)
      })
      .catch(err => window.console.error(err))
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">查看档案</h3>
        <hr />

        <div className="row mb-2">
          <div className="col">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-warning">
                <i className="fa fa-fw fa-mail-forward"></i>
                转出
              </button>
            </div>

            <div className="btn-group pull-right">
              <a href={`#档案/${item.id}/扫描`} className="btn btn-sm btn-outline-success">
                <i className="fa fa-fw fa-camera"></i>
                扫描
              </a>
            </div>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="form-group col-3">
                <label>档案号</label>
                <input type="text" name="sn" value={item.sn}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>附加档案号</label>
                <input type="text" name="sn_alt" value={item.sn_alt}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <label>身份证</label>
                <input type="text" name="identity" value={item.identity}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>姓名</label>
                <input type="text" name="name" value={item.name}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>出生日期</label>
                <input type="text" name="birthday" value={item.birthday}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <label>参加工作时间</label>
                <input type="text" name="cangongshijian" value={item.cangongshijian}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>职称</label>
                <input type="text" name="zhicheng" value={item.zhicheng}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>工龄</label>
                <input type="text" name="gongling" value={item.gongling}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col">
                <label>预退休日期</label>
                <input type="text" name="yutuixiuriqi" value={item.yutuixiuriqi}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>

              <div className="form-group col">
                <label>退休日期</label>
                <input type="text" name="tuixiuriqi" value={item.tuixiuriqi}
                    className="form-control"
                    onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>档案所在地</label>
              <input type="text" name="suozaidi" value={item.suozaidi}
                  className="form-control"
                  onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>备注</label>
              <input type="text" name="remark" value={item.remark}
                  className="form-control"
                  onChange={handleChange}
              />
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

export default Detail