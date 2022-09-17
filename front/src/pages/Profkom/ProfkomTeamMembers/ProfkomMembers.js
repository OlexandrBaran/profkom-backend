import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react"
import { Context } from "../../.."
import { fetchTeamMember } from "../../../http/teamMemberApi";
import ProfkomTeamItem from "./ProfkomTeamItem"


const ProfkomMembers = observer(() => {
    const {teamMember} = useContext(Context);
    
    useEffect(() => {
        fetchTeamMember().then(data => teamMember.setTeamMembers(data.rows));
        // eslint-disable-next-line
    }, [])

    const filterTeamMembers = (item) => { 
        return item.positionUA.includes('профбюро')
     
    }
    const membersList = teamMember.teamMembers.filter(filterTeamMembers);


    return (
        <div className="d-flex m-3">
            {membersList.map((item) => {

                return(<ProfkomTeamItem key={item.id} teamMemberItemData={item}/>)
                })   
            }
        </div>
    )
})

export default ProfkomMembers