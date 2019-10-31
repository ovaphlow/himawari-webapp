import React from 'react'

import Sidebar from './components/Sidebar'

const Capture = props => {
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

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">扫描档案图片</h3>
        <hr />

        <div className="card shadow">
          <div className="card-header">
            <span className="lead">{item.sn}：{item.name}（{item.identity}）</span>
          </div>

          <div className="card-body"></div>
        </div>
      </div>
    </div>
  )
}

export default Capture