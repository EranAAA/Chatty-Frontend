import React from 'react'
import routes from './routes.js'
import { Routes, Route } from 'react-router'
import '../src/assets/scss/main.scss'

export const App = () => {
   return (
      <div className="App">
         <header>
            {/* <h1>app-header</h1> */}
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
         <footer>
            {/* <h1>Footer</h1> */}
         </footer>

      </div>
   )
}

