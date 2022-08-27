import './Topbar.scss'
import { Context } from '../../index';
import { useContext } from 'react';
import ThemeChanger from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import Phones from '../Elements/Phones';
import Address from '../Elements/Address'
import SocialMediaPanel from '../Elements/SocialMediaPanel';
import { observer } from 'mobx-react-lite';

const Topbar = observer(() => {
    const {appTheme} = useContext(Context)
    const theme = appTheme.themeVariant

    return (
      <div className="Topbar" style={{backgroundColor:theme.mainColor, color:theme.secondColor}}>
        <span className='topbar-item'><Phones color = {theme.secondColor}/></span>
        <span className='topbar-item'><Address color = {theme.secondColor}/></span>
        <span className='topbar-item'><SocialMediaPanel color = {theme.secondColor}/></span>

        <div  className='specialButtons topbar-item'>
            <ThemeChanger className='item'/>
            <LanguageSwitch className='item'/>
        </div>
      </div>
    );
  })
  
  export default Topbar;
  