import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";
import FormInput from "../../components/FormComponents/FormInput";
import FormOption from "../../components/FormComponents/FormOption";
import FormTextarea from "../../components/FormComponents/FormTextarea";
import FormText from "../../components/FormComponents/FormText";


const AdditionalPoints = () => {
    
    const {t} = useTranslation();

    const sendAdditionalPointPost = () => {
        let nameValue = document.getElementById("additionalPoint_name").value;
        let emailValue = document.getElementById("additionalPoint_email").value;
        let departmentValue = document.getElementById("additionalPoint_department").value;
        let courseValue = document.getElementById("additionalPoint_course").value;
        let categoryValue = document.getElementById("additionalPoint_category").value;
        let textareaValue = document.getElementById("additionalPoint_body").value;
        let filesValue = document.getElementById("additionalPoint_file").value;

        console.log({
            name:nameValue,
            email:emailValue,
            department : departmentValue,
            course : courseValue,
            category : categoryValue,
            textarea:textareaValue,
            files : filesValue,
        });
        /*tut treba dopusatu peredachy w bazu danikh*/ 

    }

    return(
        <Container className="d-flex justify-content-center align-items-center m-5">
            <div className="row">
                <FormText
                    formTextHeading = {'menu_item_additional_points'}
                    formTextParagraph = {'additional_points_text'}
                />

                <Form className="col-md-6">
                    <FormInput 
                        inputId = {"additionalPoint_name"}
                        inputName = {'form_name'}
                        inputplaceholder = {'form_name'}
                        underInputText = {"form_name_underInput_text"}
                    />

                    <FormInput 
                        inputId = {"additionalPoint_email"}
                        inputName = {'form_email'}
                        inputplaceholder = {'form_email'}
                        underInputText = {"form_name_underInput_text_email"}
                    />

                    <FormOption
                        optionId = {'additionalPoint_department'}
                        optionUnderlineText={'additionalPoint_underinput_option'}
                        isNeedUniversityOption = {false}
                    />

                    <Form.Group className="mb-3 text-center" controlId='additionalPoint_course'>
                        <Form.Label className="text-center">{t("course")}</Form.Label>
                        <Form.Select >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                        {t('course_underline')}   
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 text-center" controlId='additionalPoint_category'>
                        <Form.Label className="text-center">{t("additionalpoint_select_category")}</Form.Label>
                        <Form.Select >
                            <option>{t('scientific_activity')}</option>
                            <option>{t('social_activity')}</option>
                            <option>{t('sports_activity')}</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            {t('additionalpoint_select_category_underline')}   
                            </Form.Text>
                    </Form.Group>

                    <FormTextarea
                        textareaId = {"additionalPoint_body"}
                        textareaLabel = {'addPoint_textarea'}
                        textareaUnderinputText = {'addPoint_textarea_undertext'}
                    />

                    <Form.Group controlId="additionalPoint_file" className="mb-3">
                        <Form.Label>{t('addPoint_file_headtext')}</Form.Label>
                        <Form.Control type="file" multiple />
                        <Form.Text className="text-muted">
                            {t('addPoint_file_headtext_underline')}   
                            </Form.Text>
                    </Form.Group>

                <Button variant="primary" onClick={sendAdditionalPointPost}>
                {t('submit')}
                </Button>
            </Form>
            </div>
        </Container>
    );
}
export default AdditionalPoints;