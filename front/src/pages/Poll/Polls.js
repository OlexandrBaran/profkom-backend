import {polls} from '../../data/PollsData'
import PollCard from './PollCard'

const Polls = () => {
    let activePollPost = [];
    let disActivePollPost = [];
    const pollsPost = polls.map( (item) => {
        if(item.status === 'active')
            activePollPost.push(  
            <PollCard
            key={item.id}
                id = {item.id}
                titleUA = {item.titleUA}
                titleEN = {item.titleEN}
                status = {item.status}
                department = {item.department}
            />)
         else
                disActivePollPost.push(
                    <PollCard
                    key={item.id}
                    id = {item.id}
                    titleUA = {item.titleUA}
                    titleEN = {item.titleEN}
                    status = {item.status}
                    department = {item.department}
                />)
                }
    )
        



    return(
        <div className="polls-container d-flex justify-content-center align-items-center flex-column">
            <h1>Your polls</h1>
            <p>you also can propose your poll idea in section "To student" &gt; "have idea" </p>
            {activePollPost}
            {disActivePollPost}
        </div>
        
    )
}

export default Polls;