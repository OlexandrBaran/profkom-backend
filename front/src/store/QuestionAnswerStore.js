import {action, makeObservable, observable} from "mobx";

export default class QuestionAnswerStore {
 


    constructor() {
        this.questionAnswers = [
            {
                id: 1, 
                titleEN:"fkddldldldldldllddl", 
                titleUA: 'Рогач', 
                department:'sdlfdmalfmsana',
                descriptionEN:'Chfkldfmldmglsfm;kasfn;zdkgnvdf;knd;kndflkvjnfdlkvjndf;nzdf;njdzf;igjbnzd;vnzd;gbzalbash',
                descriptionUA:'підор',
                category:'somecatogory'
            },

            {
                id: 2, 
                titleEN:"fkddldldldldldllddl", 
                titleUA: 'де ужну?', 
                department:'sdlfdmalfmsana',
                descriptionEN:'Chfkldfmldmglsfm;kasfn;zdkgnvdf;knd;kndflkvjnfdlkvjndf;nzdf;njdzf;igjbnzd;vnzd;gbzalbash',
                descriptionUA:'у пизді',
                category:'someds'
            },

            {
                id: 3, 
                titleEN:"fkddldldldldldllddl", 
                titleUA: 'Вітя', 
                department:'sdlfdmalfmsana',
                descriptionEN:'Chfkldfmldmglsfm;kasfn;zdkgnvdf;knd;kndflkvjnfdlkvjndf;nzdf;njdzf;igjbnzd;vnzd;gbzalbash',
                descriptionUA:'лох',
                category:'catogory'
            },

            {
                id: 4, 
                titleEN:"fkddldldldldldllddl", 
                titleUA: 'Діма', 
                department:'sdlfdmalfmsana',
                descriptionEN:'Chfkldfmldmglsfm;kasfn;zdkgnvdf;knd;kndflkvjnfdlkvjndf;nzdf;njdzf;igjbnzd;vnzd;gbzalbash',
                descriptionUA:'цок цок',
                category:'catogory'
            },

            {
                id: 5, 
                titleEN:"fkddldldldldldllddl", 
                titleUA: 'fldf;dmgldfkmslfmlsmf', 
                department:'sdlfdmalfmsana',
                descriptionEN:'Chfkldfmldmglsfm;kasfn;zdkgnvdf;knd;kndflkvjnfdlkvjndf;nzdf;njdzf;igjbnzd;vnzd;gbzalbash',
                descriptionUA:'fmdslfmaoknfosnfosefniesokfslfslfnsdlfnsdldfnsdldfnsdlfnslnfslfnlsfnlsnflsnf',
                category:'catogory'
            }
        ]
        
        makeObservable(this , {
            questionAnswers:observable,
            setQuestionAnswers:action
        })
      
    }

    setQuestionAnswers(questionAnswers) {
        this.questionAnswers = questionAnswers;
    }
}