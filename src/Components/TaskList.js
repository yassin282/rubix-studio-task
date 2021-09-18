import React, { useState, useEffect } from "react";
import Task from '../Components/Task'
import { DELETE_TASK } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";
import { EDIT_TASK } from "../Graphql/Mutations";
import { Button, List, Box, Checkbox, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
function TaskList({ tasks, refetch, openTask, EditTask }) {

    const [deletePost] = useMutation(DELETE_TASK, {
        onCompleted: () => refetch(),
    });
    const [cond, setCond] = useState(false);


    const [completeTask] = useMutation(EDIT_TASK, {
        onCompleted: () => refetch(),
    });


    const deleteTask = (id) => {
        deletePost({
            variables: {
                id: id
            }
        });
    }
    const complete = (task) => {
        completeTask({
            variables: {
                id: task.id,
                data: { completed: !task['completed'] }
            }
        })
    }

    return (< div >
        <List >
            <div class="createButton">            <Button variant="contained" className="createButton" onClick={() => setCond(!cond)}>{cond ? 'Hide Done' : 'View Done'}</Button>
            </div>
            {tasks && tasks.map(task => task.completed == cond ?
                <div key={task.id}>

                    <div className="col-2" >
                        <Checkbox
                            checked={task ?.completed}
                            inputProps={{ 'aria-label': 'controlled' }}
                            onClick={() => complete(task)}
                        />
                    </div>

                    <div className="col-6">
                        <Task key={task.id} {...task} ></Task>
                    </div>
                    <div className="col-4">
                        <IconButton onClick={() => openTask(task)}>
                            <VisibilityIcon />
                        </IconButton>
                        <Button size="small" className="margin-md" variant="contained" onClick={() => EditTask(task)}> Edit</Button>
                        <Button size="small" className="margin-md deleteBtn" variant="contained" onClick={() => deleteTask(task.id)}>Delete</Button>

                    </div>

                </div>
                : '')}

        </List>
    </div >
    );
}

export default TaskList;