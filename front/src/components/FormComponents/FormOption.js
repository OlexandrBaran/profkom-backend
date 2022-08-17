import Form from 'react-bootstrap/Form';
import { useTranslation } from "react-i18next";

const FormOption = ({optionId, optionUnderlineText, isNeedUniversityOption = true, isNeedLabel = true}) => {
    const {t} = useTranslation();
    return(
        <Form.Group className="mb-3 text-center" controlId={optionId}>
            {isNeedLabel && <Form.Label className="text-center">{t("form_select_department")}</Form.Label>}
            <Form.Select >
              {isNeedUniversityOption && <option>{t('option_department_univer')}</option>}
                <option>{t('option_department_bio')}</option>
                <option>{t('option_department_geo')}</option>
                <option>{t('option_department_econ')}</option>
                <option>{t('option_department_engeneer')}</option>
                <option>{t('option_department_med')}</option>
                <option>{t('option_department_med2')}</option>
                <option>{t('option_department_dentist')}</option>
                <option>{t('option_department_sport')}</option>
                <option>{t('option_department_foregin')}</option>
                <option>{t('option_department_it')}</option>
                <option>{t('option_department_history')}</option>
                <option>{t('option_department_math')}</option>
                <option>{t('option_department_IER')}</option>
                <option>{t('option_department_social')}</option>
                <option>{t('option_department_tourism')}</option>
                <option>{t('option_department_phys')}</option>
                <option>{t('option_department_filology')}</option>
                <option>{t('option_department_chem')}</option>
                <option>{t('option_department_law')}</option>
            </Form.Select>
            <Form.Text className="text-muted">
                {t(`${optionUnderlineText}`)}   
            </Form.Text>
        </Form.Group>
    );
}

export default FormOption