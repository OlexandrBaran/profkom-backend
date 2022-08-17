import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap"
import cookie from 'js-cookie'
import {indicators} from '../../../data/IndicatorsData'

const CurrentIndicators = ({bgColor, mainColor}) => {

    const currenLanguageCode = cookie.get('i18next') || 'ua'
    const {t} = useTranslation()
    return (
        <Container style={{backgroundColor:bgColor, color:mainColor, maxWidth:'100%'}}>
            <h2 className="text-center">{t('curr_ident')}</h2>
            <Row className="mt-3 d-flex justify-content-between align-items-center">
                {indicators.map(({id, titleUA, titleEN, count}) => {

                    return(
                         <Col className="text-center" key={id}>
                            <h3>{ (currenLanguageCode === 'ua') ? titleUA : titleEN}</h3>
                            <span >{count}</span>
                         </Col>
                    )
                })}

            </Row>
        </Container>
    )
}

export default CurrentIndicators