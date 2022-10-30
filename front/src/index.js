import React, { createContext, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeStore from './store/ThemeStore';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import App from './App';
import UserStore from './store/UserStore';
import TeamMembersStore from './store/TeamMembersStore';
import NewsStore from './store/NewsStore';
import AdditionalPointsRequestStore from './store/AdditionalPointsRequestStore'
import AdditionalPointsResultStore from './store/AdditionalPointsResultStore'
import AnnouncementStore from './store/AnnouncementStore'
import ChummeryStore from './store/ChummeryStore'
import HaveIdeaRequestStore from './store/HaveIdeaRequestStore'
import PollStore from './store/PollStore'
import QuestionAnswerStore from './store/QuestionAnswerStore'
import RatingStore from './store/RatingStore'
import TrustBoxRequestStore from './store/TrustBoxRequestStore'



export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en', 'ua'],
    fallbackLng: "en",
    detection:{
      order: [ 'localStorage'],
      caches:['localStorage'],
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }


  });

const loadingMarkup = (
  <div className='py-4 text-center'>
      <h2>Loading...</h2>
  </div>
)


root.render(
  <div>
  <Suspense fallback={loadingMarkup}>
    <Context.Provider value={{
      appTheme: new ThemeStore(),
      user: new UserStore(),
      teamMember: new TeamMembersStore(),
      news: new NewsStore(),
      addPointReq: new AdditionalPointsRequestStore(),
      addPointRes: new AdditionalPointsResultStore(),
      announces: new AnnouncementStore(),
      chummeries: new ChummeryStore(),
      haveIdeaReq: new HaveIdeaRequestStore(),
      polls: new PollStore(),
      questAndAnsws: new QuestionAnswerStore(),
      rating: new RatingStore(),
      trustBoxReqs: new TrustBoxRequestStore(),

    }}
    > 
      <App />
    </Context.Provider> 
  </Suspense></div>
);