import { BsFillTelephoneFill} from 'react-icons/bs';
import { Context } from '../../index';
import { useContext } from 'react';

const Phones = () => {
    const {appTheme} = useContext(Context)

    return(
        <div className='numbersContainer'>
            <BsFillTelephoneFill />
            <span className='mx-2'>
                <a className="text-decoration-none"
                    style={{color:appTheme.secondaryColor}}
                    href={`tel:${process.env.REACT_APP_BASIC_PHONE_NUMBER_1}`}>
                    {process.env.REACT_APP_BASIC_PHONE_NUMBER_1}
                </a>
            </span>
            <span>
                <a className="text-decoration-none"
                    style={{color:appTheme.secondaryColor}}
                    href={`tel:${process.env.REACT_APP_BASIC_PHONE_NUMBER_2}`}>
                    {process.env.REACT_APP_BASIC_PHONE_NUMBER_2}
                </a>
            </span>
        </div>
    )
}

export default Phones