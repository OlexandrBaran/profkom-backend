import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react"
import { Context } from "../../.."
import { fetchTeamMember } from "../../../http/teamMemberApi";
import ProfkomTeamItem from "./ProfkomTeamItem"


const ProfkomMembers = observer(({type}) => {
    const {teamMember} = useContext(Context);
    
    useEffect(() => {
        fetchTeamMember().then(data => teamMember.setTeamMembers(data.rows));
        // eslint-disable-next-line
    }, [])

    const filterLeader = (item) => { return item.positionUA.includes('первинної') }

    const filterAdvisers = (item) => {
        if(item.positionUA.includes('Секретар') || item.positionUA.includes('Заступник') || item.positionUA.includes('Радник')) 
             return true;
         else 
             return false;
    }

    const filterTeamMembers = (item) => { return item.positionUA.includes('профбюро') }
    
    let membersList = []

    switch (type) {
        case "team_head":
            membersList = teamMember.teamMembers.filter(filterLeader);
            break;
        case "team_secretaty":
            membersList = teamMember.teamMembers
            break;
        case "team_members":
            membersList = teamMember.teamMembers.filter(filterTeamMembers);
            break;
        default:
            break;
    }

    return (
        <div className="d-flex m-3">
            {membersList.map((item) => {
                return(<ProfkomTeamItem key={item.id} data={item}/>)
              })   
            }
        </div>
    )
})

export default ProfkomMembers