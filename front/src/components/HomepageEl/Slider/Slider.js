import Carousel from 'react-bootstrap/Carousel';
import './Slider.scss'
import cookie from 'js-cookie'


function Slider({newsList}) {
  

  const currenLanguageCode = cookie.get('i18next') || 'ua'
  return (
    <Carousel className='carousel'>

      {newsList.map( ({image, titleEN, titleUA}) => {
      
        return(
            <Carousel.Item interval={4500} className='item'>
            <img
              className="d-block w-100"
              src={image}
              alt={titleEN}
            />
            <Carousel.Caption>
              <h3>{(currenLanguageCode === 'ua') ? titleUA : titleEN}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Slider;