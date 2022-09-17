import {action, makeObservable, observable} from "mobx";

export default class TeamMembersStore {
 


    constructor() {
        this.teamMembers = [
            {
                "id":1,
                             "firstNameUA":"Діана",
                             "lastNameUA":"Чалбаш",
                             "firstNameEN":"Diana",
                             "lastNameEN":"Chalbash",
                             "email":"chalbash.diana@student.uzhnu.edu.ua",
                             "phoneNumber":"+380954552986",
                             "descriptionEN":"Here is description about Diana",
                             "descriptionUA":"Тут описана біографія Діани",
                             "department":"Faculty of Biology",
                             "image":"https://scontent.fudj1-1.fna.fbcdn.net/v/t39.30808-6/279442995_3060203507642461_2020188107152038677_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tMD6Nqgt2MAAX-ddEj7&_nc_ht=scontent.fudj1-1.fna&oh=00_AT-Vx_BYq9f3Sfidhux-NTBDyH83IA2Oxu5JluAB6ujZOg&oe=632BBD72",
                             "positionUA":"Голова профбюро біологічного факультету",
                             "positionEN":"Head of student goverment of Faculty of Biology",
                             "instagram":"https://instagram.com/diana.chalbash?igshid=YmMyMTA2M2Y=",
                             "facebook":"https://www.facebook.com/profile.php?id=100009585246279",
                             "telegram":"https://web.telegram.org/z/#688624979",
                             
                         }
        ]
        
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