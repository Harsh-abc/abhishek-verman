import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className="footer_wrapper">
          <div className='footer_name'>
            <h1>Abhishek verman</h1>
          </div>
          <div className='footer_links'>
            <ul>
              <li id='home'><a href="#home"></a>Home</li>
              <li>Frames</li>
              <li>Language</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <h1>copyright @2025 Abhishek verman</h1>
      </div>
    </footer>
  )
}

export default Footer;