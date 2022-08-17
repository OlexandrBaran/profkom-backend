import { useContext } from "react";
import { Context } from "../..";
import Slider from "../../components/HomepageEl/Slider/Slider";
import ContentComponent from "../../components/NewsAnnouncesEl/ContentComponent";
import NewsSidebar from "../../components/NewsAnnouncesEl/NewsSidebar";
import cookie from 'js-cookie'

const NewsAll = () => {
    const {news} = useContext(Context)
    const {announces} = useContext(Context)
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

    const lastestAnnouce = []
    const getLastAnnounce = () => {
      for (let i = 1; i <= announces.announcements.length; i++) {
        let element = announces.announcements[announces.announcements.length - i];
        if (element.department === 'University' || element.department === 'Університет') {
            lastestAnnouce.push(element)
        }
        if(lastestAnnouce.length === 5)
            break;
      }
    }
    getLastAnnounce();

    const currenLanguageCode = cookie.get('i18next') || 'ua'
    let contentTitle = (currenLanguageCode === 'ua' ? 'Новини' : 'News')
    let sidebarTitle = (currenLanguageCode === 'ua' ? 'Анонси' : 'Announces')

    return(
        <div>
            <Slider newsList={lastestNews}  />
            <div className="d-flex">
                <ContentComponent contentArray={news.newsList} title={contentTitle}/>
                <NewsSidebar contentArray={lastestAnnouce} title={sidebarTitle}/>
            </div>
        </div>
    );
}

export default NewsAll;