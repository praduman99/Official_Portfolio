import React from 'react'

const Footer = () => {
  return (
      <div id="footer" className='container-fluid bg-dark text-secondary' style={{ minHeight: '20vh' }}>
      <p className='row justify-content-center p-5'>Copyright © {new Date().getFullYear()}. All rights are reserved</p>
      </div>
  
  )
}

export default Footer