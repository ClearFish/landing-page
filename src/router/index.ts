import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/views/rs356.vue"),
        redirect: '/rs356',
        children: []
    },
    // {
    //     path: '/',
    //     component: () => import("@/views/vnx.vue"),
    //     redirect: '/vnx',
    //     children:[]
    // },
    // {
    //     path: "/home",
    //     name: "Home",
    //     component: () => import("@/views/home.vue")
    // },
    // {
    //     path: "/land",
    //     name: "Land",
    //     component: () => import("@/views/land.vue")
    // },
    // {
    //     path: "/xo",
    //     name: "Xo",
    //     component: () => import("@/views/xo.vue")
    // },
    // {
    //     path: "/google",
    //     name: "google",
    //     component: () => import("@/views/googleDownload.vue")
    // },
    // {
    //     path: "/jdbvip",
    //     name: "jdbvip",
    //     component: () => import("@/views/jdbvip.vue")
    // },
    // {
    //     path: "/ky",
    //     name: "ky",
    //     component: () => import("@/views/ky.vue")
    // },
    // {
    //     path: "/site",
    //     name: "ztl",
    //     component: () => import("@/views/ztl.vue")
    // },
    // {
    //     path: "/vnx",
    //     name: "vnx",
    //     component: () => import("@/views/vnx.vue")
    // },
    {
        path: "/rs356",
        name: "rs356",
        component: () => import("@/views/rs356.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
