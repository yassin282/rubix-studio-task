import React, { useState, useEffect } from "react";
import Task from '../Components/Task'
import { DELETE_TASK } from "../Graphql/Mutations";
import { useQuery, useMutation } from "@apollo/client";
import { TASKS } from "../Graphql/Queries";
import { EDIT_TASK } from "../Graphql/Mutations";
import { Button, List, Box, Checkbox, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
function TaskList({ tasks, refetch, openTask, EditTask }) {
    // const [deleteItem, { data, loading2, error }] = useMutation(DELETE_TASK);
    // const [list , setList] = useState();
    // const {  loading, data, refetch } = useQuery(TASKS);
    // const createTask = useMutation(CREATE_TASK);
    // const { tasks } = data || {};

    const [deletePost] = useMutation(DELETE_TASK, {
        onCompleted: () => refetch(),
    });
    const [completeTask] = useMutation(EDIT_TASK, {
        onCompleted: () => refetch(),
    });

    useEffect(() => {
        // Update the document title using the browser API
    });
    const deleteTask = (id) => {
        deletePost({
            variables: {
                id: id
            }
        });
    }
    const complete = (task) => {
        // task['completed'] = !task['completed'].value;
        console.log(task)
        completeTask({
            variables: {
                id: task.id,
                data: { completed: !task['completed'] }
            }
        })
    }

    return (< div >
        <List>

            {tasks && tasks.map(task =>
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

                        {/* <Button variant="contained" onClick={() => complete(task)}> Completed</Button> */}
                    </div>

                </div>
            )}
        </List>
    </div >
    );
}

export default TaskList;