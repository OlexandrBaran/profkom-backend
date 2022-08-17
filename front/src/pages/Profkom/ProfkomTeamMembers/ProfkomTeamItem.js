import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { PROFKOM_TEAM_ROUTE } from '../../../utils/consts';


const ProfkomTeamItem = ({teamMemberItemData}) => {

  const navigate = useNavigate(); 

    return(
        <Card style={{ width: '18rem' }} className="m-3" onClick={() => navigate(PROFKOM_TEAM_ROUTE + '/' + teamMemberItemData.id)}>
        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + teamMemberItemData.image} />
        <Card.Body>
          <Card.Title>{teamMemberItemData.firstNameEN} {teamMemberItemData.lastNameEN}</Card.Title>
          <Card.Text>
          {teamMemberItemData.positionUA}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{teamMemberItemData.email}</ListGroup.Item>
          <ListGroup.Item>{teamMemberItemData.phoneNumber}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={teamMemberItemData.telegram}>Telegram</Card.Link>
          <Card.Link href={teamMemberItemData.instagram}>Instagram</Card.Link>
          <Card.Link href={teamMemberItemData.facebook}>Facebook</Card.Link>
        </Card.Body>
      </Card>
    )
}

export default ProfkomTeamItem