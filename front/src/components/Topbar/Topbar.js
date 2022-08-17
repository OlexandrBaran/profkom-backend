import './Topbar.scss'
import { Context } from '../../index';
import { useContext } from 'react';
import ThemeChanger from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import Search from '../Search/Search';
import Phones from '../Elements/Phones';
import Address from '../Elements/Address'
import SocialMediaPanel from '../Elements/SocialMediaPanel';

const Topbar = () => {
    const {appTheme} = useContext(Context)

    return (
      <div className="Topbar" style={{backgroundColor:appTheme.mainColor, color:appTheme.secondaryColor}}>
        <Phones/>
        <Address/>
        <SocialMediaPanel/>

        <div className='specialButtons'>
            <ThemeChanger className='item'/>
            <LanguageSwitch className='item'/>
            <Search className='item'/>
        </div>
      </div>
    );
  }
  
  export default Topbar;
  