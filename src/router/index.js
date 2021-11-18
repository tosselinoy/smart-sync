import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        // component: Login,
        component: () => import('../views/auth/Login')

    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register')

    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/system',
        name: 'System',
        component: () => import('../views/TheSystem/System')
    },
    {
        path: '/personalSettings',
        name: 'PersonalSettings',
        component: () => import('../views/PersonalSettings/PersonalSettings.vue')
    },
    {
        path: '/cardsOfTables',
        name: 'CardsOfTables',
        component: () => import('../views/YourCards/CardsOfTables.vue')
    },
    {
        path: '/category/:id',
        name: 'Category',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Item" */ '../views/YourCards/Category.vue')
    },


]

const router = new VueRouter({
    routes
})

export default router
