/*import { Context } from '../index';
import { useContext } from 'react';*/

import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateTeamMember from "../components/modals/CreateTeamMember";
import SideBar from "../components/Sidebar/Sidebar";


const SuperAdminPanel = () => {

    const [createTeamVisible, SetCreateTeamVisible] = useState(false)

   return(
      <Container className="d-flex flex-column">
        <Button variant="outline-dark" className="m-4" onClick={() => SetCreateTeamVisible(true)}>Add teamMember</Button>
        <CreateTeamMember show={createTeamVisible} onHide={() => SetCreateTeamVisible(false)}/>
      </Container>
   );
}

export default SuperAdminPanel