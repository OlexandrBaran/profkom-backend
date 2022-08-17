import { Card, Col } from "react-bootstrap"
import cookie from 'js-cookie'
import { useTranslation } from "react-i18next"


const NewsSidebar = ({contentArray, title}) => {
    const currenLanguageCode = cookie.get('i18next') || 'ua'
    const {t} = useTranslation()

    return(
        <Col md={4} className="d-flex flex-column align-items-center"> 
            <h2 className="text-center">{title}</h2>
            {
                contentArray.map(({id, titleEN, titleUA, descriptionEN, descriptionUA, date}) => {

                    return(
                        <Card border="primary" className="mt-5" key={id} style={{ width: '18rem' }}>
                            <Card.Header>{t(`announced`)}{date}</Card.Header>
                            <Card.Body>
                            <Card.Title>{(currenLanguageCode === 'ua' ? titleUA : titleEN)}</Card.Title>
                            <Card.Text>
                            {(currenLanguageCode === 'ua' ? descriptionUA : descriptionEN)}
                            </Card.Text>
                            </Card.Body>
                      </Card>
                    )
                })
            }
        </Col>
    )
}

export default NewsSidebar