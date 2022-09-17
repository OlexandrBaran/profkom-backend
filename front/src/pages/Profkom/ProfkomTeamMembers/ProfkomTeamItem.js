import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { PROFKOM_TEAM_ROUTE } from '../../../utils/consts';


const ProfkomTeamItem = ({data}) => {

  const navigate = useNavigate(); 

    return(
        <Card style={{ width: '18rem' }} className="m-3" onClick={() => navigate(PROFKOM_TEAM_ROUTE + '/' + data.id)}>
        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + "/" + data.image} />
        <Card.Body>
          <Card.Title>{data.firstNameEN} {data.lastNameEN}</Card.Title>
          <Card.Text>
          {data.positionUA}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.email}</ListGroup.Item>
          <ListGroup.Item>{data.phoneNumber}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={data.telegram}>Telegram</Card.Link>
          <Card.Link href={data.instagram}>Instagram</Card.Link>
          <Card.Link href={data.facebook}>Facebook</Card.Link>
        </Card.Body>
      </Card>
    )
}

export default ProfkomTeamItem