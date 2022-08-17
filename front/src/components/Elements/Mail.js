import { MdEmail} from 'react-icons/md';
import { Context } from '../../index';
import { useContext } from 'react';

const Mail = () => {
    const {appTheme} = useContext(Context)

    return(
        <div className='mt-4'>
        <MdEmail/>
        <span className='mx-2'>
            <a className="text-decoration-none"
                style={{color:appTheme.secondaryColor}}
                href={`mailto:${process.env.REACT_APP_BASIC_EMAIL}`}>
                {process.env.REACT_APP_BASIC_EMAIL}
            </a>
        </span>
    </div>
    )
}

export default Mail