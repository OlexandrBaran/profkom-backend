import ProfkomMembers from "../pages/Profkom/ProfkomTeamMembers/ProfkomMembers";
import ProfkomTeamAdviders from "../pages/Profkom/ProfkomTeamMembers/ProfkomTeamAdvisers";
import ProfkomTeamLeader from "../pages/Profkom/ProfkomTeamMembers/ProfkomTeamLeader";

export const profkomTeamItems = [
    {
        id:1,
        titleUA:'Керівник',
        titleEN:'Leader',
        content: <ProfkomTeamLeader/>
    },

    {
        id:2,
        titleUA:'Заступники та радники',
        titleEN:'Deputies and advisers',
        content:<ProfkomTeamAdviders/>
    },

    {
        id:3,
        titleUA:'Члени команди',
        titleEN:'Team members',
        content:<ProfkomMembers/>
    }
]