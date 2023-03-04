
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

import { statusOptions } from './helpers';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
let localFlaskServer = "http://127.0.0.1:5000";

  
export default function AddNewTaskButton() {
    const [showAddNewTaskForm, setShowAddNewTaskForm] = useState(false);
    const [taskForm, setTaskForm] = useState({
        title: "",
        eta: new Date(),
        status: "InProgress"
    });

    const toggleShowAddNewTaskForm = () => setShowAddNewTaskForm(showAddNewTaskForm === true ? false : true);
    const handleSave = (e) => {
        e.preventDefault();
        console.log("sae clicked");

        axios.post(localFlaskServer + '/add', {
            title : taskForm.title,
            eta: taskForm.eta,
            status: taskForm.status
        })
            .then(function (response) {
                // handle success
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        toggleShowAddNewTaskForm();
         
    }

    function handleInputForm(e){
        console.log(e);
        
        console.log(e.target.name, "clicked", e.target.value);
        setTaskForm({
            ...taskForm,
            [e.target.name]: e.target.value
        });
        console.log(taskForm);
    }


    return <div>
        <Modal show={showAddNewTaskForm} onHide={toggleShowAddNewTaskForm}>
            <Modal.Header closeButton>
            <Modal.Title>Add new task</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSave}>
                    
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" value={taskForm.title} onChange={handleInputForm} placeholder="Enter Task Title" required/>
                    </Form.Group>

                    <Form.Group  controlId="eta">
                        <Form.Label>ETA</Form.Label>
                        <Form.Control type="date" name="eta" value={taskForm.eta} onChange={handleInputForm}placeholder="ETA" required/>
                    </Form.Group>

                    <Form.Select aria-label="status-selection-options" name="status" onChange={handleInputForm} >
                        <option>Select status</option>
                        {statusOptions.map((statusOption) => <option key={statusOption} value={statusOption}>{statusOption}</option>)}
                    </Form.Select>

                    <Button type='submit' onClick={handleSave}>Save Task</Button>
                </Form>




            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={toggleShowAddNewTaskForm}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>

        <Button variant="success" onClick={toggleShowAddNewTaskForm}>Add new task</Button>
    </div>
}