import { useTranslation } from "react-i18next";
import { Card, Container, Row } from "react-bootstrap"
import cookie from 'js-cookie'
import {programs} from '../../../data/homepgProgramsData'

const SocProgramsBlock = ({bgColor, mainColor}) => {

    const currenLanguageCode = cookie.get('i18next') || 'ua'
    const {t} = useTranslation()
    return (
        <Container style={{backgroundColor:bgColor, color:mainColor, maxWidth:'100%'}}  >
            <h2 className="text-center">{t('services')}frrfefewdwdweedwdw</h2>
            <Row className="d-flex flex-row justify-content-between">
            {programs.map(({id, titleEN, titleUA, icon}) => {
                return(
                    <Card style={{ width: '15rem'}} className='m-4' key={id}>
                        <Card.Body>
                            <Card.Title className="text-center" >{icon}</Card.Title>
                            <Card.Title className="text-center">{(currenLanguageCode === 'ua') ? titleUA : titleEN}</Card.Title>
                        </Card.Body>
                    </Card>   
                )
            })}
            </Row>
        </Container>
    )
}

export default SocProgramsBlock