import { Context } from "../index";
import { useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr'
import {VscTriangleDown} from 'react-icons/vsc'
import { ABOUT_ROUTE, ADDITIONAL_POINTS_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, ANNOUNSMENT_ROUTE, CHUMMERY_ROUTE, CONTACTS_ROUTE, DOCUMENTS_ROUTE, HAVE_IDEA_ROUTE, HOME_ROUTE, /*INFORMATION_ROUTE,*/ NEWS_ROUTE, POLL_ROUTE, PROFKOM_STRUCTURE_ROUTE, PROFKOM_TEAM_ROUTE, PROGRAMS_ROUTE, QA_ROUTE, RATING_ROUTE, SUPERADMIN_ROUTE, TRUST_BOX_ROUTE, REGESTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import styled from 'styled-components'


const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Logo = styled.a`
  padding: 1rem 0;
  color: #B7B7B7;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.7rem;

  &:hover {
    color:#F4F5FB;
  }
`

const Hamburger = styled.div`
  display:none;
  color: #B7B7B7;

  @media (max-width: 1454px) {
    display:flex;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1454px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    transition: max-height 0.3s ease-in;
  }
`

const MenuLink = styled.a`
  padding: 0.8rem 0.5rem;
  position: relative;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #B7B7B7;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  
  &:hover {
    color:#E9EBF7;
  }
`

const DropDownContainer = styled.div`
  margin: 1rem 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #F4F5FB;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  position:relative;


  &:hover{
    & div{
      display:flex;
    }
  }
`;

const DropDownHeader = styled.div`
  color:#B7B7B7;
  &:hover{
    color:#F4F5FB;
  }
`;

const DropDownListContainer = styled.div`
  position:absolute;
  left:0;
  display:none;
  flex-direction:column;
  padding-top:1rem;
  z-index:1;
  border-radius:5px;

  @media (max-width: 1454px) {
    position:relative;
    display:none;
    border:1px solid #F4F5FB;
  }
`;

const DropDownItem = styled.a`
  padding: 0.8rem 0.5rem;
  position: relative;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #B7B7B7;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  @media (max-width: 1454px) {

    position:relative;
  }
  &:hover {
    color:#E9EBF7;
  }
`

const Button = styled.button`
  display:inline;
  background-color: inherit;
  color: #B7B7B7;
  border: 1px solid #B7B7B7;
  padding:0.5rem;
  margin-right:0.5rem;
  border-radius:1em;
  margin:0.5rem;

  &:hover{
    color:inherit;
    background-color: #F4F5FB ;
  }
`;

const Navigation = observer(() => {

    const [isOpen, setIsOpen] = useState(false)
    const {user} = useContext(Context);
    const {appTheme} = useContext(Context);
    const {t} = useTranslation()
    const navColor = appTheme.themeVariant.navColor;

    return(
        <Nav style={{backgroundColor:navColor}}>
          <Logo href={HOME_ROUTE}>{t('menu_item_profkom')}</Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <GrClose size={28}/> : <GiHamburgerMenu size={28}/>}
            </Hamburger>
          <Menu isOpen={isOpen}> 
            <MenuLink href={HOME_ROUTE}>{t('menu_item_home')}</MenuLink>
            <MenuLink href={NEWS_ROUTE}>{t('menu_item_news')}</MenuLink>
            
            <DropDownContainer>
              <DropDownHeader>{t('menu_item_profkom')}<VscTriangleDown/></DropDownHeader>
                <DropDownListContainer style={{backgroundColor:navColor}}>
                  <DropDownItem href={PROFKOM_TEAM_ROUTE}>{t('menu_item_pk_team')}</DropDownItem>
                  <DropDownItem href={PROFKOM_STRUCTURE_ROUTE}>{t('menu_item_pk_structure')}</DropDownItem>
                  <DropDownItem href={ABOUT_ROUTE}>{t('menu_item_about')}</DropDownItem>
                  <DropDownItem href={ANNOUNSMENT_ROUTE}>{t('menu_item_announcements')}</DropDownItem>
                </DropDownListContainer>
            </DropDownContainer>
            
            <MenuLink href={PROGRAMS_ROUTE}>{t('menu_item_programs')}</MenuLink>
            <MenuLink href={DOCUMENTS_ROUTE}>{t('menu_item_docs')}</MenuLink>
            
            <DropDownContainer>
              <DropDownHeader>{t('menu_item_info')} <VscTriangleDown/></DropDownHeader>
                <DropDownListContainer style={{backgroundColor:navColor}}>
                  <DropDownItem href={CHUMMERY_ROUTE}>{t('menu_item_chummery')}</DropDownItem>
                  <DropDownItem href={QA_ROUTE}>{t('menu_item_questionAnsw')}</DropDownItem>
                  {user.isAuth && <DropDownItem href={RATING_ROUTE}>{t('menu_item_rating')}</DropDownItem>}
                  <DropDownItem href={CONTACTS_ROUTE}>{t('menu_item_contacts')}</DropDownItem>
                </DropDownListContainer>
            </DropDownContainer>

            <DropDownContainer>
              <DropDownHeader>{t('menu_item_special_func')} <VscTriangleDown/></DropDownHeader>
                <DropDownListContainer style={{backgroundColor:navColor}}>
                  <DropDownItem href={TRUST_BOX_ROUTE}>{t('menu_item_trustbox')}</DropDownItem>
                  {user.isAuth &&  <DropDownItem href={POLL_ROUTE}>{t('menu_item_poll')}</DropDownItem>}
                  <DropDownItem href={HAVE_IDEA_ROUTE}>{t('menu_item_haveIdea')}</DropDownItem>
                  <DropDownItem href={ADDITIONAL_POINTS_ROUTE}>{t('menu_item_additional_points')}</DropDownItem>
                </DropDownListContainer>
            </DropDownContainer>

            {user.isAdmin &&  <MenuLink href={ADMIN_ROUTE}>{t('menu_item_admin')}</MenuLink>}
            {user.isSuperAdmin && <MenuLink href={SUPERADMIN_ROUTE}>{t('menu_item_super')}</MenuLink>}
            <div>
              {user.isAuth && <Button><MenuLink href={REGESTRATION_ROUTE} style={{color:"inherit"}}>{t("Sign_in")}</MenuLink></Button>}
              {user.isAuth && <Button><MenuLink href={LOGIN_ROUTE} style={{color:"inherit"}}>{t("log_in")}</MenuLink></Button>}
            </div>
          </Menu>
        </Nav>
    );
})

export default Navigation