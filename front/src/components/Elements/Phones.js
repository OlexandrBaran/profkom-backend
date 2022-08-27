import { BsFillTelephoneFill} from 'react-icons/bs';

const Phones = ({color}) => {

    return(
        <div className='numbersContainer'>
            <BsFillTelephoneFill style={{color:color}}/>            
            <span className='mx-2'>
                <a className="text-decoration-none"
                    style={{color:color}}
                    href={`tel:+380958728776`}>
                    +38 (095) 872 87 76
                </a>
            </span>
            <span>
                <a className="text-decoration-none"
                    style={{color:color}}
                    href={`tel:+380501075796`}>
                    +38 (050) 107 57 96
                </a>
            </span>
        </div>
    )
}

export default Phones