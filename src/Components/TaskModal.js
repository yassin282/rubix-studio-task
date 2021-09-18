import React, { useState, useEffect } from "react";
import Task from "../Components/Task";
import { CREATE_TASK } from "../Graphql/Mutations";
import './Component.css';

import {
  Typography,
  Button,
  Modal,
  Input,
  Box,
  TextField
} from "@mui/material";
import { DateTimePicker } from "@mui/lab";
import { useQuery, useMutation } from "@apollo/client";

import SelectInput from "@mui/material/Select/SelectInput";
import { logRoles } from "@testing-library/react";

function TaskModal({ open, setShowModal, submit, task, refetch }) {
  const [addTodo, { data, loading, error }] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      refetch();
      setShowModal('CreateModal', false);

    }
  });
  const [inputTask, setInputTask] = useState({
    title: "",
    description: "",
    dueDate: null,
    completed: false
  });

  const onChangeHandler = event => {
    let temp = inputTask;
    temp[event.target.name] = event.target.value;
    setInputTask(temp);
  };
  function submit(task) {
    // const createMutation = useQuery(CREATE_TASK, task);
    addTodo({
      variables: {
        input: task,
        someOtherVariable: 1234,
      }
    });
  }
  return (
    <div>
      <Modal open={open} className="modal">
        <Box className="modal-box">
          <div>
            <div className="padding-md">
              <TextField
                label="title"
                fullWidth
                name="title"
                focused
                onChange={e => onChangeHandler(e)}
              ></TextField>
            </div>
            <div className="padding-md">

              <TextField
                label="Description"
                fullWidth
                name="description"
                focused
                onChange={e => onChangeHandler(e)}
              ></TextField>
            </div>
            <div className="padding-md">

              <TextField
                label="DateTimePicker"
                type="date"
                name="dueDate"
                fullWidth
                focused
                onChange={e => {
                  onChangeHandler(e);
                }}
              />
            </div>
            <Button className="margin-md" variant="contained" onClick={() => submit(inputTask)}> Submit</Button>

            <Button className="margin-md" variant="contained" onClick={() => setShowModal('CreateModal', false)}> Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskModal;
