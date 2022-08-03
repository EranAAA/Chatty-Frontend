import { ChattyApp } from '../src/pages/chatty-app'
import { Homepage } from '../src/pages/home-page.jsx'
import { SignUp } from './pages/sign-up'
import { SignIn } from './pages/sign-in'
import { Chat } from '../src/pages/chat.jsx'

const routes = [
    {
        path: '/chat',
        component: <Chat />,
    },
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