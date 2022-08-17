import { Card, Col } from "react-bootstrap"
import cookie from 'js-cookie'


const ContentComponent = ({contentArray, title}) => {
    const currenLanguageCode = cookie.get('i18next') || 'ua'

    return(
        <Col md={8}> 
            <h2 className="text-center">{title}</h2>
            {
                contentArray.map(({id, titleEN, titleUA, image, department, views, likes, author}) => {

                    return(
                        <Card key={id} className='m-5'>
                            <Card.Img variant="top" style={{height:"500px"}} src={image} />
                            <Card.Header>{author}</Card.Header>
                            <Card.Body>
                                <Card.Title>{(currenLanguageCode === 'ua') ? titleUA : titleEN}</Card.Title>
                                <Card.Text>
                                    {department}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                            <Card.Link href="#">{views}</Card.Link>
                            <Card.Link href="#">{likes}</Card.Link>
                        </Card.Body>
                        </Card>
                    )
                })
            }
        </Col>
    )
}

export default ContentComponent