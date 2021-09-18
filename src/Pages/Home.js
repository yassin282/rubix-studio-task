import React, { useState, useEffect } from "react";
import { TASKS } from "../Graphql/Queries";
import { CREATE_TASK } from "../Graphql/Mutations";
import TaskList from "../Components/TaskList";
import Taskmodal from "../Components/TaskModal";
import ViewTaskModal from "../Components/ViewTaskModal";
import EditTaskModal from "../Components/EditTaskModal";
import AddIcon from '@mui/icons-material/Add';

import Button from "@mui/material/Button";
import { useQuery, useMutation } from "@apollo/client";
function Home() {
  const { loading, data, refetch } = useQuery(TASKS);
  // const createTask = useMutation(CREATE_TASK);
  const { tasks } = data || {};
  const [showModal, setShowModal] = useState({
    ViewModal: false,
    CreateModal: false,
    EditModal: false
  });
  const [currentTask, setCurrentTask] = useState({});

  function showModalFunc(modal, value) {

    setShowModal({ ...showModal, [modal]: value });
    console.log(showModal, "temp[input]");

  }

  const openTask = (task) => {

    setCurrentTask({ ...task });
    console.log(currentTask, "current");
    showModalFunc('ViewModal', true)
  }

  const EditTask = (task) => {

    setCurrentTask({ ...task });
    console.log(currentTask, "current");
    showModalFunc('EditModal', true)
  }
  return (
    <div>
      <header className="header">All Tasks</header>
      <Taskmodal open={showModal.CreateModal} setShowModal={showModalFunc} refetch={refetch} ></Taskmodal>

      <TaskList tasks={tasks} refetch={refetch} openTask={openTask} EditTask={EditTask} />
      <ViewTaskModal open={showModal.ViewModal} task={currentTask} setShowModal={showModalFunc} />
      <EditTaskModal open={showModal.EditModal} task={currentTask} setShowModal={showModalFunc} refetch={refetch} />
      <div className="createButton">
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => showModalFunc('CreateModal', true)}>
          Create
      </Button></div>
    </div>
  );
}

export default Home;
