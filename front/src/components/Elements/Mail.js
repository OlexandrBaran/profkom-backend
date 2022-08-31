import { MdEmail} from 'react-icons/md';

const Mail = ({color}) => {

    return(
        <div className='mt-4'>
        <MdEmail/>
        <span className='mx-2'>
            <a className="text-decoration-none"
                style={{color:color}}
                href={`mailto:${process.env.REACT_APP_BASIC_EMAIL}`}>
                {process.env.REACT_APP_BASIC_EMAIL}
            </a>
        </span>
    </div>
    )
}

export default Mail