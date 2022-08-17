import { useTranslation } from "react-i18next";


const FormText = ({formTextHeading, formTextParagraph}) => {
    const {t} = useTranslation();
    return(
        <div className="col-md-6 text-center">
        <h1 className="d-block">{t(`${formTextHeading}`)}</h1>
        <span>
            <p className="text-justify">{t(`${formTextParagraph}`)}</p>
            </span>
    </div>
    );
}

export default FormText;