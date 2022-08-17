import {action, makeObservable, observable} from "mobx";

export default class RatingStore {

    constructor() {
        this.ratings = [
            {
                id: 1, 
                department:"fdfsdadasd", 
                title: 'dadasdasdad sadasd adasdasdad cacascascasca', 
                file:'assdasdasda.pdf'
            },

            {
                id: 2, 
                department:"fdfsdadasd", 
                title: 'dadasdasdad sadasd adasdasdad cacascascasca', 
                file:'assdasdasda.pdf'
            },

            {
                id: 3, 
                department:"fdfsdadasd", 
                title: 'dadasdasdad sadasd adasdasdad cacascascasca', 
                file:'assdasdasda.pdf'
            },

            {
                id: 4, 
                department:"fdfsdadasd", 
                title: 'dadasdasdad sadasd adasdasdad cacascascasca', 
                file:'assdasdasda.pdf'
            },

            {
                id: 5, 
                department:"fdfsdadasd", 
                title: 'dadasdasdad sadasd adasdasdad cacascascasca', 
                file:'assdasdasda.pdf'
            }
        ]
        
        makeObservable(this , {
            ratings:observable,
            setRatings:action
        })
      
    }

    setRatings(ratings) {
        this.ratings = ratings;
    }
}