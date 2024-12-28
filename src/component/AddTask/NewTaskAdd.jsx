import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { taskDataProvider } from '../../store/taskData-store';

const NewTaskAdd = () => {

  const titleElement = useRef();
  const desElement = useRef();
  const priorityElement = useRef();
  const statusElement = useRef();
  const navigate = useNavigate();
  const {handleAddTask} = useContext(taskDataProvider)

  let count = 0;

  function HandleAddTask(e){
    e.preventDefault();

    const title = titleElement.current.value;
    const description = desElement.current.value;
    const priority = priorityElement.current.value;
    const status = statusElement.current.value;
    const id = Date.now()

    if(title !== ""){
      count+=1
    }
    if(priority !== 'none'){
      count+=1
    }
    if(status !== 'none'){
      count+=1
    }

    if(count >= 3){
      const task = {title,description,priority,status,id};
      handleAddTask(task)
      navigate("/view-task")
    }
    else{
      alert("Mandatory * Input should be a value  ")
    }


  }

  return (
    <div>
      <div className='flex justify-center items-center h-[500px] flex-col gap-4 '>
        <form action="" className='w-[375px] sm:w-[600px] md:w-[700px] border h-[440px] rounded-md p-2 shadow-md' onSubmit={(e)=> HandleAddTask(e)}>
        <h1 className='text-white bg-gray-900 p-2 text-xl text-center'>Add New Task:</h1>
          <div className='border w-auto h-20 mt-4 p-1 rounded-md '>
            <label htmlFor="title" className='block text-gray-700 mb-1' >Title: <span className='text-red-700'>*</span></label>
            <input type='text' name='title' id='title' placeholder='Task title' ref={titleElement} className='border w-[90%] h-8 pl-4 text-gray-500 text-[14px] rounded-md ml-2 ' />
          </div>
          <div className='border mt-4 p-1 rounded-md'>
            <label htmlFor="description" className='block text-gray-700 mb-1' >Description: </label>
            <textarea id='description' rows={3} cols={40} placeholder='Add a description' ref={desElement} className='border resize-none  text-gray-500 text-[14px] rounded-md pl-4 pt-2 w-[90%] ml-2' />
          </div>
          <div className='flex gap-4 w-[100%] h-20 border items-center mt-4 rounded-md flex-wrap'>
            <div className='flex w-[300px]  justify-between h-8 items-center'>
              <label htmlFor="priority" className=' text-gray-700 text-[14px] pl-2' >Choose priority level <span className='text-red-700'>*</span></label>
              <select name="priority" id="priority" className={`p-1 pl-4 pr-4 cursor-pointer`} ref={priorityElement}>
                <option value="none">Priority Level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className='flex w-[300px] justify-between h-8 items-center p-1 rounded-md'>
              <label htmlFor="status" className=' text-gray-700 text-[14px] pl-2' >Current status <span className='text-red-700'>*</span></label>
              <select name="status" id="status" className='p-1 pl-4 pr-4 cursor-pointer ' ref={statusElement}>
                <option value="none">Status</option>
                <option value="pending">Pending</option>
                <option value="progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className='mt-2 w-[100%]'>
            <button type='submit' className='border rounded-md w-[100%] p-2 text-white bg-gray-900'>Add Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTaskAdd