import {FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa';

const SocialMediaPanel = ({color}) => {

    return(
        <div className='social-media'>
            <span><a href={process.env.REACT_APP_BASIC_FACEBOOK} style={{ color:color}}><FaFacebookF/></a></span>
            <span><a href={process.env.REACT_APP_BASIC_INSTAGRAM} style={{ color:color}}><FaInstagram/></a></span>
            <span><a href={process.env.REACT_APP_BASIC_TELEGRAM} style={{ color:color}}><FaTelegramPlane/></a></span>
        </div>
    )
}

export default SocialMediaPanel