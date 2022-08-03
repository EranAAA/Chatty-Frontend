import {Homepage} from '../src/pages/home-page.jsx'
import {SignInUp} from '../src/pages/signin-signup.jsx'

const routes = [
    {
        path: '/signIn-signUp',
        component: <SignInUp />,
    },
    {
        path: '/',
        component: <Homepage />,
    }
]

export default routes