import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import cookie from 'js-cookie'
import { t } from 'i18next';

function NewsBlock({newsList}) {

    const currenLanguageCode = cookie.get('i18next') || 'ua'

    return (
    <CardGroup>
        {newsList.map( ({image, titleEN, titleUA, descriptionUA, descriptionEN, date}) => {
            return(
                <Card className='m-5'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{(currenLanguageCode === 'ua') ? titleUA : titleEN}</Card.Title>
                        <Card.Text>
                            {(currenLanguageCode === 'ua') ? descriptionUA : descriptionEN}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{t(`uploaded`)}{date}</small>
                    </Card.Footer>
                </Card>
            )
        })}
    </CardGroup>
  );
}

export default NewsBlock;