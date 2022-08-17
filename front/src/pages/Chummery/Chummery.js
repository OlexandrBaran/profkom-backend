import { useContext } from "react";
import { Context } from "../..";
import SidebarContent from "../../components/SidebarContent/SidebarContent";
import ChummeryCard from "./ChummeryCard";
import ChummeryRules from "./ChummeryRules";

const Chummery = () => {
    const {chummeries} = useContext(Context)
    const data = [
        {
            id:1,
            titleUA:"Правила поселення в гуртожитки",
            titleEN:"Rules to chummery",
            content: <ChummeryRules/>
        }
    ]
    chummeries.chummeries.map(({id, nameUA, nameEN}) => {
        let obj = {}
        obj.id = id+1;
        obj.titleUA = nameUA;
        obj.titleEN = nameEN;
        obj.content =<ChummeryCard name={nameUA} />
        data.push(obj)
        console.log(obj)
        return <div key={id}></div>
        
    })
    return(
        <SidebarContent data={data}/>
    );
}

export default Chummery;