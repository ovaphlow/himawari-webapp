import React from 'react'

import Title from './components/Title'
import Navbar from './components/Navbar'

const Home = () => {
  const [item, setItem] = React.useState({
    keyword: ''
  })

  const handleChange = e => {
    const { value, name } = e.target;
    setItem(prev => ({ ...prev, [name]: value }))
  }

  const handleSearch = () => {
    fetch(`/api/archive/search`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(res => {
        console.info(res)
        if (res.message) {
          window.alert(res.message)
          return
        }
        //
      })
      .catch(err => window.console.error(err))
  }

  return (
    <>
      <Title />

      <Navbar category="home" />

      <div className="container">
        <div className="row mt-5">
          <div className="col-8 offset-2 text-center">
            <div className="form-group">
              <label className="lead">输入档案号或身份证</label>
              <input type="text" name="keyword"
                className="form-control form-control-lg text-center"
                onChange={handleChange}
              />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSearch}>
              <i className="fa fa-fw fa-search"></i>
              查询
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
