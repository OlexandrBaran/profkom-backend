import {action, makeObservable, observable} from "mobx";

export default class TrustBoxRequestStore {
 


    constructor() {
        this.trustBoxRequests = [
            {
                id: 1, 
                department:"Math", 
                theme: 'dkdskds dkms mks msdmks kmsk mk', 
                description:'Ddkdnakdnaskdnkn kdn kdn knd kn kdn kdn kadnakdnakdnk nk nakdnkandk nak nkan iana'
            },

            {
                id: 2, 
                department:"Math", 
                theme: 'dkdskds dkms mks msdmks kmsk mk', 
                description:'Ddkdnakdnaskdnkn kdn kdn knd kn kdn kdn kadnakdnakdnk nk nakdnkandk nak nkan iana'
            },

            {
                id: 3, 
                department:"Math", 
                theme: 'dkdskds dkms mks msdmks kmsk mk', 
                description:'Ddkdnakdnaskdnkn kdn kdn knd kn kdn kdn kadnakdnakdnk nk nakdnkandk nak nkan iana'
            },

            {
                id: 4, 
                department:"Math", 
                theme: 'dkdskds dkms mks msdmks kmsk mk', 
                description:'Ddkdnakdnaskdnkn kdn kdn knd kn kdn kdn kadnakdnakdnk nk nakdnkandk nak nkan iana'
            },

            {
                id: 5, 
                department:"Math", 
                theme: 'dkdskds dkms mks msdmks kmsk mk', 
                description:'Ddkdnakdnaskdnkn kdn kdn knd kn kdn kdn kadnakdnakdnk nk nakdnkandk nak nkan iana'
            }
        ]
        
        makeObservable(this , {
            trustBoxRequests:observable,
            setTrustBoxRequests:action
        })
      
    }

    setTrustBoxRequests(trustBoxRequests) {
        this.trustBoxRequests = trustBoxRequests;
    }
}