import { BsGlobe} from 'react-icons/bs';
import { Context } from '../../index';
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { GB, UA } from 'country-flag-icons/react/3x2';
import i18next from 'i18next';
import cookie from 'js-cookie'


const languages = [
    {
        code:'ua',
        name:'Українська',
        country_code:'UA'
    },
    {
        code:'en',
        name:'English',
        country_code:'GB'
    },
]


const LanguageSwitch = () => {

    const currenLanguageCode = cookie.get('i18next') || 'ua'

    const {appTheme} = useContext(Context)

    const selectFlagIcon = (country_code) => {
        switch (country_code) {
            case 'UA':
                return <UA className="mx-2" height={'1em'}/> 
            case 'GB':
                return <GB className="mx-2" height={'1em'}/> 
            default:
                break;
        }
    }

    return(
        <Dropdown >
            <Dropdown.Toggle className='dropdown'
                variant="outline-success" 
                id="dropdown-basic" 
                style={{
                    backgroundColor:appTheme.mainColor, 
                    color:appTheme.secondaryColor
                    }}>
                <BsGlobe/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {languages.map(({code, name, country_code}) => {
                    return( 
                        <Dropdown.Item 
                            key={code}
                            onClick={() => {
                                i18next.changeLanguage(code)
                            }}
                            disabled={code === currenLanguageCode}
                        >
                            {selectFlagIcon(country_code)}
                            {name}    
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageSwitch;