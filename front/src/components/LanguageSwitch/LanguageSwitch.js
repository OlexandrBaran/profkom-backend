import { BsGlobe} from 'react-icons/bs';
import { Context } from '../../index';
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { GB, UA } from 'country-flag-icons/react/3x2';
import i18next from 'i18next';


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
            <Dropdown.Toggle className='dropdown language-dropdown'
                variant="outline-secondary" 
                id="dropdown-basic" 
                style={{color:appTheme.themeVariant.secondColor,
                        backgroundColor:appTheme.themeVariant.mainColor
                    }}
            >
                <BsGlobe/>
            </Dropdown.Toggle>

            <Dropdown.Menu 
             style={{color:appTheme.themeVariant.secondColor,
                backgroundColor:appTheme.themeVariant.mainColor
            }}
            >
                {languages.map(({code, name, country_code}) => {
                    return( 
                        <Dropdown.Item 
                            key={code}
                            
                            onClick={() => {
                                i18next.changeLanguage(code)
                            }}
                            style={{color:appTheme.themeVariant.navColor}}
                            
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