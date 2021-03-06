import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";

import "./Sidebar.css";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="backg py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="/"
      >
        Phonix
      </a>
      <div>
        <ul className="mt-6">
          {routes.map((route) =>
            route.routes ? (
              <SidebarSubmenu route={route} key={route.name} />
            ) : (
              <li className="wt relative px-6 py-3" key={route.name}>
                <NavLink
                  exact
                  to={route.path}
                  className="card-con inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                  <Route path={route.path} exact={route.exact}>
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  </Route>
                  <Icon
                    className="w-5 h-5"
                    aria-hidden="true"
                    icon={route.icon}
                    fill="currentColor"
                  />
                  <span className="ml-4 text-white">{route.name}</span>
                </NavLink>
              </li>
            )
          )}
        </ul>
        <img alt="quiz-iconset" src={require("./assets/mb-quiz.png")} />
      </div>
      {/* <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div> */}
    </div>
  );
}

export default SidebarContent;
