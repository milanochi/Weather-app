import React from 'react';
import MyComments from './MyComments';

const MyTasks = ({ tasks }) => {
  return (
    <div>{
        tasks.map((task) =>(
            <MyComments key={task.id} tasks={task} />
        ))
        }
        
    </div>
  )
}

export default MyTasks