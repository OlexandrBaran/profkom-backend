import { BsFillTelephoneFill} from 'react-icons/bs';

const Phones = ({color}) => {

    return(
        <div className='numbersContainer' >
            <BsFillTelephoneFill style={{color:color}}/>            
            <span className='mx-2' >
                <a className="text-decoration-none"
                    style={{color:color}}
                    href={`tel:+380958728776`}>
                    +380958728776
                </a>
            </span>
            <span>
                <a className="text-decoration-none"
                    style={{color:color}}
                    href={`tel:+380501075796`}>
                    +380501075796
                </a>
            </span>
        </div>
    )
}

export default Phones