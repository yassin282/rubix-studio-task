import React from 'react'

function TaskList({ id, title, description, completed, dueDate }) {

    return (<li>
        {title}
        <button>Delete</button>
        <button> Completed</button>
    </li>
    );
}

export default TaskList;