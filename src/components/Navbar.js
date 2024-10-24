import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full flex justify-between p-3 ' >
        <h1 className=' w-1/3 text-xl p-3' >Task Rabbit</h1>
        <div className='w-1/2 p-3 flex justify-around ' >
            <Link className='w-auto text-xl ' to='/'>Home</Link>
            <Link className='w-auto text-xl ' to='/login'>Login</Link>
            <Link className='w-auto text-xl ' to='/signup'>Signup</Link>
        </div>
    </div>
  )
}

export default Navbar