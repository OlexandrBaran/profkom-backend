import {tradeUnionDocs} from "../../data/DocumentsData"


const TradeUnionDocs = () => {
    return(
        <div>
        {tradeUnionDocs.map(({id, titleUA, titleEN, link}) => {
               return(
               <li key={id}><a href={link}>{titleUA}</a></li>
               )
        })}
        </div>
    );
}

export default TradeUnionDocs;