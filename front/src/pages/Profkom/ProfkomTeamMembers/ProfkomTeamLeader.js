import { useContext } from "react"
import { Context } from "../../.."
import ProfkomTeamItem from "./ProfkomTeamItem"


const ProfkomTeamLeader = () => {
    const {teamMember} = useContext(Context);
    

    const filterTeamMembers = (item) => {
        return item.positionUA.includes('первинної')
    }
    const leaderList = teamMember.teamMembers.filter(filterTeamMembers);


    return (
        <div>
            {leaderList.map((item) => {

                return(<ProfkomTeamItem teamMemberItemData={item}/>)
                })   
            }
        </div>
    )
}

export default ProfkomTeamLeader