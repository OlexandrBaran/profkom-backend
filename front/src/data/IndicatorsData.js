import {FaStreetView} from 'react-icons/fa'
import {AiFillCreditCard} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BiDockRight} from 'react-icons/bi'





/*
export default function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/profkom.herokuapp.com/profkom?amount=1')
	.then(res => res.json())
	.then(res => {
	    return res.value;
	})
}
updateVisitCount();*/

export const indicators = [
    {
        id:1,
        title:"indicators_views",
        count:13000,
        icon:<FaStreetView size={56}/>
    },

    {
        id:2,
        title:"indicators_isic",
        count:148,
        icon:<AiFillCreditCard size={56}/>
    },

    {
        id:3,
        title:"indicators_members",
        count:7913,
        icon:<BsFillPeopleFill size={56}/>
    },

    {
        id:4,
        title:"indicators_subsidies",
        count:498,
        icon:<BiDockRight size={56}/>
    }
]