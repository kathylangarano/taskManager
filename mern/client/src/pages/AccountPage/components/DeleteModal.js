import {Modal, Alert, Button} from 'react-bootstrap';
import useAuth from '../../../auth/useAuth';

export default function DeleteModal({isOpen, close}){
    const {logout} =useAuth();

    const handleDelete = () => {
        //Peticion http
        //close()
        logout();
    }
    return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title>Delete account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Alert variant='danger'>¿Are you sure you want to permanently delete your account??<b>your data will be lost</b></Alert>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={close}>Cancel</Button>
            <Button variant='danger' onClick={handleDelete}>Delete my account</Button>
        </Modal.Footer>
    </Modal>
    )
}
