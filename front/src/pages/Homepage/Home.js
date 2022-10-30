import { useContext } from 'react';
import { Context } from '../..';
import Slider from '../../components/HomepageEl/Slider/Slider'
import NewsBlock from '../../components/HomepageEl/NewsBlock/NewsBlock';
import CurrentIndicators from '../../components/HomepageEl/CurrentIndicators';
import SocialPrograms from '../../components/HomepageEl/SocialPrograms';

const Home = () => {
     
  const {news} = useContext(Context)
  const {appTheme} = useContext(Context)


  const lastestNews = []
  const getLastNews = () => {
    for (let i = 1; i <= news.newsList.length; i++) {
      let element = news.newsList[news.newsList.length - i];
      if (element.department === 'University' || element.department === 'Університет') {
        lastestNews.push(element)
      }
      if(lastestNews.length === 5)
          break;
    }
  }
  getLastNews()

        return(
            <>     
                <Slider newsList={lastestNews}/>
                <NewsBlock newsList={lastestNews.slice(0, 3)}/>
                 <CurrentIndicators/>
                <SocialPrograms/>
            </>
    );
}

export default Home;