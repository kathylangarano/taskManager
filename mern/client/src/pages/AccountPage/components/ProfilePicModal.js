import { useState } from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import useAuth from '../../../auth/useAuth';
import { toast } from 'react-toastify';


export default function ProfilePicModal({isOpen, close}){
    const {updateUser} =useAuth();

    const   [fileName, setFileName] = useState ("Upload an image");
    const   [selectedFile, setSelectedFile] = useState (null);


    const handleFileChange =(e) =>{
        const [file] = e.target.files;
        const SIZE_50MB=  50 *1024 *1024;
        const isValidSize = file.size < SIZE_50MB;
        const isNameOfOneImageRegEx  = /.(jpe?g|gif|png|svg)$/i;
        const isValidType = isNameOfOneImageRegEx.test(file.name )
        


        if(!isValidSize) return toast.error('Image too heavy, maximum 50MB')
        if(!isValidType) return toast.error('Only images can be uploaded.')



        setFileName(file.name);
        

        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)
    }
    const handleUpdateProfilePic =() =>{
        if(!selectedFile) return toast.error('You must select a new image');
        updateUser({profilePic:selectedFile})
        close()
    }
    


    
    return (
    <Modal show={isOpen} onHide={close}>    
        <Modal.Header closeButton>
            <Modal.Title>Change my profile picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                <Form.Control type="file"
              required
              label={fileName}
              onChange={handleFileChange}
              accept= '.jpg, .jpeg, .gif, .png, .svg'/>
              
                
                    </Form.Group>
            </Form>

            <img
             className='img-fluid mt-3'
            src={selectedFile}
            alt= 'profile-preview'
            />

        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={close}>Cancel</Button>
            <Button variant='primary' onClick={handleUpdateProfilePic} >Update image</Button>
        </Modal.Footer>
    </Modal>
    )
}
//custom= 'true'
                //    label= {fileName} 
                //   data-browse='Subir'
                //    onChange ={handleFileChange}
                 //   accept= '.jpg, .jpeg, .gif, .png, .svg'8 
