import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//routes
import Dashboard from './routes/dashboard/Dashboard';
import Profile from './routes/profile/Profile';
import Appointment from './routes/appointment/Appointment';
import Login from './routes/login/Login';
import Register from './routes/register/Register'
import Signup from './routes/signup/SignUp';
import Notification from './routes/notification/Notification'
import Admin from './routes/admin/Admin'

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
            name: 'Profile',
            meta:{
                auth:true
            }
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
            path: '/register',
            component: Register,
            name: 'Register'
        },
        {
            path: '/Signup',
            component: Signup,
            name: "Signup"
        },
        {
            path: '/notifications',
            component: Notification,
            name: "Notification",
            meta:{
                auth:true
            }
        },
        {
            path: '/management',
            component: Admin,
            name: "Admin",
            meta:{
                auth:true
            }
        },
    ],

})

router.beforeEach((to, from, next) => {
    var userToken = localStorage.getItem("token");
    console.log(from);

    // Böyle bir route yoks anasayfaya yönlendirir..
    if(!to.matched.length){
        router.push("/");   
        return;
    }

    // Kullanıcı giriş yaptıysa erişebilecek routeler..
    if(to.meta.auth){
        let path = userToken ? to.path : "/";
        if(!userToken) router.push(path);
        else next();
    }

    // Kullanıcı giriş yaptıysa/yapmadıysa login/register route kontrolü
    if(to.name == "Login" || to.name == "Register"){
        let path = userToken ? "/" : to.path;
        if(!userToken) next();
        else router.push(path);
        return;
    }
    next();
})

export default router;