import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


  
export default function CustomButton({props}) {


    const [showUpdateModal, setUpdateShowModal] = useState(false);
    const [showAuditTrialModal, setAuditTrialShowModal] = useState(false);

    const onUpdateClick = () => {
        setUpdateShowModal(true);
        console.log("update clicked");
    }
    
    const onAuditTrialClick = () => {
        console.log("Audit clicked");
    }

    const handleClose = () => setUpdateShowModal(false);
    // const handleShow = () => setShow(true);
    
    const UpdateButton = () => {
        return (
            <div>
                <Modal show={showUpdateModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
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
            <Button onClick={onAuditTrialClick}>Audit Trial</Button>
        );
    };

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    if(props.buttonType==="Update"){
        return UpdateButton();
    }
    else if(props.buttonType==="AuditTrial"){
        return AuditTrialButton();
    }
}