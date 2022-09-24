import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { PROFKOM_TEAM_ROUTE } from '../../../utils/consts';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const Card = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  width: 18rem;
  height: auto;
  position:relative;

  &:hover{

    .body{
      display:block;
    }
  }
`
const CardImage = styled.img`
  width:100%;
  height:auto;
  border-radius: 20px;
  
`
const CardBody = styled.div`
  position:absolute;
  color:white;
  bottom:0;
  display:none;
  background-color:red;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
`

const CardName = styled.div`
text-align:center;
text-transform:uppercase;
`
const CardPosition = styled.div`
text-align:center;
`
const ProfkomTeamItem = observer(({data}) => {
  const {appTheme} = useContext(Context)
  const navigate = useNavigate(); 

    return(
        <Card className="m-3" onClick={() => navigate(PROFKOM_TEAM_ROUTE + '/' + data.id)}>
        <CardImage variant="top" src={data.image} />
        <CardBody className='body' style={{backgroundColor:appTheme.themeVariant.navColor}}>
          <CardName>{data.firstNameEN} {data.lastNameEN}</CardName>
          <CardPosition>
          {data.positionEN}
          </CardPosition>
        </CardBody>
      </Card>
    )
})

export default ProfkomTeamItem