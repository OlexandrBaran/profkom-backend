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

  @media(min-width:1200px){
    &:hover{
      transform:scale(1.1);
      transition: transform .5s ease-in-out;
      
      .body{
        visibility: visible;
        opacity: 1;
      }
    }     
  }

  @media(max-width:1200px){  
      .body{
        visibility: visible;
        opacity: 1;
      }
  }
`
const CardImage = styled.img`
  width:100%;
  height:22rem;
  border-radius: 20px;
`
const CardBody = styled.div`
  width:100%;
  position:absolute;
  color:white;
  bottom:0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
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
  const currenLanguageCode = localStorage.getItem('i18nextLng') || 'ua'

    return(
        <Card className="m-3" onClick={() => navigate(PROFKOM_TEAM_ROUTE + '/' + data.id)}>
        <CardImage variant="top" src={`${data.image}`} />
        <CardBody className='body' style={{backgroundColor:appTheme.themeVariant.navColor}}>
          {
            currenLanguageCode === 'ua' ? 
              <CardName>{data.firstNameUA} {data.lastNameUA}</CardName>
                : 
              <CardName>{data.firstNameEN} {data.lastNameEN}</CardName>
          }
          
          {
            currenLanguageCode === 'ua' ? 
            <CardPosition>{data.positionUA}</CardPosition>
                : 
            <CardPosition>{data.positionEN}</CardPosition>
          }
        </CardBody>
      </Card>
    )
})

export default ProfkomTeamItem