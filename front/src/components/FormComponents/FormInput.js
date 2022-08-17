import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";


const FormInput = ({inputId, inputName, inputplaceholder, underInputText, isNeedInputLabel = true, type='text'}) => {
    const {t} = useTranslation();
    return(
        <Form.Group className="mb-3 text-center" controlId={inputId}>
          {isNeedInputLabel && <Form.Label>{t(`${inputName}`)}</Form.Label>}
            <Form.Control type={type} maxLength={100} placeholder={t(`${inputplaceholder}`) + '...'} />
            <Form.Text className="text-muted">
                {t(`${underInputText}`)}   
            </Form.Text>
        </Form.Group>
    );

}

export default FormInput;