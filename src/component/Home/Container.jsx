import React, { useContext, useEffect, useState } from 'react'
import Task from '../AddTask/Task'
import FilterSection from '../Filter/FilterSection'
import Pages from './Pages'
import { taskDataProvider,getPageData } from '../../store/taskData-store'
import WelcomeTask from './WelcomeTask'

const Container = () => {
  const {addTask, handleDeleteTask,handleMarkCompleted,filterData} = useContext(taskDataProvider)
  const [previous, setPrevious] = useState(false);
  const [next, setNext] = useState(false);
  let [pageNo, setPageNo] = useState(1)

  let allTaskData;

  if(filterData.length > 0){
    console.log(true)
   allTaskData = getPageData(filterData,pageNo)
  }
  else{
   allTaskData = getPageData(addTask,pageNo)
  }


  function HandlePrevious() {
    if (pageNo > 1) {
      pageNo -= 1
      setPageNo(pageNo)
      setPrevious(true)
    }
  }

  function HandleNext() {

    if(pageNo >= 1){
      pageNo += 1
      setPageNo(pageNo)
      setNext(true)
      setPrevious(true)
    }
  }

  useEffect(()=>{
    if(allTaskData.length === 5){
      setNext(true)
    }
    else{
      setNext(false)
    }

    if(pageNo === 1){
      setPrevious(false)
    }
  },[allTaskData])

  return (
    <div className='w-[90%] m-auto p-2 flex flex-wrap-reverse justify-center gap-4'>
      <div className='flex justify-evenly gap-3 flex-col'>
        {allTaskData.length === 0 && <WelcomeTask/>}
        {allTaskData.map((task) => <Task taskdetails={task} key={task.id} HandleDeleteTask={handleDeleteTask} handleMarkCompleted= {handleMarkCompleted}/>)}
      </div>
      <div>
        <FilterSection/>
        <Pages HandlePrevious={HandlePrevious} HandleNext={HandleNext} allStates = {{previous,next,pageNo}}/>
      </div>
    </div>
  )
}

export default Container