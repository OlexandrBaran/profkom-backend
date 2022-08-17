import React from "react";
import {BsCircleHalf} from 'react-icons/bs';
import { Context } from '../../index';
import { useContext } from 'react';

const ThemeSwitch = () => {

    const {appTheme} = useContext(Context);
    
    const changeAppTheme = () => {
        if (appTheme.mainColor === process.env.REACT_APP_LIGHT_THEME_MAIN_COLOR){
            appTheme.setMainColor(process.env.REACT_APP_DARK_THEME_MAIN_COLOR);
            appTheme.setSecondaryColor(process.env.REACT_APP_DARK_THEME_SECONDARY_COLOR);
        }else{
            appTheme.setMainColor(process.env.REACT_APP_LIGHT_THEME_MAIN_COLOR);
            appTheme.setSecondaryColor(process.env.REACT_APP_LIGHT_THEME_SECONDARY_COLOR);
        }
    }

    return(
        <div onClick={changeAppTheme}>
            <BsCircleHalf/> 
        </div>
    );
}

export default ThemeSwitch;