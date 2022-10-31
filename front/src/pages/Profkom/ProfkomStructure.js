import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Context } from "../..";

const Image = styled.img`
    margin: 5px;
    max-width:90%;
    border: 1px solid #273744;
    border-radius:25px;
    margin-bottom:5%;
`

const ProfkomStructure = observer(() => {
    const {appTheme} = useContext(Context)
    const {t} = useTranslation();
    const currenLanguageCode = localStorage.getItem('i18nextLng') || 'ua'

    return(
        <div 
            className="d-flex justify-content-center flex-column align-items-center"
            style={{backgroundColor:appTheme.themeVariant.mainColor, color:appTheme.themeVariant.textColor}}
        > 
            <h1 className="text-center mt-4">{t('profkom_structure')}</h1>
            {
                (currenLanguageCode === 'ua') ? 
                    <Image src='https://profkom-bucket.s3.amazonaws.com/profkom-structure-ua.png' alt='profkom-structure' />
                :
                    <Image src='https://profkom-bucket.s3.amazonaws.com/profkom-structure-en.png' alt='profkom-structure' />
            }
        
        </div>
    );
})

export default ProfkomStructure;