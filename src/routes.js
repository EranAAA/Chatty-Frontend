import { Homepage } from './pages/app-home.jsx'
import { SignUp } from './pages/app-sign-up'
import { SignIn } from './pages/app-sign-in'
import { ChattyApp } from './pages/app-chatty'

const routes = [
    {
        path: '/sign-in',
        component: <SignIn />,
    },
    {
        path: '/sign-up',
        component: <SignUp />,
    },
    {
        path: '/chatty-app',
        component: <ChattyApp />,
    },
    {
        path: '/',
        component: <Homepage />,
    }
]

export default routes