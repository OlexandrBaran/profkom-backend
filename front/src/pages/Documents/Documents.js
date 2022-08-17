import SidebarContent from "../../components/SidebarContent/SidebarContent";
import {documentsData} from "../../data/DocumentsData"


const Documents = () => {
    return(
        <SidebarContent data={documentsData} />
    );
}

export default Documents;