import { Homepage } from '../src/pages/home-page.jsx'
import { UserAuth } from '../src/pages/user-auth.jsx'
import { SignUp } from '../src/cmps/sign-up'
import { SignIn } from '../src/cmps/sign-in'

const routes = [
    {
        path: '/user-auth/sign-in',
        component: <SignIn />,
    },
    {
        path: '/user-auth/sign-up',
        component: <SignUp />,
    },
    {
        path: '/user-auth',
        component: <UserAuth />,
    },
    {
        path: '/',
        component: <Homepage />,
    }
]

export default routes