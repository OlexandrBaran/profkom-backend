import SidebarContent from "../components/SidebarContent/SidebarContent";
import { superAdminData } from "../data/superAdminData";


const SuperAdminPanel = ({data}) => {

   return(
         <SidebarContent data={superAdminData}/>
   ); 
}

export default SuperAdminPanel