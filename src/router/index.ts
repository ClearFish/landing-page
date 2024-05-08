import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Land from "@/views/land.vue"
const routes : Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        redirect: '/home',
        children:[]
    },
    {
        path:"/home",
        name:"Home",
        component:Home
    },
    {
        path:"/land",
        name:"Land",
        component:Land
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;