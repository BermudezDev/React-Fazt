import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskCard({task}) { //recibe el task desde TaskList.jsx
  const {deleteTask} = useContext(TaskContext)
  return (
    
    <div className='bg-gray-800 text-white p-4 rounded-md'>
        <div key={task.id}>
          <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
          <p className='text-sm text-gray-500'>{task.description}</p>
        </div>
        <button className='bg-cyan-600 rounded-md mt-2 px-2 py-1 hover:bg-cyan-800'
         onClick={()=>{deleteTask(task.id)}
          }>Delete</button>
    </div>
  )
}

export default TaskCard