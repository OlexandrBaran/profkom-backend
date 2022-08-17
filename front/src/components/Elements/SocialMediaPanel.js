import {FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import { Context } from '../../index';
import { useContext } from 'react';

const SocialMediaPanel = () => {
    const {appTheme} = useContext(Context)

    return(
        <div>
            <span><a href={process.env.REACT_APP_BASIC_FACEBOOK} style={{ color:appTheme.secondaryColor}}><FaFacebookF/></a></span>
            <span><a href={process.env.REACT_APP_BASIC_INSTAGRAM} style={{ color:appTheme.secondaryColor}}><FaInstagram/></a></span>
            <span><a href={process.env.REACT_APP_BASIC_TELEGRAM} style={{ color:appTheme.secondaryColor}}><FaTelegramPlane/></a></span>
        </div>
    )
}

export default SocialMediaPanel