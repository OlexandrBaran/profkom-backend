import {action, makeObservable, observable} from "mobx";

export default class NewsStore {
 


    constructor() {
        this.newsList = [
            {
                id: 1, 
                titleEN:"Новина 1", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'University',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },
          
            {
                id: 2, 
                titleEN:"News 2", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'University',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },
          
            {
                id: 3, 
                titleEN:"news 3333333333333", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'University',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },
          
            {
                id: 4, 
                titleEN:"news 4", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'University',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },
          
            {
                id: 5, 
                titleEN:"news 5", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'Університет',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },
          
            {
                id: 6, 
                titleEN:"news 6", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'Університет',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            }
        ]
        
        makeObservable(this , {
            newsList:observable,
            setNews:action
        })
      
    }

    setNews(news) {
        this.newsList = news;
    }
}