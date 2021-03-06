import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

const ChatLanding = lazy(() => import("../pages/ChatLanding"));
const Chat = lazy(() => import("../pages/ChatBot"));
const Play = lazy(() => import("../pages/Play"));
const Learn = lazy(() => import("../pages/Learn"));


const MTP = lazy(() => import("../pages/mtp/index"));
const SentenceBuilder = lazy(() => import("../pages/sent_build/SentenceBuilder"));
const Dnd = lazy(() => import("../pages/DragDrop/DND"));
const DragDrop = lazy(() => import("../pages/DragDrop/DragDrop"));
const Tense = lazy(() => import("../pages/tenses/TenseSort"));


const Quiz = lazy(() => import("../pages/quizLandingPage"));
const Verbs = lazy(() => import("../pages/Quiz/Verbs"));
const Nouns = lazy(() => import("../pages/Quiz/Nouns"));
const Adverbs = lazy(() => import("../pages/Quiz/Adverbs"));
const Adjectives = lazy(() => import("../pages/Quiz/Adjectives"));
const Pronouns = lazy(() => import("../pages/Quiz/Pronouns"));
const Tenses = lazy(() => import("../pages/Quiz/Tenses"));

const Pronounce = lazy(() => import("../pages/pronounce/Pronounce"))
const Apro = lazy(() => import("../pages/pronounce/Apro"))
const Bpro = lazy(() => import("../pages/pronounce/Bpro"))
const Cpro = lazy(() => import("../pages/pronounce/Cpro"))
const Dpro = lazy(() => import("../pages/pronounce/Dpro"))
const Epro = lazy(() => import("../pages/pronounce/Epro"))


const Lcard1 = lazy(() => import("../pages/Learn/Learn1"));

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
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },

  {
    path: "/chatbot",
    component: Chat,
  },
  {
    path: "/chatlanding",
    component: ChatLanding,
  },

  {
    path: "/play",
    component: Play,
  },



  // Quiz Links

  {
    path: "/play/verbs",
    component: Verbs,
  },

  {
    path: "/play/nouns",
    component: Nouns,
  },
  {
    path: "/play/adverbs",
    component: Adverbs,
  },
  {
    path: "/play/adjectives",
    component: Adjectives,
  },
  {
    path: "/play/pronouns",
    component: Pronouns,
  },
  {
    path: "/play/tenses",
    component: Tenses,
  },


  {
    path: "/play/quiz",
    component: Quiz,
  },

  {
    path: "/play/mtp",
    component: MTP,
  },

  {
    path: "/play/dnd",
    component: Dnd,
  },

  {
    path: "/play/tense",
    component: Tense,
  },

  {
    path: "/play/dnd/index",
    component: DragDrop,
  },

  {
    path: "/play/sentencebuilder",
    component: SentenceBuilder,
  },
  {
    path: "/play/pronounce",
    component: Pronounce,
  },
  {
    path: "/play/pronounce/Apro",
    component: Apro,
  },{
    path: "/play/pronounce/Bpro",
    component: Bpro,
  },{
    path: "/play/pronounce/Cpro",
    component: Cpro,
  },{
    path: "/play/pronounce/Dpro",
    component: Dpro,
  },
  {
    path: "/play/pronounce/Epro",
    component: Epro,
  },

  {
    path: "/learn",
    component: Learn,
  },

  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
  {
    path: "/learn/basic-grammar",
    component: Lcard1,
  },
];

export default routes;
