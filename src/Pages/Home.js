import React, { useState, useEffect } from "react";
import { TASKS } from "../Graphql/Queries";
import { CREATE_TASK } from "../Graphql/Mutations";
import TaskList from "../Components/TaskList";
import Taskmodal from "../Components/TaskModal";

import Button from "@mui/material/Button";
import { useQuery, useMutation } from "@apollo/client";
function Home() {
  const { loading, error, data } = useQuery(TASKS);
  // const createTask = useMutation(CREATE_TASK);
  const { tasks } = data || {};
  const [showModal, setShowModal] = useState(false);
  function showModalFunc(input) {
    setShowModal(input);
  }
  function submit(task) {}
  return (
    <div>
      <header></header>
      <Taskmodal open={showModal} setShowModal={showModalFunc}></Taskmodal>

      <Button variant="text" onClick={() => showModalFunc(true)}>
        Create
      </Button>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;
