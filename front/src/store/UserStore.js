import {action, makeObservable, observable} from "mobx";

export default class UserStore {
 


    constructor() {
        this.isAuth = true;
        this.isAdmin = true;
        this.isSuperAdmin = true;
        this.user = {};
        
        makeObservable(this , {
            isAuth:observable,
            isAdmin:observable,
            isSuperAdmin:observable,
            user:observable,
            setIsAuth:action,
            setIsAdmin:action,
            setIsSuperAdmin:action,
            setUser:action
        })
      
    }

    setIsAuth(bool) {
        this.isAuth = bool;
    }

    setIsAdmin(bool) {
        this.isAdmin = bool;
    }

    setIsSuperAdmin(bool) {
        this.isSuperAdmin = bool;
    }

    setUser(user) {
        this.user = user
    }

}