import React from 'react'

import Sidebar from './components/Sidebar'
import Form from './components/Form'

const Save = () => {
  const [item, setItem] = React.useState({
    sn: '',
    sn_alt: '',
    identity: '',
    name: '',
    birthday: '',
    cangongshijian: '',
    zhicheng: '',
    gongling: '',
    yutuixiuriqi: '',
    tuixiuriqi: '',
    remark: '',
    vault_id: 0,
    phone: ''
  })

  const handleChange = e => {
    const { value, name } = e.target
    setItem(prev => ({ ...prev, [name]: value }))
  }

  const handleIdentityBlur = () => {
    let b = `${item.identity.slice(6, 10)}-${item.identity.slice(10, 12)}-${item.identity.slice(12, 14)}`
    setItem(prev => ({ ...prev, birthday: b }))
  }

  const handleSaveAndCapture = async () => {
    if (!!!item.sn || !!!item.identity || !!!item.name) {
      window.alert('请完整填写所需信息')
      return
    }
    if (item.identity.length !== 18) {
      window.alert('身份证格式错误')
      return
    }

    const response = await fetch(`/api/archive/check-valid`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        sn: item.sn,
        identity: item.identity
      })
    })
    const res = await response.json()
    if (res.content.length > 0) {
      window.alert('档案号或身份证与现有档案冲突')
      return
    }

    fetch(`/api/archive/`, {
      method: 'POST',
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
        window.location = `#档案/${res.content}/扫描`
      })
      .catch(err => window.console.error(err))
  }

  const handleSave = async () => {
    if (!!!item.sn || !!!item.identity || !!!item.name) {
      window.alert('请完整填写所需信息')
      return
    }
    if (item.identity.length !== 18) {
      window.alert('身份证格式错误')
      return
    }

    const response = await fetch(`/api/archive/check-valid`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        sn: item.sn,
        identity: item.identity
      })
    })
    const res = await response.json()
    if (res.content.length > 0) {
      window.alert('档案号或身份证与现有档案冲突')
      return
    }

    fetch(`/api/archive/`, {
      method: 'POST',
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
        window.location = '#档案/查询'
      })
      .catch(err => window.console.error(err))
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar category="transfer-in" />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">转入档案</h3>

        <hr />

        <div className="card shadow">
          <div className="card-body">
            <Form data={item} handleChange={handleChange} handleIdentityBlur={handleIdentityBlur} />
          </div>

          <div className="card-footer">
            <div className="btn-group pull-right">
              <button type="button" className="btn btn-success" onClick={handleSaveAndCapture}>
                <i className="fa fa-fw fa-camera"></i>
                确定并开始扫描档案
              </button>

              <button type="button" className="btn btn-primary" onClick={handleSave}>
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

export default Save
