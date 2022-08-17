import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";


const FormTextarea = ({textareaId, textareaLabel, textareaUnderinputText}) => {
    const {t} = useTranslation();
    return(
        <Form.Group className="mb-3 text-center" controlId={textareaId}>
            <Form.Label>{t(`${textareaLabel}`)}</Form.Label>
                    <Form.Control as="textarea" rows={10} style={{}}/>
                    <Form.Text className="text-muted">
                        {t(`${textareaUnderinputText}`)}   
                    </Form.Text>
        </Form.Group>
    );
}

export default FormTextarea;