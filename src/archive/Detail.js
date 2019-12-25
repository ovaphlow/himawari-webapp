import React from 'react'

import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import Form from './components/Form'

const Detail = props => {
  const [item, setItem] = React.useState({})

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

  const handleUpdate = async () => {
    if (!!!item.sn || !!!item.identity || !!!item.name) {
      window.alert('请完整填写所需信息')
      return
    }
    if (item.identity.length !== 18) {
      window.alert('身份证格式错误')
      return
    }

    const response = await fetch(`/api/archive/check-valid-with-id`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        id: item.id,
        sn: item.sn,
        identity: item.identity
      })
    })
    const res = await response.json()
    if (res.message) {
      window.alert(res.message)
      return
    }
    if (res.content.length > 0) {
      window.alert('档案号或身份证与现有档案冲突')
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

        <Toolbar id={item.id} />

        <div className="card shadow">
          <div className="card-body">
            <Form data={item} handleChange={handleChange} />
          </div>

          <div className="card-footer">
            <div className="btn-group">
              <button type="button" className="btn btn-outline-danger" onClick={handleRemove}>
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
