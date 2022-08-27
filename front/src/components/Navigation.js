import { Context } from "../index";
import './Navigation.scss'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useTranslation } from "react-i18next";
import {GiEntryDoor} from 'react-icons/gi';
import { ABOUT_ROUTE, ADDITIONAL_POINTS_ROUTE, ADMIN_ROUTE, /*LOGIN_ROUTE,*/ ANNOUNSMENT_ROUTE, CHUMMERY_ROUTE, CONTACTS_ROUTE, DOCUMENTS_ROUTE, HAVE_IDEA_ROUTE, HOME_ROUTE, /*INFORMATION_ROUTE,*/ NEWS_ROUTE, POLL_ROUTE, PROFKOM_STRUSTURE_ROUTE, PROFKOM_TEAM_ROUTE, PROGRAMS_ROUTE, QA_ROUTE, RATING_ROUTE, SUPERADMIN_ROUTE, TRUST_BOX_ROUTE, REGESTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const Navigation = observer(() => {
    const {user} = useContext(Context);
    const {appTheme} = useContext(Context);
    const {t} = useTranslation()

    return(
      <>
        <nav data-theme={appTheme.themeVariant.name}>
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      <button className="btn">BTN</button>
        </nav>
     {/* <Navbar style={{backgroundColor:appTheme.themeVariant.navbar, maxWidth:"100%"}}
      >
        <Container className="navbar-container" 
          
        >
        <Navbar.Brand href={HOME_ROUTE} className="navbar-logo">ПРОФКОМ</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="nav-item" href={HOME_ROUTE}  >{t('menu_item_home')}</Nav.Link>
            <Nav.Link className="nav-item" href={NEWS_ROUTE}>{t('menu_item_news')}</Nav.Link>
            
            <NavDropdown  title={t('menu_item_profkom')} id="collasible-nav-dropdown">
              <NavDropdown.Item  href={PROFKOM_TEAM_ROUTE}>{t('menu_item_pk_team')}</NavDropdown.Item>
              <NavDropdown.Item href={PROFKOM_STRUSTURE_ROUTE}>{t('menu_item_pk_structure')}</NavDropdown.Item>
              <NavDropdown.Item href={ABOUT_ROUTE}>{t('menu_item_about')}</NavDropdown.Item>
              <NavDropdown.Item href={ANNOUNSMENT_ROUTE}>{t('menu_item_announcements')}</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className="nav-item" href={PROGRAMS_ROUTE}>{t('menu_item_programs')}</Nav.Link>
            <Nav.Link className="nav-item" href={DOCUMENTS_ROUTE}>{t('menu_item_docs')}</Nav.Link>
           
            <NavDropdown className="nav-item" title={t('menu_item_info')} id="collasible-nav-dropdown">
              <NavDropdown.Item href={CHUMMERY_ROUTE}>{t('menu_item_chummery')}</NavDropdown.Item>
              <NavDropdown.Item href={QA_ROUTE}>{t('menu_item_questionAnsw')}</NavDropdown.Item>
              {user.isAuth && <NavDropdown.Item href={RATING_ROUTE}>{t('menu_item_rating')}</NavDropdown.Item>}
              <NavDropdown.Item href={CONTACTS_ROUTE}>{t('menu_item_contacts')}</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown className="nav-item" title={t('menu_item_special_func')} id="collasible-nav-dropdown">
              <NavDropdown.Item  href={TRUST_BOX_ROUTE}>{t('menu_item_trustbox')}</NavDropdown.Item>
              {user.isAuth &&  <NavDropdown.Item href={POLL_ROUTE}>{t('menu_item_poll')}</NavDropdown.Item>}
              <NavDropdown.Item href={HAVE_IDEA_ROUTE}>{t('menu_item_haveIdea')}</NavDropdown.Item>
              <NavDropdown.Item href={ADDITIONAL_POINTS_ROUTE}>{t('menu_item_additional_points')}</NavDropdown.Item>
            </NavDropdown>
           
            {user.isAdmin &&  <Nav.Link className="nav-item" href={ADMIN_ROUTE}>{t('menu_item_admin')}</Nav.Link>}
            {user.isSuperAdmin && <Nav.Link className="nav-item" href={SUPERADMIN_ROUTE}>{t('menu_item_super')}</Nav.Link>}
            {user.isAuth &&  <Nav.Link className="nav-item" href={REGESTRATION_ROUTE}><GiEntryDoor size={28}/></Nav.Link>}
          </Nav>   
        </Container>
    </Navbar>*/}
      </>
    );
})

export default Navigation