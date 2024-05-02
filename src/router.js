import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
const router = createRouter({
    history: createWebHistory(),//import.meta.env.BASE_URL
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./publish/components/main-content.component.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./publish/components/main-content.component.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./authentication/components/login.component.vue')
        },
        {
            path: "/register",
            name: "register",
            component: () => import("./authentication/components/register.component.vue")
        },
        {
            path: '/book/:id',
            name: 'book-item',
            component: ()=> import("./publish/components/book-item.component.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/creation",
            name: "creation",
            component: () => import("./publish/components/creation-content.component.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("./authentication/components/profile.component.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/publish",
            name: "publish",
            component: () => import("./publish/components/your-artwork.component.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/create",
            name: "create",
            component: ()=>import("./publish/components/create.vue"),
            meta: { requiresAuth: true}
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})
export default router
