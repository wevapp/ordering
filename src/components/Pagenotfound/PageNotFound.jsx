import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='text-2xl font-semibold'>Not found page 404... <Link to='/'>Goto Login</Link></div>
  )
}

export default PageNotFound