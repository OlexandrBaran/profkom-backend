import AdminPanel from "./pages/AdminPanel"
import Auth from './pages/Auth/Auth'
import Home from './pages/Homepage/Home'
import NewsAll from './pages/News/NewsAll'
import NewsSingle from './pages/News/NewsSingle'
import About from './pages/About'
import Announsment from './pages/Announcement/Announcements'
import Chummery from './pages/Chummery/Chummery'
import Contacts from './pages/Contacts/Contacts'
import Documents from './pages/Documents/Documents'
import HaveIdea from './pages/HaveIdea/HaveIdea'
import Polls from './pages/Poll/Polls'
import ProfkomStructure from './pages/Profkom/ProfkomStructure'
import ProfkomTeam from './pages/Profkom/ProfkomTeamMembers/ProfkomTeam'
import Programs from './pages/Programs'
import QuestionsAnswers from './pages/QA/QuestionsAnswers'
import Rating from './pages/Rating'
import Trustbox from './pages/Trustbox/TrustBox'
import SuperAdminPanel from "./pages/SuperAdminPanel"
import AdditionalPoints from './pages/AdditionalPoints/AdditionalPoints'
import Poll from './pages/Poll/Poll'
import { ABOUT_ROUTE, ADDITIONAL_POINTS_ROUTE, ADMIN_ROUTE, ANNOUNSMENT_ROUTE, CHUMMERY_ROUTE, CONTACTS_ROUTE, DOCUMENTS_ROUTE, HAVE_IDEA_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, POLL_ROUTE, PROFKOM_STRUCTURE_ROUTE, PROFKOM_TEAM_ROUTE, PROGRAMS_ROUTE, QA_ROUTE, RATING_ROUTE, REGESTRATION_ROUTE, SUPERADMIN_ROUTE, TRUST_BOX_ROUTE } from "./utils/consts"
import ProfkomTeamMember from "./pages/Profkom/ProfkomTeamMember"
import AnnouncementItem from "./pages/Announcement/AnnouncementItem"
import ChummeryItem from "./pages/Chummery/ChummeryItem"
import TrustBoxItem from "./pages/Trustbox/TrustBoxItem"
import HaveIdeaItem from "./pages/HaveIdeaItem"



export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component: <Auth/>
    },

    {
        path:REGESTRATION_ROUTE,
        Component: <Auth/>
    },

    {
        path:HOME_ROUTE,
        Component: <Home/> 
    },

    {
        path:NEWS_ROUTE,
        Component: <NewsAll/>
    },

    {
        path:NEWS_ROUTE + ':id',
        Component: <NewsSingle/>
    },

    {
        path:PROFKOM_TEAM_ROUTE,
        Component: <ProfkomTeam/>
    },

    {
        path:PROFKOM_TEAM_ROUTE + '/:id',
        Component: <ProfkomTeamMember/>
    },

    {
        path:PROFKOM_STRUCTURE_ROUTE,
        Component: <ProfkomStructure/>
    },  

    {
        path:ABOUT_ROUTE,
        Component: <About/>
    },

    {
        path:ANNOUNSMENT_ROUTE,
        Component: <Announsment/>
    },

    {
        path:ANNOUNSMENT_ROUTE + ':id',
        Component: <AnnouncementItem/>
    },

    {
        path:PROGRAMS_ROUTE,
        Component: <Programs/>
    },

    {
        path:DOCUMENTS_ROUTE,
        Component: <Documents/>
    },


    {
        path:CHUMMERY_ROUTE,
        Component: <Chummery/>
    },

    
    {
        path:CHUMMERY_ROUTE  + ':id',
        Component: <ChummeryItem/>
    },

    {
        path:QA_ROUTE,
        Component: <QuestionsAnswers/>
    },
  

    {
        path:CONTACTS_ROUTE,
        Component: <Contacts/>
    },

    {
        path:TRUST_BOX_ROUTE,
        Component: <Trustbox/>
    },

    {
        path:HAVE_IDEA_ROUTE,
        Component: <HaveIdea/>
    },

    {
        path:TRUST_BOX_ROUTE  + ':id',
        Component: <TrustBoxItem/>
    },

    {
        path:HAVE_IDEA_ROUTE  + ':id',
        Component: <HaveIdeaItem/>
    },

    {
        path:ADDITIONAL_POINTS_ROUTE,
        Component: <AdditionalPoints/>
    }
]

export const authRoutes = [
    {
        path:POLL_ROUTE,
        Component:<Polls/>
    },

    {
        path:POLL_ROUTE + ":id",
        Component:<Poll/>
    },

    {
        path:RATING_ROUTE,
        Component: <Rating/>
    }
]

export const adminRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: <AdminPanel/>
    }
]

export const superAdminRoutes = [
    {
        path:SUPERADMIN_ROUTE,
        Component: <SuperAdminPanel />
    }
]