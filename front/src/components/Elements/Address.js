import { FaMapMarkerAlt} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Address = ({color}) => {
    const {t} = useTranslation()

    return(
        <div>
            <FaMapMarkerAlt/>
            <span className='mx-2'>
                <a href={"https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D1%8C%D0%BA%D0%B0,+12,+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+88000/@48.6375496,22.2859202,17z/data=!3m1!4b1!4m5!3m4!1s0x47391830a53db739:0x6126ff04a57c20e0!8m2!3d48.6375496!4d22.2859202"} 
                   target={"blank"} 
                   style={{ color:color, textDecoration:'none'}}>
                    {t('address')}
                </a>
            </span>
        </div>
    )
}

export default Address