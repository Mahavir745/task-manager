import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import EditDisplay from '../Home/EditDisplay';


const Task = ({ taskdetails, HandleDeleteTask, handleMarkCompleted }) => {


  const priority = taskdetails.status
  let background;
  if (priority === "pending") {
    background = "text-white bg-red-600"
  }
  else if (priority === "progress") {
    background = "text-white bg-orange-500"
  }
  else if (priority === "completed") {
    background = "text-white bg-green-600"
  }

  return (
    <div>
      <ul className='flex items-center justify-evenly w-[375px] h-10  border '>
        <li className='w-[180px] border flex justify-center items-center'><pre className='text-gray-900 font-semibold'>ID: </pre> {taskdetails.id}</li>
        <li><MdDelete className='text-red-700 text-2xl cursor-pointer mb-2' title='delete' onClick={() => HandleDeleteTask(taskdetails.id)} /></li>
        <li><IoMdDoneAll className='text-green-600 text-2xl cursor-pointer mb-2' title='mark as complete' onClick={() => handleMarkCompleted(taskdetails.id)} /></li>
        <li><MdModeEditOutline className='text-gray-600 text-2xl cursor-pointer' title='edit' /></li>
      </ul>
      <ul className='flex h-40 gap-1 border w-[375px] sm:w-[620px] md:w-[800px] justify-evenly items-center mb-2 shadow-md rounded-md'>
        <li className='w-[18%]   h-20 flex flex-wrap justify-center text-[14px] text-gray-600 items-center flex-shrink-0 fontDecoration p-2'><pre className=' text-gray-900 font-semibold'>Title: </pre><span>{taskdetails.title}</span></li>
        <li className='w-[38%]   h-30 flex flex-wrap justify-center items-center flex-shrink-0 text-gray-700 leading-[1.4] p-2 text-[14px]'><pre className='text-gray-900 font-semibold'>Description: </pre><span>{taskdetails.description}</span></li>
        <li className={`w-[20%] border h-10 flex justify-center items-center flex-shrink-0 text-[12px] ${background}`}>{priority}</li>
        <li className='w-[10%] border h-10 flex justify-center items-center flex-shrink-0 text-[12px]'>{taskdetails.priority}</li>
      </ul>
    </div>
  )
}

export default Task