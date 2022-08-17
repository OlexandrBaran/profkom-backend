import {action, makeObservable, observable} from "mobx";

export default class AdditionalPointsRequestStore {
 


    constructor() {
        this.additionalPointsRequests = [
            {
                id: 1, 
                name:"dasdasdaacsax", 
                email: 'Чалбdadadasdadащ', 
                department:'befssds',
                course:'3',
                category:'chalbash',
                description:'+sfsdadfersadadfgfvdewdscdferwdsdfedwsaxcdvfsd dwasdcfewdasdffascerbrrdfescadfrfsdd aasdasdadad ad',
                file:'fesfsfsdfsfsfs.pdf'
            },

            {
                id: 2, 
                name:"dasdasdaacsax", 
                email: 'Чалбdadadasdadащ', 
                department:'befssds',
                course:'3',
                category:'chalbash',
                description:'+sfsdadfersadadfgfvdewdscdferwdsdfedwsaxcdvfsd dwasdcfewdasdffascerbrrdfescadfrfsdd aasdasdadad ad',
                file:'fesfsfsdfsfsfs.pdf'
            },

            {
                id: 3, 
                name:"dasdasdaacsax", 
                email: 'Чалбdadadasdadащ', 
                department:'befssds',
                course:'3',
                category:'chalbash',
                description:'+sfsdadfersadadfgfvdewdscdferwdsdfedwsaxcdvfsd dwasdcfewdasdffascerbrrdfescadfrfsdd aasdasdadad ad',
                file:'fesfsfsdfsfsfs.pdf'
            },

            {
                id: 4, 
                name:"dasdasdaacsax", 
                email: 'Чалбdadadasdadащ', 
                department:'befssds',
                course:'3',
                category:'chalbash',
                description:'+sfsdadfersadadfgfvdewdscdferwdsdfedwsaxcdvfsd dwasdcfewdasdffascerbrrdfescadfrfsdd aasdasdadad ad',
                file:'fesfsfsdfsfsfs.pdf'
            },

            {
                id: 5, 
                name:"dasdasdaacsax", 
                email: 'Чалбdadadasdadащ', 
                department:'befssds',
                course:'3',
                category:'chalbash',
                description:'+sfsdadfersadadfgfvdewdscdferwdsdfedwsaxcdvfsd dwasdcfewdasdffascerbrrdfescadfrfsdd aasdasdadad ad',
                file:'fesfsfsdfsfsfs.pdf'
            }
        ]
        
        makeObservable(this , {
            additionalPointsRequests:observable,
            setAdditionalPointsRequests:action
        })
      
    }

    setAdditionalPointsRequests(additionalPointsRequests) {
        this.additionalPointsRequests = additionalPointsRequests;
    }
}