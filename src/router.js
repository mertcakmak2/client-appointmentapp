import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//routes
import Dashboard from './routes/dashboard/Dashboard';
import Profile from './routes/profile/Profile';
import Appointment from './routes/appointment/Appointment';
import Login from './routes/login/Login';
import Signup from './routes/signup/SignUp';

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            component:Dashboard,
            name:'Dashboard'
        },
        {
            path:'/profile',
            component:Profile,
            name:'Profile'
        },
        {
            path:'/appointment',
            component:Appointment,
            name:'Appointment'
        },
        {
            path:'/login',
            component:Login,
            name:'Login'
        },
        {
            path:'/Signup',
            component:Signup,
            name:"Signup"
        }
    ]

})