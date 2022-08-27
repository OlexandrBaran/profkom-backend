import React from "react";
import { Context } from '../../index';
import { useContext } from 'react';
import './ThemeSwitch.scss'

const ThemeSwitch = () => {

    const {appTheme} = useContext(Context);
    
    const changeAppTheme = () => {
        (appTheme.themeVariant.name === "light") ? appTheme.setThemeVariant('dark') : appTheme.setThemeVariant('light')
    }

    return(
        <div data-theme={appTheme.themeVariant.name}>
            <label className="switch" onChange={changeAppTheme}>
                <input type="checkbox"/>
                <span className="slider"/>
            </label>
        </div>
    );
}

export default ThemeSwitch;