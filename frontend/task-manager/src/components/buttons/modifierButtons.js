import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import { statusOptions, persistInBackend, getAuditTrial } from './helpers';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuditTrialRow from './auditTrialRow';



  
export default function CustomButton({buttonType, task, updateTaskCard}) {


    const [showUpdateModal, setUpdateShowModal] = useState(false);
    const [showAuditTrialModal, setAuditTrialShowModal] = useState(false);
    const [taskDetails, setTaskDetailsSelection] = useState();
    const [auditTrialData, setAuditTrialData] = useState([]);

    let localFlaskServer = "http://127.0.0.1:5000";

    const onUpdateClick = () => setUpdateShowModal(true);
    const onAuditTrialClick = () => {
        setAuditTrialShowModal(true);

        axios.get(localFlaskServer + '/audittrial/' + taskDetails.id)
        .then(function (response) {
            // handle success
            console.log(response, "resp received");
            console.log(response.data, "resp returned back");
            console.log(typeof(response.data));
            setAuditTrialData(Array.from(response.data));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    };

    const handleClose = () => {
        setUpdateShowModal(false);
        setAuditTrialShowModal(false);
    };

    const handleSave = (e) => {   
        console.log("Save clicked"); 
        console.log(taskDetails);
        task = taskDetails;
        updateTaskCard({...taskDetails, "status": taskDetails.status});
        persistInBackend(taskDetails);
        handleClose();
    }



    
    useEffect(() => {
        setTaskDetailsSelection(task);
    }, [task, auditTrialData]);

    function handleFormChange(e){
        setTaskDetailsSelection({...taskDetails, status: e.target.value});
    }
    
    const UpdateButton = () => {
        return (
            <div>
                <Modal show={showUpdateModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update {task.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Select aria-label="status-selection-options" onChange={handleFormChange} >
                            <option>Select new status</option>
                            {statusOptions.map((statusOption) => <option key={statusOption} value={statusOption}>{statusOption}</option>)}
                        </Form.Select>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                
                <Button onClick={onUpdateClick}>Update</Button>
            </div>

            
        );
    };
    
    const AuditTrialButton = () => {
        return (
            <div>
                <Modal show={showAuditTrialModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Audit Trial</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{auditTrialData && auditTrialData.length>0 && auditTrialData.map(row => <AuditTrialRow key={row.eventId} new_value={row.new_value} timestamp={row.timestamp} />)}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Button onClick={onAuditTrialClick}>Audit Trial</Button>
            </div> 
        );
    };


    if(buttonType==="Update"){
        return UpdateButton();
    }
    else if(buttonType==="AuditTrial"){
        return AuditTrialButton();
    }
}