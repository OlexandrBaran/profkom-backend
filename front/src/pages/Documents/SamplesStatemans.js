import {samplesStatemans} from "../../data/DocumentsData"


const SamplesStatemans = () => {
    return(
        <div>
        {samplesStatemans.map(({id, titleUA, titleEN, link}) => {
               return(
               <li key={id}><a href={link}>{titleUA}</a></li>
               )
        })}
        </div>
    );
}

export default SamplesStatemans;