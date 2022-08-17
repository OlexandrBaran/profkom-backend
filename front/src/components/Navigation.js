import { Context } from "../index";
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useTranslation } from "react-i18next";
import {GiEntryDoor} from 'react-icons/gi';
import { ABOUT_ROUTE, ADDITIONAL_POINTS_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, ANNOUNSMENT_ROUTE, CHUMMERY_ROUTE, CONTACTS_ROUTE, DOCUMENTS_ROUTE, HAVE_IDEA_ROUTE, HOME_ROUTE, /*INFORMATION_ROUTE,*/ NEWS_ROUTE, POLL_ROUTE, PROFKOM_STRUSTURE_ROUTE, PROFKOM_TEAM_ROUTE, PROGRAMS_ROUTE, QA_ROUTE, RATING_ROUTE, SUPERADMIN_ROUTE, TRUST_BOX_ROUTE, REGESTRATION_ROUTE } from "../utils/consts";

const Navigation = () => {
    const {user} = useContext(Context);
    const {t} = useTranslation()

    return(
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href={HOME_ROUTE}>{t('menu_item_home')}</Nav.Link>
            <Nav.Link href={NEWS_ROUTE}>{t('menu_item_news')}</Nav.Link>
            <NavDropdown title={t('menu_item_profkom')} id="collasible-nav-dropdown">
              <NavDropdown.Item href={PROFKOM_TEAM_ROUTE}>{t('menu_item_pk_team')}</NavDropdown.Item>
              <NavDropdown.Item href={PROFKOM_STRUSTURE_ROUTE}>{t('menu_item_pk_structure')}</NavDropdown.Item>
              <NavDropdown.Item href={ABOUT_ROUTE}>{t('menu_item_about')}</NavDropdown.Item>
              <NavDropdown.Item href={ANNOUNSMENT_ROUTE}>{t('menu_item_announcements')}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={PROGRAMS_ROUTE}>{t('menu_item_programs')}</Nav.Link>
            <Nav.Link href={DOCUMENTS_ROUTE}>{t('menu_item_docs')}</Nav.Link>
            <NavDropdown title={t('menu_item_info')} id="collasible-nav-dropdown">
              <NavDropdown.Item href={CHUMMERY_ROUTE}>{t('menu_item_chummery')}</NavDropdown.Item>
              <NavDropdown.Item href={QA_ROUTE}>{t('menu_item_questionAnsw')}</NavDropdown.Item>
              {user.isAuth && <NavDropdown.Item href={RATING_ROUTE}>{t('menu_item_rating')}</NavDropdown.Item>}
            </NavDropdown>
            <Nav.Link href={CONTACTS_ROUTE}>{t('menu_item_contacts')}</Nav.Link>
            <NavDropdown title={t('menu_item_special_func')} id="collasible-nav-dropdown">
              <NavDropdown.Item href={TRUST_BOX_ROUTE}>{t('menu_item_trustbox')}</NavDropdown.Item>
              {user.isAuth &&  <NavDropdown.Item href={POLL_ROUTE}>{t('menu_item_poll')}</NavDropdown.Item>}
              <NavDropdown.Item href={HAVE_IDEA_ROUTE}>{t('menu_item_haveIdea')}</NavDropdown.Item>
              <NavDropdown.Item href={ADDITIONAL_POINTS_ROUTE}>{t('menu_item_additional_points')}</NavDropdown.Item>
            </NavDropdown>
            {user.isAdmin &&  <Nav.Link href={ADMIN_ROUTE}>{t('menu_item_admin')}</Nav.Link>}
            {user.isSuperAdmin && <Nav.Link href={SUPERADMIN_ROUTE}>{t('menu_item_super')}</Nav.Link>}
          </Nav>
            {user.isAuth &&  <Nav.Link href={REGESTRATION_ROUTE}><GiEntryDoor size={28}/></Nav.Link>}
        </Container>
      </Navbar>
    );
}

export default Navigation