import React, { useState, useEffect } from "react";
import Task from "../Components/Task";

import {
  Typography,
  Button,
  Modal,
  Input,
  Box,
  TextField
} from "@mui/material";
import { DateTimePicker } from "@mui/lab";

import SelectInput from "@mui/material/Select/SelectInput";
function TaskModal({ open, setShowModal, submit, task }) {
  const [inputTask, setInputTask] = useState({
    title: "",
    description: "",
    dueDate: null
  });

  const onChangeHandler = event => {
    console.log(event.target.value);
    let temp = inputTask;
    temp[event.target.name] = event.target.value;
    setInputTask(temp);
  };
  function submit(task) {
    console.log(task);
  }
  return (
    <div>
      <Modal open={open}>
        <div>
          <Input
            label="title"
            name="title"
            onChange={e => onChangeHandler(e)}
          ></Input>

          <Input
            label="Description"
            name="description"
            onChange={e => onChangeHandler(e)}
          ></Input>
          <Input
            label="DateTimePicker"
            type="datetime-local"
            name="dueDate"
            onChange={e => {
              onChangeHandler(e);
            }}
          />
          <button onClick={() => setShowModal(false)}> Cancel</button>
          <button onClick={() => submit(inputTask)}> Submit</button>
        </div>
      </Modal>
    </div>
  );
}

export default TaskModal;
