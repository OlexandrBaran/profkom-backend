import { useContext } from "react"
import { Context } from "../../.."
import ProfkomTeamItem from "./ProfkomTeamItem"



const ProfkomTeamAdviders = () => {
    const {teamMember} = useContext(Context);
    

    const filterTeamMembers = (item) => {
       if(item.positionUA.includes('Секретар') || item.positionUA.includes('Заступник') || item.positionUA.includes('Радник')) 
            return true;
        else 
            return false
     
    }
    const advivisersList = teamMember.teamMembers.filter(filterTeamMembers);


    return (
        <div className="d-flex m-3">
            {advivisersList.map((item) => {

                return(<ProfkomTeamItem teamMemberItemData={item}/>)
                })   
            }
        </div>
    )
}

export default ProfkomTeamAdviders