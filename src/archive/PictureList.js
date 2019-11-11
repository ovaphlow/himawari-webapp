import React from 'react'
import { useParams } from 'react-router-dom'

import Sidebar from './components/Sidebar'

const PictureList = () => {
  const [data, setData] = React.useState(0)
  const { id } = useParams()

  React.useEffect(() => {
    console.info(id)
  }, [])

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">查看档案图片</h3>
        <hr />
      </div>
    </div>
  )
}

export default PictureList
