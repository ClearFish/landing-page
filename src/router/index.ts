import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Land from "@/views/land.vue"
import Xo from "@/views/xo.vue"
import Google from "@/views/googleDownload.vue"
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
    {
        path:"/xo",
        name:"Xo",
        component:Xo
    },
    {
        path:"/google",
        name:"google",
        component:Google
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;