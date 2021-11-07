import HelloWorld from './components/HelloWorld'
import Social from './components/Social'
import Resume from './components/Resume'
import Facebook from './components/facebookView'
import Github from './components/githubView'
import Linkedin from './components/linkedin'



const routes = [{
        path: '/',
        component: HelloWorld,
        props: true,
        name: 'hello'
    },
    {
        path: '/social',
        component: Social,
        props: true,
        name: 'social',
        children: [{
                path: '/social/facebook',
                component: Facebook,
                props: true,
                name: 'facebook'
            },
            {
                path: '/social/github',
                component: Github,
                props: true,
                name: 'github'
            },
            {
                path: '/social/linkedin',
                component: Linkedin,
                props: true,
                name: 'linkedin'
            },
        ]
    },
    {
        path: '/resume',
        component: Resume,
        props: true,
        name: 'resume'
    },


]
export default routes;