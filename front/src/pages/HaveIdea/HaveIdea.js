import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";
import FormInput from "../../components/FormComponents/FormInput";
import FormOption from "../../components/FormComponents/FormOption";
import FormTextarea from "../../components/FormComponents/FormTextarea";
import FormText from "../../components/FormComponents/FormText";


const HaveIdea = () => {
    
    const {t} = useTranslation();

    const sendHaveIdeaPost = () => {
        let nameValue = document.getElementById("haveIdea_name").value;
        let emailValue = document.getElementById("haveIdea_email").value;
        let departmentValue = document.getElementById("haveIdea_department").value;
        let themeValue = document.getElementById("haveIdea_theme").value;
        let textareaValue = document.getElementById("haveIdea_body").value;

        console.log({
            name:nameValue,
            email:emailValue,
            department : departmentValue,
            theme : themeValue,
            textarea:textareaValue,
        });
        /*tut treba dopusatu peredachy w bazu danikh*/ 

    }

    return(
        <Container className="d-flex justify-content-center align-items-center m-5">
            <div className="row">
                <FormText
                    formTextHeading = {'menu_item_haveIdea'}
                    formTextParagraph = {'have_idea_text'}
                />

            <Form className="col-md-6">
                <FormInput 
                    inputId = {"haveIdea_name"}
                    inputName = {'form_name'}
                    inputplaceholder = {'form_name'}
                    underInputText = {"form_name_underInput_text"}
                />

                <FormInput 
                    inputId = {"haveIdea_email"}
                    inputName = {'form_email'}
                    inputplaceholder = {'form_email'}
                    underInputText = {"form_name_underInput_text_email"}
                />

                <FormOption
                    optionId = {'haveIdea_department'}
                    optionUnderlineText={'option_underinput_text_HaveIdea'}
                />

                <FormInput 
                    inputId = {"haveIdea_theme"}
                    inputName = {'trustbox_theme'}
                    inputplaceholder = {'trustbox_theme'}
                    underInputText = {"have_idea_theme"}
                />

                <FormTextarea
                    textareaId = {"haveIdea_body"}
                    textareaLabel = {'have_idea_textarea'}
                    textareaUnderinputText = {'haveidea_underinput_text_textarea'}
                />

                <Button variant="primary" type="submit" onClick={sendHaveIdeaPost}>
                {t('submit')}
                </Button>
            </Form>
            </div>
        </Container>
    );
}
export default HaveIdea;