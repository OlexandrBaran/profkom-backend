import {action, makeObservable, observable} from "mobx";

export default class ChummeryStore {
 


    constructor() {
        this.chummeries = [
            {
                id: 1, 
                nameUA:"Гуртожиток #1", 
                nameEN: 'fdfsddddddddddddddddd', 
                addressUA:'Didasdddadasdasdasdasdasdana',
                addressEN:'adsdasdadasdasdadad',
                phone:'+380958728776',
                comendantPhone:'+380958728776',
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                additionalInfoUA:'hgkjhngkhngkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                additionalInfoEN:'nhgfbgvdsfghgfvcxvbgfdsdvsfvsfbsfbfsfsfbbgdbsffvsfsvsfdsfsdfsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'
              
            },

            {
                id: 2, 
                nameUA:"Гуртожиток #2", 
                nameEN: 'fdfsddddddddddddddddd', 
                addressUA:'Didasdddadasdasdasdasdasdana',
                addressEN:'adsdasdadasdasdadad',
                phone:'+380958728776',
                comendantPhone:'+380958728776',
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                additionalInfoUA:'hgkjhngkhngkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                additionalInfoEN:'nhgfbgvdsfghgfvcxvbgfdsdvsfvsfbsfbfsfsfbbgdbsffvsfsvsfdsfsdfsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'
            },

            {
                id: 3, 
                nameUA:"Гуртожиток Т3", 
                nameEN: 'fdfsddddddddddddddddd', 
                addressUA:'Didasdddadasdasdasdasdasdana',
                addressEN:'adsdasdadasdasdadad',
                phone:'+380958728776',
                comendantPhone:'+380958728776',
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                additionalInfoUA:'hgkjhngkhngkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                additionalInfoEN:'nhgfbgvdsfghgfvcxvbgfdsdvsfvsfbsfbfsfsfbbgdbsffvsfsvsfdsfsdfsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'
            },

            {
                id: 4, 
                nameUA:"Гуртожиток Т4", 
                nameEN: 'fdfsddddddddddddddddd', 
                addressUA:'Didasdddadasdasdasdasdasdana',
                addressEN:'adsdasdadasdasdadad',
                phone:'+380958728776',
                comendantPhone:'+380958728776',
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                additionalInfoUA:'hgkjhngkhngkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                additionalInfoEN:'nhgfbgvdsfghgfvcxvbgfdsdvsfvsfbsfbfsfsfbbgdbsffvsfsvsfdsfsdfsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'
            },

            {
                id: 5, 
                nameUA:"Гуртожиток Т5", 
                nameEN: 'fdfsddddddddddddddddd', 
                addressUA:'Didasdddadasdasdasdasdasdana',
                addressEN:'adsdasdadasdasdadad',
                phone:'+380958728776',
                comendantPhone:'+380958728776',
                image:'https://bestigcaptions.com/wp-content/uploads/2022/02/Attrative-Attitude-Whatsapp-Profile-Picture.jpg',
                additionalInfoUA:'hgkjhngkhngkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                additionalInfoEN:'nhgfbgvdsfghgfvcxvbgfdsdvsfvsfbsfbfsfsfbbgdbsffvsfsvsfdsfsdfsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'
            }
        ]
        
        makeObservable(this , {
            chummeries:observable,
            setChummeries:action
        })
      
    }

    setChummeries(chummeries) {
        this.chummeries = chummeries;
    }
}