import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({text, bgColor, textColor}) => {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>
              <Link to='/'>{text}</Link>
            </h2>
        </div>
    </header>
  )
}

export default Header