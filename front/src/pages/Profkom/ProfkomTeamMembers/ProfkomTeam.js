import SidebarContent from "../../../components/SidebarContent/SidebarContent";
import ProfkomMembers from "./ProfkomMembers"

const profkomTeamItems = [
    {
        id:1,
        title:'team_head',
        content:<ProfkomMembers type={"team_head"}/>
    },

    {
        id:2,
        title:'team_secretaty',
        content:<ProfkomMembers type={"team_secretaty"}/>
    },

    {
        id:3,
        title:'team_members',
        content:<ProfkomMembers type={"team_members"}/>
    }
]

const ProfkomTeam = () => {
    
    return(
        <SidebarContent data={profkomTeamItems}/>
    );
}

export default ProfkomTeam;