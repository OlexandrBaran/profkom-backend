import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import {useHistory} from 'react-router-dom'
import { POLL_ROUTE } from '../../utils/consts';


const PollCard = ({id, titleUA, titleEN, status, department}) => {
    
    // history = useHistory()

    return(
        <Card className="text-center m-3">
        <Card.Header>{status}</Card.Header>
        <Card.Body>
          <Card.Title>{titleUA}</Card.Title>
          <Card.Text>
            {department}
          </Card.Text>
          <Button variant="primary">Пройти опитування</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
}

export default PollCard;