import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Land from "@/views/land.vue"
import Xo from "@/views/xo.vue"
import Google from "@/views/googleDownload.vue"
import Jdbvip from "@/views/jdbvip.vue"
import KY from "@/views/ky.vue"
import ZTL from "@/views/ztl.vue"
const routes : Array<RouteRecordRaw> = [
    {
        path: '/site/',
        component: ZTL,
        // redirect: '/ztl',
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
    {
        path:"/jdbvip",
        name:"jdbvip",
        component:Jdbvip
    },
    {
        path:"/ky",
        name:"ky",
        component:KY
    },
    {
        path:"/ztl",
        name:"ztl",
        component:ZTL
        
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;