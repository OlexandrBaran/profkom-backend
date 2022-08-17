import {Button, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card"; 
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import { REGESTRATION_ROUTE } from '../../utils/consts';
import FormInput from '../../components/FormComponents/FormInput';
import FormOption from '../../components/FormComponents/FormOption';
import { t } from "i18next";


const AuthFormRow = ({route, linkText, navLink, btnText}) => {



    return(
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <div className="d-flex justify-content-between">
                <div >
                   {t(`${linkText}`)} <NavLink to={route}>{t(`${navLink}`)}</NavLink>
                </div>
            <Button 
                type="submit"
                onClick={registrateAccount}
                            variant={'outline-success'}
                        >
                            {t(`${btnText}`)}
                        </Button>
                        </div>
                    </Row>
    )
}

export default AuthFormRow