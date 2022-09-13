import {action, makeObservable, observable} from "mobx";

//this store in create for having global set of themes
export default class ThemeStore {
    
    constructor() {

        this.lightTheme = {
            name:'light',
            mainColor:"#F4F5FB",
            secondColor:"#384B5A",
            thirdColor:"#E9EBF7",
            navColor:"#273744",
            sideBarColor:"#394E61",
            textColor:"#384B5A"
        }

        this.darkTheme = {
            name:'dark',
            mainColor:"#273744",
            secondColor:"#F4F5FB",
            thirdColor:"#394E61",
            navColor:"#394E61",
            sideBarColor:"#384B5A",
            textColor:"#B7B7B7"
        }

        if(localStorage.getItem("theme") === 'light')
            this.themeVariant = this.lightTheme
        else
            this.themeVariant = this.darkTheme
        
        makeObservable(this, {
            lightTheme:observable,
            darkTheme:observable,
            themeVariant:observable,
            setThemeVariant:action
        })
        
    }

    setThemeVariant(variant) {
        if(variant === "light") 
            {
                this.themeVariant = this.lightTheme
                localStorage.removeItem("theme")
                localStorage.setItem("theme", "light")
            }
        else{
            this.themeVariant = this.darkTheme
            localStorage.removeItem("theme")
            localStorage.setItem("theme", "dark")
        }
    }
}