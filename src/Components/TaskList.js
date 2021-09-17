import React from 'react'
import Task from '../Components/Task'
function TaskList({ tasks }) {

    return (< div >
        <ul>
            {tasks && tasks.map(task => <Task key={task.id} {...task}></Task>
            )}
        </ul>
    </div>
    );
}

export default TaskList;