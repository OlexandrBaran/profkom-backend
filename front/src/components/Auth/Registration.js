import {Button, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import { LOGIN_ROUTE } from '../../utils/consts';
import FormInput from '../../components/FormComponents/FormInput';
import FormOption from '../../components/FormComponents/FormOption';
import { t } from "i18next";


const Registration = () => {

    const registrateAccount = () => {
        let nameValue = document.getElementById("regName_id").value;
        let lastNameValue = document.getElementById("regLastName_id").value;
        let emailValue = document.getElementById("regEmail_id").value;
        let passwordValue = document.getElementById("regPassword_id").value;
        let repeatPasswordValue = document.getElementById("regRepPassword_id").value;
        let departmentValue = document.getElementById("regDepartment_id").value;

        if(passwordValue === repeatPasswordValue){
            console.log({
                name:nameValue,
                lastName:lastNameValue,
                email:emailValue,
                passeord:passwordValue,
                repeatPassword: repeatPasswordValue,
                department : departmentValue
    
            });
            /*tut treba dopusatu peredachy w bazu danikh*/ 
        }
        else{
            alert("Invalid Password")
        }

    }

    return(
        <Card style={{width: 600}} className="p-5 mt-5 mb-5">
                <h2 className="m-auto">{t('reg')}</h2>
                <Form className='d-flex flex-column mt-4'>
                    <FormInput
                        className='mt-3'
                        inputId = {"regName_id"}
                        inputplaceholder = {'auth_name_placelolder'}
                        underInputText = {"auth_name_placelolder"}
                        isNeedInputLabel = {false}
                    />
                    <FormInput
                        className='mt-3'
                        inputId = {"regLastName_id"}
                        inputplaceholder = {'auth_lastname_placelolder'}
                        underInputText = {"auth_lastname_placelolder"}
                        isNeedInputLabel = {false}
                    />
                    <FormInput
                        className='mt-3'
                        inputId = {"regEmail_id"}
                        inputplaceholder = {'auth_email_placelolder'}
                        underInputText = {"auth_email_placelolder"}
                        isNeedInputLabel = {false}
                        type={"email"}
                    />
                    <FormInput
                        className='mt-3'
                        inputId = {"regPassword_id"}
                        inputplaceholder = {'auth_password_placelolder'}
                        underInputText = {"auth_password_placelolder"}
                        isNeedInputLabel = {false}
                        type={"password"}
                    />
                    <FormInput
                        className='mt-3'
                        inputId = {"regRepPassword_id"}
                        inputplaceholder = {'auth_reppassword_placelolder'}
                        underInputText = {"auth_reppassword_placelolder"}
                        isNeedInputLabel = {false}
                        type="password"
                    />

                    <FormOption
                        optionId = {'regDepartment_id'}
                        optionUnderlineText={'auth_option_placelolder'}
                        isNeedUniversityOption = {false}
                        isNeedLabel = {false}
                    />

                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3" controlId='regFormInput'>
                        <div className="d-flex justify-content-between">
                        <div >
                            {t('reg_link_text')} <NavLink to={LOGIN_ROUTE}>{t('log_in')}</NavLink>
                        </div>
                        <Button 
                            type="submit"
                            onClick={registrateAccount}
                            variant={'outline-success'}
                        >
                            {t('Sign_in')}
                        </Button>
                        </div>
                    </Row>
                </Form>
            </Card> 
    )
}

export default Registration