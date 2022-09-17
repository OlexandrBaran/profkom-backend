import {action, makeObservable, observable} from "mobx";

export default class TeamMembersStore {
 


    constructor() {
        this.teamMembers = []
        
        makeObservable(this, {
            teamMembers:observable,
            setTeamMembers:action
        })
      
    }

    setTeamMembers(teamMembers) {
        this.teamMembers = teamMembers;
    }

    getteamMembers(){
        return this.teamMembers
    }

}