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


function ViewTaskModal({ task, setShowModal, open }) {
    useEffect(() => {
        // Update the document title using the browser API
        console.log(open, "useEffect");
    });
    console.log(task)
    const toggleModal = () => {
        setShowModal('ViewModal', false);
    }


    return (
        <div>
            <Modal open={open} className="modal" style={{ textAlign: "left" }}>
                <Box className="modal-box">
                    <Typography
                        label="title"
                        name="title"
                        variant="h6"
                        value={task ?.title}
                    >{task ?.title}</Typography>

                    <Typography
                        label="title"
                        name="title"
                        variant="h6"
                    >{task ?.description}</Typography>

                    <Typography
                        label="title"
                        name="title"
                        variant="h6"
                    >{task ?.dueDate}</Typography>


                    <Typography
                        variant="h6"
                    >{task.completed ? 'Completed' : 'Not Completed'}</Typography>


                    <Button variant="contained" onClick={() => toggleModal()}> OK</Button>
                </Box>
            </Modal>
        </div >
    );
}

export default ViewTaskModal;
