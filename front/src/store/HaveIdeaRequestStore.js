import {action, makeObservable, observable} from "mobx";

export default class HaveIdeaRequestStore {
 


    constructor() {
        this.haveIdeaRequests = [
            {
                id: 1, 
                name:"dsdsdsd", 
                email: 'sdsdsssd', 
                department:'Math',
                theme:'Chalbacdcscs sdcsd cscd csc sdscdzcsddsh',
                description:'hdislkcsdgisddbslsiuvaliuclsdicblsiucbldfibclixbu lsdisbcxciubvsldibc lxbvlsdbc lxibflwesidhcxbslibcl xbfs ieuwdjbc ib lbdalssbc lbwfdcl b  bflidsbc wfsbcsddbfcksadlaihflc blwbf lbfdwle bldbc uwblfibselfbcslfbsle'
            },

            {
                id: 2, 
                name:"dsdsdsd", 
                email: 'sdsdsssd', 
                department:'Math',
                theme:'Chalbacdcscs sdcsd cscd csc sdscdzcsddsh',
                description:'hdislkcsdgisddbslsiuvaliuclsdicblsiucbldfibclixbu lsdisbcxciubvsldibc lxbvlsdbc lxibflwesidhcxbslibcl xbfs ieuwdjbc ib lbdalssbc lbwfdcl b  bflidsbc wfsbcsddbfcksadlaihflc blwbf lbfdwle bldbc uwblfibselfbcslfbsle'
            },

            {
                id: 3, 
                name:"dsdsdsd", 
                email: 'sdsdsssd', 
                department:'Math',
                theme:'Chalbacdcscs sdcsd cscd csc sdscdzcsddsh',
                description:'hdislkcsdgisddbslsiuvaliuclsdicblsiucbldfibclixbu lsdisbcxciubvsldibc lxbvlsdbc lxibflwesidhcxbslibcl xbfs ieuwdjbc ib lbdalssbc lbwfdcl b  bflidsbc wfsbcsddbfcksadlaihflc blwbf lbfdwle bldbc uwblfibselfbcslfbsle'
            },

            {
                id: 4, 
                name:"dsdsdsd", 
                email: 'sdsdsssd', 
                department:'Math',
                theme:'Chalbacdcscs sdcsd cscd csc sdscdzcsddsh',
                description:'hdislkcsdgisddbslsiuvaliuclsdicblsiucbldfibclixbu lsdisbcxciubvsldibc lxbvlsdbc lxibflwesidhcxbslibcl xbfs ieuwdjbc ib lbdalssbc lbwfdcl b  bflidsbc wfsbcsddbfcksadlaihflc blwbf lbfdwle bldbc uwblfibselfbcslfbsle'
            },

            {
                id: 5, 
                name:"dsdsdsd", 
                email: 'sdsdsssd', 
                department:'Math',
                theme:'Chalbacdcscs sdcsd cscd csc sdscdzcsddsh',
                description:'hdislkcsdgisddbslsiuvaliuclsdicblsiucbldfibclixbu lsdisbcxciubvsldibc lxbvlsdbc lxibflwesidhcxbslibcl xbfs ieuwdjbc ib lbdalssbc lbwfdcl b  bflidsbc wfsbcsddbfcksadlaihflc blwbf lbfdwle bldbc uwblfibselfbcslfbsle'
            }
        ]
        
        makeObservable(this , {
            haveIdeaRequests:observable,
            setHaveIdeaRequests:action
        })
      
    }

    setHaveIdeaRequests(haveIdeaRequests) {
        this.haveIdeaRequests = haveIdeaRequests;
    }
}