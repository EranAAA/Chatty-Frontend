import { Homepage } from '../src/pages/home-page.jsx'
import { SignUp } from '../src/cmps/sign-up'
import { SignIn } from '../src/cmps/sign-in'

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
        path: '/',
        component: <Homepage />,
    }
]

export default routes