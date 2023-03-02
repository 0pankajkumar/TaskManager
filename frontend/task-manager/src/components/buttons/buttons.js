import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import { statusOptions } from './helpers';
import Form from 'react-bootstrap/Form';


  
export default function CustomButton({props}) {


    const [showUpdateModal, setUpdateShowModal] = useState(false);
    const [showAuditTrialModal, setAuditTrialShowModal] = useState(false);
    const [taskDetails, setTaskDetailsSelection] = useState();

    const onUpdateClick = () => setUpdateShowModal(true);
    const onAuditTrialClick = () => setAuditTrialShowModal(true);

    const handleClose = () => {
        setUpdateShowModal(false);
        setAuditTrialShowModal(false);
    };

    const handleSave = (e) => {    
        console.log(taskDetails);
        props.task = taskDetails;
        props.handler.taskCardDataModifier({
            ...taskDetails,
            status: taskDetails.status
        });
        handleClose();
    }

    useEffect(() => {
        setTaskDetailsSelection(props.task);
    }, [props.task]);

    function handleFormChange(e){
        setTaskDetailsSelection({...taskDetails, status: e.target.value});
    }
    
    const UpdateButton = () => {
        return (
            <div>
                <Modal show={showUpdateModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Update {props.task.title}</Modal.Title>
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
                    <Modal.Body>{props.task.eta_updates}</Modal.Body>
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


    if(props.buttonType==="Update"){
        return UpdateButton();
    }
    else if(props.buttonType==="AuditTrial"){
        return AuditTrialButton();
    }
}