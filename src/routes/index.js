import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

const Chat = lazy(() => import('../pages/ChatBot'))
const Play = lazy(() => import('../pages/Play'))
const Learn = lazy(() => import('../pages/Learn'))

const Quiz = lazy(() => import('../pages/quizLandingPage'))
const Verbs = lazy(() => import('../pages/Quiz/Verbs'))
const Nouns = lazy(() => import('../pages/Quiz/Nouns'))
const Lcard1 = lazy(() => import('../pages/Learn/Learn1'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },

  {
    path: '/chatbot', 
    component: Chat, 
  },

  {
    path: '/play', 
    component: Play, 
  },

  // Quiz Links 

  {
    path: '/play/verbs', 
    component: Verbs, 
  },  

  {
    path: '/play/nouns', 
    component: Nouns,   
  },    

  {
    path: '/play/quiz', 
    component: Quiz,   
  },    

  {
    path: '/learn', 
    component: Learn, 
  },  

  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/learn/basic-grammar', 
    component: Lcard1, 
  }
]

export default routes
