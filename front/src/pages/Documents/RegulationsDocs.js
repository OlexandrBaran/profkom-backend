import {regulationsDocs} from "../../data/DocumentsData"



const RegulationDocs = () => {
    return(
        <div>
        {regulationsDocs.map(({id, titleUA, titleEN, link}) => {
               return(
               <li key={id}><a href={link}>{titleUA}</a></li>
               )
        })}
        </div>
    );
}

export default RegulationDocs;;