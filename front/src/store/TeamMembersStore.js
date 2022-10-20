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
                "image":"https://profkom-bucket.s3.amazonaws.com/4eff53ad-e26f-46c4-bf49-2254b99d7440",
                "positionUA":"Голова профбюро біологічного факультету",
                "positionEN":"Head of student",
                "instagram":"https://instagram.com/diana.chalbash?igshid=YmMyMTA2M2Y=",
                "facebook":"https://www.facebook.com/profile.php?id=100009585246279",
                "telegram":"https://web.telegram.org/z/#688624979"
            },

            {
                "id":2,
                "firstNameUA":"Діана",
                "lastNameUA":"Чалбаш",
                "firstNameEN":"Diana",
                "lastNameEN":"Chalbash",
                "email":"chalbash.diana@student.uzhnu.edu.ua",
                "phoneNumber":"+380954552986",
                "descriptionEN":"Here is description about Diana",
                "descriptionUA":"Тут описана біографія Діани",
                "department":"Faculty of Biology",
                "image":"https://profkom-bucket.s3.amazonaws.com/f2e1286b-f2fb-4c9f-acec-7d2505dd301d",
                "positionUA":"Голова профбюро біологічного факультету",
                "positionEN":"Head of student goverment of Faculty of Biology",
                "instagram":"https://instagram.com/diana.chalbash?igshid=YmMyMTA2M2Y=",
                "facebook":"https://www.facebook.com/profile.php?id=100009585246279",
                "telegram":"https://web.telegram.org/z/#688624979"
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