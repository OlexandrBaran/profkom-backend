import React, { useContext } from 'react';
import {Button, Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Context } from '../..';
import {NavLink, useLocation, /*useHistory*/} from "react-router-dom";
import Row from "react-bootstrap/Row";
import { LOGIN_ROUTE, REGESTRATION_ROUTE } from '../../utils/consts';
import FormInput from '../../components/FormComponents/FormInput';
import FormOption from '../../components/FormComponents/FormOption';
import Registration from '../../components/Auth/Registration';
import Login from '../../components/Auth/Login';



const Auth = () => { 
    const location = useLocation()
    const isRegistration = location.pathname === REGESTRATION_ROUTE

    //const {user} = useContext(Context)
    return (
    <Container className='d-flex justify-content-center align-items-center'>
        {isRegistration ? 
            <Registration/> 
            :
            <Login/>
        }
    </Container>)
}

export default Auth