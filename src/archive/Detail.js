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

  const handleUpdate = () => {
    console.info(item)
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">查看档案</h3>

        <hr />

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