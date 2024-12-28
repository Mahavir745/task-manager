import React from 'react'

const FilterSection = ({handleFilterTaskPriority,handleFilterTaskStatus}) => {

  function HandleSelectedPriority(e){
    handleFilterTaskPriority(e.target.value)
  }
  function HandleSelectedStatus(e){
    handleFilterTaskStatus(e.target.value)
  }

  return (
    <div className='w-[375px] sm:w[400px] h-36 border shadow-md'>
      <h1 className='text-xl bg-gray-900 text-white pl-4 p-2 mb-2'>Filter</h1>
      <div className='flex gap-4'>
        <select name="priority" id="priority" className='w-[40%] p-2 m-auto cursor-pointer ' onChange={(e)=> HandleSelectedPriority(e)}>
          <option value="none">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select name="status" id="status" className='w-[40%] p-2 m-auto cursor-pointer ' onChange={(e)=>HandleSelectedStatus(e)}>
          <option value="none">Status</option>
          <option value="pending">Pending</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  )
}

export default FilterSection