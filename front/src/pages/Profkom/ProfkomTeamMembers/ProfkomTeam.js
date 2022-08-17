import SidebarContent from "../../../components/SidebarContent/SidebarContent";
import {profkomTeamItems} from '../../../data/ProfkomTeamData'


const ProfkomTeam = () => {
    
    return(
        <SidebarContent data={profkomTeamItems}/>
    );
}

export default ProfkomTeam;