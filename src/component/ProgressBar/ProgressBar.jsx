import React, { useContext, useEffect, useState } from 'react';
import { taskDataProvider } from '../../store/taskData-store';

const ProgressBar = () => {
  const { addTask } = useContext(taskDataProvider);
  const [completed, setCompleted] = useState(0);
  const [totalTask, setTotalTask] = useState(0);

  useEffect(() => {
    if (addTask.length > 0) {
      const completedCount = addTask.filter((task) => task.status === 'completed');
      setCompleted((completedCount.length));
      setTotalTask((addTask.length));
    } else {
      setCompleted(0);
      setTotalTask(0);
    }
  }, [addTask]);

  //todo: Calculate percentage
  const percentage = totalTask > 0 ? (completed / totalTask) * 100 : 0;

  return (
    <div className='w-[80%] m-auto p-2 mt-4'>
      <div className='relative w-[80%] h-6 bg-gray-300 m-auto rounded overflow-hidden'>
        <div
          className={`absolute h-6 bg-green-700 rounded`}
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
      <p className='w-[80%] m-auto text-[14px] text-gray-500 mt-1'>
        Completed Task: <span>{completed}</span>/<span>{totalTask}</span>
      </p>
    </div>
  );
};

export default ProgressBar;
