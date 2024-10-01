import React from 'react'

export default function Navbar() {
  return (
    <>
    <section className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            Logo
          </div>
          <div className='col-8 df fjse'>
              <h6 className={`fs-22 cw`}>Home</h6>
              <h6 className={`fs-22 cw`}>Home</h6>
              <h6 className={`fs-22 cw`}>Home</h6>
              <h6 className={`fs-22 cw`}>Home</h6>
              <h6 className={`fs-22 cw`}>Home</h6>
            </div>
        </div>
      </div>
    </section>
    <style jsx>
      {`
      .header {
  position: absolute;
  top: 0;
  z-index: 999;
  padding: 12px 0px;
  width: 100%;
}
  
      `}
    </style>
    </>
  )
}
