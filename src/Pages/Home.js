import React, { useState, useEffect } from "react";
import { TASKS } from "../Graphql/Queries";
import { CREATE_TASK } from "../Graphql/Mutations";
import TaskList from "../Components/TaskList";
import Taskmodal from "../Components/TaskModal";
import ViewTaskModal from "../Components/ViewTaskModal";
import EditTaskModal from "../Components/EditTaskModal";
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@material-ui/core'
import { Button } from "@mui/material/";
import { useQuery, useMutation } from "@apollo/client";
function Home() {
  // const { loading, data, refetch } = useQuery(TASKS);

  const { loading, error, data, refetch } = useQuery(TASKS, { variables: { first: 7, skip: 0 } });


  // const createTask = useMutation(CREATE_TASK);
  // const { tasks } = data || {};
  const [showModal, setShowModal] = useState({
    ViewModal: false,
    CreateModal: false,
    EditModal: false
  });
  const [currentTask, setCurrentTask] = useState({});
  if (loading) return <Container>Loading...</Container>;

  function showModalFunc(modal, value) {

    setShowModal({ ...showModal, [modal]: value });

  }

  const openTask = (task) => {

    setCurrentTask({ ...task });
    showModalFunc('ViewModal', true)
  }

  const EditTask = (task) => {

    setCurrentTask({ ...task });
    showModalFunc('EditModal', true)
  }
  return (
    <div className="App"
      onScroll={({ target: t }) => {
        if (t.scrollHeight - t.scrollTop === t.clientHeight)
          refetch({ skip: data.length, first: data.length * 2 });
      }}>
      <header className="header">My Tasks</header>
      <Taskmodal open={showModal.CreateModal} setShowModal={showModalFunc} refetch={refetch} ></Taskmodal>

      <TaskList tasks={data ? data.tasks : []} refetch={refetch} openTask={openTask} EditTask={EditTask}

      />
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
