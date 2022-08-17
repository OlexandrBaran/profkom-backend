import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import FormOption from '../FormComponents/FormOption';
import {createTeamMember} from '../../http/teamMemberApi'

const CreateTeamMember = ({show, onHide}) => {
    const [firstNameUA, setFirstNameUA] = useState('')
    const [lastNameUA, setLastNameUA] = useState('')
    const [firstNameEN, setFirstNameEN] = useState('')
    const [lastNameEN, setLastNameEN] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [descriptionEN, setDescriptionEN] = useState('')
    const [descriptionUA, setDescriptionUA] = useState('')
    const [department, setDepartment] = useState('')
    const [positionUA, setPositionUA] = useState('')
    const [positionEN, setPositionEN] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [telegram, setTelegram] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

   const addTeamMember = () => {
        setDepartment(document.getElementById('salsa').value)
        const formData = new FormData()
        formData.append('firstNameUA', firstNameUA)
        formData.append('lastNameUA', lastNameUA)
        formData.append('firstNameEN', firstNameEN)
        formData.append('lastNameEN', lastNameEN)
        formData.append('email', email)
        formData.append('phoneNumber', phoneNumber)
        formData.append('descriptionEN', descriptionEN)
        formData.append('descriptionUA', descriptionUA)
        formData.append('department', department)
        formData.append('image', file)
        formData.append('positionUA', positionUA)
        formData.append('positionEN', positionEN)
        formData.append('instagram', instagram)
        formData.append('facebook', facebook)
        formData.append('telegram', telegram)
        createTeamMember(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add teamMember
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={firstNameUA}
                        onChange={e => setFirstNameUA(e.target.value)}
                        className='mt-2'
                        placeholder={"Введите teamMember firstNameUA"}
                    />
                    <Form.Control
                        value={lastNameUA}
                        onChange={e => setLastNameUA(e.target.value)}
                        placeholder={"Введите lastNameUA teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={firstNameEN}
                        onChange={e => setFirstNameEN(e.target.value)}
                        placeholder={"Введите firstNameEN teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={lastNameEN}
                        onChange={e => setLastNameEN(e.target.value)}
                        placeholder={"Введите lastNameEN teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={"Введите email teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder={"Введите phoneNumber teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={descriptionEN}
                        onChange={e => setDescriptionEN(e.target.value)}
                        placeholder={"Введите descriptionEN teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={descriptionUA}
                        onChange={e => setDescriptionUA(e.target.value)}
                        placeholder={"Введите descriptionUA teamMember"}
                        className='mt-2'
                    />
                        <FormOption 
                        optionId={"salsa"} 
                        optionUnderlineText={''}
                        value={department}
                        onChange={e => setDepartment(e.target.value)}
                        />


                    <Form.Control
                        placeholder={"Введите image teamMember"}
                        className='mt-2'
                        type='file'
                        onChange={selectFile}
                    />
                    <Form.Control
                        value={positionUA}
                        onChange={e => setPositionUA(e.target.value)}
                        placeholder={"Введите positionUA teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={positionEN}
                        onChange={e => setPositionEN(e.target.value)}
                        placeholder={"Введите positionEN teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={instagram}
                        onChange={e => setInstagram(e.target.value)}
                        placeholder={"Введите instagram teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={facebook}
                        onChange={e => setFacebook(e.target.value)}
                        placeholder={"Введите facebook teamMember"}
                        className='mt-2'
                    />
                    <Form.Control
                        value={telegram}
                        onChange={e => setTelegram(e.target.value)}
                        placeholder={"Введите telegram teamMember"}
                        className='mt-2'
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTeamMember}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTeamMember;