import { FaMapMarkerAlt} from 'react-icons/fa';
import { Context } from '../../index';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Address = () => {
    const {t} = useTranslation()
    const {appTheme} = useContext(Context)

    return(
        <div>
            <FaMapMarkerAlt/>
            <span className='mx-2'><a href={process.env.REACT_APP_ADDRESS_LINK} target={"blank"} style={{ color:appTheme.secondaryColor, textDecoration:'none'}}>{t('address')}</a></span>
        </div>
    )
}

export default Address