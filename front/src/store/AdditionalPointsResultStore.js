import {action, makeObservable, observable} from "mobx";

export default class AdditionalPointsResultStore {
 


    constructor() {
        this.additionalPointsResults = [
            {
                id: 1, 
                department:"ietr", 
                title: 'vdnvlsdsoddfsdlfjsdlfjsdlfjlsfjslfjjlsfjlj lfj fj lfj lj ll .pdf', 
                file:'file'
            },

            {
                id: 2, 
                department:"ietr", 
                title: 'vdnvlsdsoddfsdlfjsdlfjsdlfjlsfjslfjjlsfjlj lfj fj lfj lj ll .pdf', 
                file:'file'
            },

            {
                id: 3, 
                department:"ietr", 
                title: 'vdnvlsdsoddfsdlfjsdlfjsdlfjlsfjslfjjlsfjlj lfj fj lfj lj ll .pdf', 
                file:'file'
            },

            {
                id: 4, 
                department:"ietr", 
                title: 'vdnvlsdsoddfsdlfjsdlfjsdlfjlsfjslfjjlsfjlj lfj fj lfj lj ll .pdf', 
                file:'file'
            },

            {
                id: 5, 
                department:"ietr", 
                title: 'vdnvlsdsoddfsdlfjsdlfjsdlfjlsfjslfjjlsfjlj lfj fj lfj lj ll .pdf', 
                file:'file'
            }
        ]
        
        makeObservable(this , {
            additionalPointsResults:observable,
            setAdditionalPointsResults:action
        })
      
    }

    setAdditionalPointsResults(additionalPointsResults) {
        this.additionalPointsResults = additionalPointsResults;
    }
}