import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-auto h-40 bg-gray-900 flex flex-wrap items-center justify-between sm:justify-evenly p-10 gap-4'>
      <h1 className='text-2xl sm:text-4xl font-semibold text-white'>Task Manager</h1>
      <ul className='text-white flex gap-10 text-[12px] h-20 items-center font-semibold'>
        <Link to="/"><li>Add Task</li></Link>
        <Link to="/view-task"><li>View Task</li></Link>
      </ul>
    </div>
  )
}

export default Header