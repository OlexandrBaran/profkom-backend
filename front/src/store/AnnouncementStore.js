import {action, makeObservable, observable} from "mobx";

export default class AnnouncementStore {
 


    constructor() {
        this.announcements = [
            {
                id: 1, 
                titleEN:"mnmnmnmnm", 
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
                titleEN:"mnmnmnmnm", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'Hacylty Math',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },

            {
                id: 3, 
                titleEN:"mnmnmnmnm", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'Hacylty Math',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },

            {
                id: 4, 
                titleEN:"mnmnmnmnm", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'Hacylty Math',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            },

            {
                id: 5, 
                titleEN:"mnmnmnmnm", 
                titleUA: 'Чаjkjkjkлбащ', 
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                descriptionEN:'Chalbasfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddh',
                descriptionUA:'chalbash.diana@student.uzldf;sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshnu.edu.ua',
                department:'Hacylty Math',
                date:'02-02-2020',
                views:85,
                likes:17,
                author:'Petro Griffin'
            }
        ]
        
        makeObservable(this , {
            announcements:observable,
            setAnnouncements:action
        })
      
    }

    setAnnouncements(announcements) {
        this.announcements = announcements;
    }
}