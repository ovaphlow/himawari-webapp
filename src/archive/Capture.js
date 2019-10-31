import React from 'react'

import Sidebar from './components/Sidebar'

/**
 * Windows 10系统下使用Edge测试
 * Chrome, Firefox 可能没有权限
 * @param {*} props 
 */

const Capture = props => {
  const [item, setItem] = React.useState(0)
  const [list, setList] = React.useState([])
  const [constraints] = React.useState({
    audio: true,
    video: {width: 800, height: 600}
  })
  const [index, setIndex] = React.useState(0)
  const videoRef = React.createRef()

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

  const handleOpenDevice = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => videoRef.current.srcObject = stream)
      .catch(err => window.console.error(err))
  }

  const handleCapture = () => {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, constraints.video.width, constraints.video.height)
    context.drawImage(document.getElementById('video'), 0, 0, constraints.video.width, constraints.video.height)

    let d = document.getElementById('canvas').toDataURL()
    let l = list
    l.push({id: index + 1, data: d})
    setList(l)
    setIndex(index + 1)
  }

  const handleRemove = event => {
    const id = parseInt(event.target.getAttribute('data-id'))
    if (!!!id || id < 1) return

    //删除对应图像数据
    // ???
    let li = list
    for (let i = 0; i < li.length; i++) {
      if (li[i].id === id) {
        li.splice(i, 1)
        setList(li)
        break
      }
    }
  }

  const handleUpload = () => {
    // 从缓存(list)中取得图像数据，上传到服务器
  }

  return (
    <div className="row mt-3">
      <div className="col-3 col-lg-2">
        <Sidebar />
      </div>

      <div className="col-9 col-lg-10">
        <h3 className="text-muted">扫描档案图片</h3>
        <hr />

        <div className="alert alert-warning shadow">
          该功能目前使用base64编码存储图片内容，占用空间及带宽比较大。
          <br />
          在使用高拍仪厂商SDK时可以使用SDK自带的文件存储功能，大概能节省1/3的带宽及存储空间。
        </div>

        <div className="card shadow">
          <div className="card-header">
            <span className="lead">{item.sn}：{item.name}（{item.identity}）</span>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col text-center">
                <video id="video" width={`${constraints.video.width}px`} height={`${constraints.video.height}px`} autoPlay="autoplay" ref={videoRef}></video>
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <div className="col text-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-info" onClick={handleOpenDevice}>
                    打开扫描仪
                  </button>

                  <button type="button" className="btn btn-primary" onClick={handleCapture}>
                    <i className="fa fa-fw fa-camera"></i>
                    扫描
                  </button>

                  <button type="button" className="btn btn-success" onClick={handleUpload}>
                    <i className="fa fa-fw fa-upload"></i>
                    上传
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col text-center">
                <canvas id="canvas" width={`${constraints.video.width}px`} height={`${constraints.video.height}px`}></canvas>
              </div>
            </div>

            <div className="row">
              {
                list.map(it => (
                  <div className="card col-3 col-lg-2" key={it.id}>
                    <img src={it.data} alt={it.id} className="card-img-top" />

                    <div className="card-body text-center">
                      <button type="button" className="btn btn-sm btn-outline-danger" data-id={it.id} onClick={handleRemove}>
                        删除
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Capture