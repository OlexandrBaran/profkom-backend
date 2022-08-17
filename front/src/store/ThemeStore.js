import {action, makeObservable, observable} from "mobx";

export default class ThemeStore {
 
    mainColor = '#0A2458'
    secondaryColor = '#FFFFFF'

    constructor() {
        makeObservable(this , {
            mainColor:observable,
            secondaryColor:observable,
            setMainColor:action,
            setSecondaryColor:action
        })
      
    }

    setMainColor(color) {
        this.mainColor = color;
    }

    setSecondaryColor(color) {
        this.secondaryColor = color; 
    }
}