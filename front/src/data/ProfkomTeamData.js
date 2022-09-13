import ProfkomMembers from "../pages/Profkom/ProfkomTeamMembers/ProfkomMembers";
import ProfkomTeamAdviders from "../pages/Profkom/ProfkomTeamMembers/ProfkomTeamAdvisers";
import ProfkomTeamLeader from "../pages/Profkom/ProfkomTeamMembers/ProfkomTeamLeader";

export const profkomTeamItems = [
    {
        id:1,
        title:'team_head',
        content: <ProfkomTeamLeader/>
    },

    {
        id:2,
        title:'team_secretaty',
        content:<ProfkomTeamAdviders/>
    },

    {
        id:3,
        title:'team_members',
        content:<ProfkomMembers/>
    }
]