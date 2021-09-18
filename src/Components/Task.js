import React from 'react'


function Task({ id, title, description, completed, dueDate }) {


    return (<li>
        <div className="col-4">
            {title}
        </div>

        <div className="col-4">
            {dueDate}
        </div>

    </li>
    );
}

export default Task;