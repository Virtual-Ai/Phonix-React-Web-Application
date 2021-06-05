import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";


const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const PhonixLandingPage = lazy(() => import("./pages/Landing/land1"));

function App() {
  return (
    <div className="App">
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/app" component={Layout} />
          <Route path="/" component={PhonixLandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
