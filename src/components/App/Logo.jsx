import React from 'react';
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className="align-center flex flex-1  ">
      <Link to='/'>
        LOGO!
      </Link>
    </div>
  )
}

export default Logo