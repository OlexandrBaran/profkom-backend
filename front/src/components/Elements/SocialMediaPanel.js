import {FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import styled from 'styled-components'

const SocialMediaCircle = styled.span`
    border: 2px solid #394E61;
    margin: 5px;
    padding: 4px 6px;
    border-radius: 50%;
`

const SocialMediaPanel = ({color}) => {

    return(
        <div className='social-media'>
            <SocialMediaCircle><a href="https://www.facebook.com/uzhnu" style={{ color:color}}><FaFacebookF/></a></SocialMediaCircle>
            <SocialMediaCircle><a href="https://www.instagram.com/uzhnu_students" style={{ color:color}}><FaInstagram/></a></SocialMediaCircle>
            <SocialMediaCircle><a href="https://web.telegram.org/k/#@uzhnu_today2021" style={{ color:color}}><FaTelegramPlane/></a></SocialMediaCircle>
        </div>
    )
}

export default SocialMediaPanel