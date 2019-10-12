import React from 'react'

import Title from './components/Title'
import Navbar from './components/Navbar'

const Home = () => {
  const handleSearch = () => {

  }

  return (
    <>
      <Title />

      <Navbar category="home" />

      <div className="container">
        <div className="row mt-5">
          <div className="col-8 offset-2">
            <div className="form-group text-center">
              <label className="lead">输入档案号或身份证号</label>
              <input type="text" className="form-control form-control-lg text-center" />
            </div>

            <span className="text-center">
              <button type="button" className="btn btn-primary" onClick={handleSearch}>
                <i className="fa fa-fw fa-search"></i>
                查询
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
