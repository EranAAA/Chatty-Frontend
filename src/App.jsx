import React from 'react'
import routes from './routes.js'
import { Routes, Route } from 'react-router'
import { AppHeader } from '../src/cmps/app-header.jsx'
import { AppFooter } from '../src/cmps/app-footer.jsx'

import '../src/assets/scss/main.scss'

export const App = () => {
   return (
      <div className="App">
         <header className="app-header-container ">
            <AppHeader />
         </header>
         <main className="routes-container">
            <Routes>
               {routes.map(route =>
                  <Route key={route.path}
                     exact={true}
                     element={route.component}
                     path={route.path} />)}
            </Routes>
         </main>
         <footer className="app-footer-container">
            <AppFooter />
         </footer>
      </div>
   )
}

