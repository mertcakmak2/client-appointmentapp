import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//routes
import Dashboard from './routes/dashboard/Dashboard';
import Profile from './routes/profile/Profile';
import Appointment from './routes/appointment/Appointment';
import Login from './routes/login/Login';
import Signup from './routes/signup/SignUp';

//404
import NotFound from './routes/404/NotFound'

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Dashboard,
            name: 'Dashboard'
        },
        {
            path: '/profile',
            component: Profile,
            name: 'Profile'
        },
        {
            path: '/appointment',
            component: Appointment,
            name: 'Appointment'
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/Signup',
            component: Signup,
            name: "Signup"
        },
        {
            path: '/notfound',
            component: NotFound,
            name: "NotFound"
        }
    ],

})

router.beforeEach((to, from, next) => {
    var userToken = localStorage.getItem("token")
    if(!to.matched.length){
        router.push("/notfound");   
        return;
    }

    if(userToken) next();
    else if(to.name == "Login") next();
    else router.push("/login");
})

export default router;