import './TrustBox.scss'
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";
import FormInput from "../../components/FormComponents/FormInput";
import FormOption from "../../components/FormComponents/FormOption";
import FormTextarea from "../../components/FormComponents/FormTextarea";
import FormText from '../../components/FormComponents/FormText';


const TrustBox = () => {

    const {t} = useTranslation();
    const sendTrustBoxPost = () => {
        let departmentValue = document.getElementById("trustBox_department").value;
        let themeValue = document.getElementById("trustBox_theme").value;
        let textareaValue = document.getElementById("trustBox_body").value;

       console.log({
            department : departmentValue,
            theme : themeValue,
            textarea:textareaValue,
        });
    }

    return(
        <Container className="d-flex justify-content-center align-items-center m-5">
            <div className="row">
            <FormText
                    formTextHeading = {'menu_item_trustbox'}
                    formTextParagraph = {'trust_box_text'}
                />

            <Form className="col-md-6">
                <FormOption
                    optionId = {'trustBox_department'}
                    optionUnderlineText={'option_underinput_text'}
                />
            
                <FormInput 
                    inputId = {"trustBox_theme"}
                    inputName = {'trustbox_theme'}
                    inputplaceholder = {'trustbox_theme'}
                    underInputText = {"trustbox_underinput_text_theme"}
                />

                <FormTextarea
                    textareaId = {"trustBox_body"}
                    textareaLabel = {'trustbox_textarea'}
                    textareaUnderinputText = {'trustbox_underinput_text_textarea'}
                />

                <Button variant="primary" type="submit" onClick={sendTrustBoxPost}>
                {t('submit')}
                </Button>
            </Form>
            </div>
        </Container>
    );
}

export default TrustBox;