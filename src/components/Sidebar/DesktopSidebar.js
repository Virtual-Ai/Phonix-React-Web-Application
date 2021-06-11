import React, { useState } from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
// import SidebarSubmenu from './SidebarSubmenu'
import { MenuIcon } from '../../icons'
import './Sidebar.css'


function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function DesktopSidebar(props) {
  const [isOpen, openHandler] = useState(false)

  const open = () => {
    
    openHandler(!isOpen)
    if (isOpen) {
      routes.map((route) => {
        if (route.routes) {
        } else {
          document.getElementById(route.name).style.display = 'unset'
        }
      })
      document.getElementById('name').innerHTML = 'Phonix'
      document.getElementById('sideBar').className =
        'z-30 flex-shrink-0 hidden  w-64  overflow-y-auto bg-white dark:bg-gray-800 lg:block'
    } else {
      routes.map((route) => {
        if (route.routes) {
        } else {
          document.getElementById(route.name).style.display = 'none'
        }
      })
      document.getElementById('name').innerHTML = ''
      document.getElementById('sideBar').className =
        'z-30 flex-shrink-0 hidden overflow-y-auto bg-white dark:bg-gray-800 lg:block'
    }
  }

  return (
    <aside
      id="sideBar"
      className=" backg z-30 flex-shrink-0 hidden  w-64  overflow-y-auto bg-white dark:bg-gray-800 lg:block"
    >
      <div>
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <div className="items-center flex" style={{ paddingLeft: '8px' }}>
            <button
              className="p-1 mr-5 ml-3 rounded-md  focus:outline-none focus:shadow-outline-purple"
              onClick={open}
              aria-label="Menu"
            >
              <MenuIcon className="w-6 h-6" aria-hidden="false" />
            </button>
            <div>
              <a
                id="name"
                className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                href="/app"
              >
                Phonix
              </a>
            </div>
          </div>

          <ul className="mt-6">
            {routes.map((route) =>
              route.routes ? null : (
                <li className="relative px-6 py-3" key={route.name}>
                  <NavLink
                    exact
                    to={route.path}
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
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
                    <span id={route.name} className="ml-4">
                      {route.name}
                    </span>
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default DesktopSidebar
