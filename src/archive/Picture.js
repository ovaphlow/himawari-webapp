import React from 'react'
import { useParams } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'

function Picture() {
  const { master_id, id } = useParams()
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/archive/${master_id}/picture/${id}`)
      const res = await response.json()
      if (res.message) {
        window.alert(res.message)
        return
      }
      setData(res.content)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePrevious = () => {
    window.alert('上一张')
  }

  const handleNext = () => {
    window.alert('下一张')
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">档案图像</h3>
        <hr />

        <Toolbar id={id} />

        <div className="card shadow mb-5">
          <div className="card-header">
            <div className="btn-group pull-right">
              <button type="button" className="btn btn-sm btn-outline-info" onClick={handlePrevious}>
                <i className="fa fa-fw fa-arrow-left"></i>
                上一张
              </button>
              <button type="button" className="btn btn-sm btn-outline-info" onClick={handleNext}>
                <i className="fa fa-fw fa-arrow-right"></i>
                下一张
              </button>
            </div>
          </div>

          <div className="card-body">
            <img src={data.content} alt={data.id} className="img-fluid rounded mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Picture