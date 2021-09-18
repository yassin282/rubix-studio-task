import React, { useState, useEffect } from "react";

import {
  Typography,
  Button,
  Modal,
  Input,
  Box,
  TextField
} from "@mui/material";
import { DateTimePicker } from "@mui/lab";
import Checkbox from '@mui/material/Checkbox';
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_TASK } from "../Graphql/Mutations";


function EditTaskModal({ task, setShowModal, open, refetch }) {
  useEffect(() => {
    // Update the document title using the browser API
  });
  const [inputTask, setInputTask] = useState({ ...task });

  const toggleModal = () => {
    setShowModal('EditModal', false);
  }
  const [editTodo, { data, loading, error }] = useMutation(EDIT_TASK, {
    onCompleted: () => {
      refetch();
      setShowModal('EditModal', false);

    }
  });

  const onChangeHandler = (event) => {
    let temp = inputTask;
    temp[event.target.name] = event.target.value;
    setInputTask({ ...inputTask, [event.target.name]: event.target.value });

  };
  function submit() {

    editTodo({
      variables: {
        id: task.id,
        data: { id: inputTask.id, title: inputTask.title, description: inputTask.description, dueDate: inputTask.dueDate },
      }
    });
  }

  return (
    <div>
      <Modal open={open} className="modal">
        <Box className="modal-box">
          {/* 
            value={task?.title} */}
          <div
            className="padding-md">

            <TextField
              label="title"
              name="title"
              className="padding-md"

              defaultValue={task.title}
              focused
              fullWidth
              onChange={e => onChangeHandler(e)}
            ></TextField>
          </div>
          <div
            className="padding-md">
            <TextField
              label="Description"
              name="description"
              focused
              defaultValue={task.description}
              fullWidth
              onChange={e => onChangeHandler(e)}
            ></TextField>
          </div>
          {/* value={task?.description} */}
          <div
            className="padding-md">

            <TextField
              label="DateTimePicker"
              className="padding-md"
              type="date"
              defaultValue={task.dueDate}

              name="dueDate"
              focused
              fullWidth
              onChange={e => onChangeHandler(e)}
            />
          </div>
          {/* 
            value={task?.dueDate} */}
          {/* <Checkbox
            name="completed"
            inputProps={{ 'aria-label': 'controlled' }}
            onChange={e => onChangeHandler(e)}
          /> */}

          <Button variant="contained" className="margin-md" onClick={() => submit()}> save</Button>

          <Button variant="contained" className="margin-md" onClick={() => toggleModal()}> cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default EditTaskModal;
