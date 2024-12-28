import React, { useState } from 'react'



const Pages = ({HandlePrevious,HandleNext,allStates}) => {

  const Previous = allStates.previous;
  const Next = allStates.next;
  const pageNo = allStates.pageNo

  return (
    <div>
      <div className='flex w-[375px] sm:w-[400px] h-10 gap-4 justify-evenly m-auto items-center mt-4 border'>
        <p className='text-xl text-gray-600'>Pages:</p>
        {Previous && <button className='p-1 pl-4 pr-4 text-white bg-blue-600 rounded-md' onClick={HandlePrevious}>Previous</button>}
        <span className='text-2xl text-white border block pl-3 pr-3 rounded-full bg-gray-950'>{pageNo}</span>
        {Next && <button className='p-1 pl-4 pr-4 text-white bg-gray-700 rounded-md' onClick={HandleNext}>Next</button>}
      </div>
    </div>
  )
}

export default Pages