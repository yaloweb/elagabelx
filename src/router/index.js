import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            meta: {
                layout: 'LayoutHome'
            },
            component: () => import("@/views/Home.vue")
        },
        {
            path: "/glossary",
            name: "glossary",
            component: () => import("@/views/Glossary.vue")
        },
        {
            path: "/projects/:id",
            name: "project",
            component: () => import("@/views/Project.vue")
        },
        {
            path: "/testnet/:id",
            name: "testnet",
            meta: {
                layout: 'LayoutSecond'
            },
            component: () => import("@/views/Testnet.vue")
        },
        {
            path: "/educational-materials",
            name: "educational-materials",
            meta: {
                layout: 'LayoutSecond'
            },
            component: () => import("@/views/EducationalMaterials.vue")
        },,
        {
            path: "/educational-materials/:id",
            name: "educational-materials-article",
            meta: {
                layout: 'LayoutSecond'
            },
            component: () => import("@/views/EducationalMaterialsArcticle.vue")
        },
        {
            path: "/search",
            name: "search",
            meta: {
                layout: 'LayoutSecond'
            },
            component: () => import("@/views/Search.vue")
        },
        {
            path: "/pool",
            name: "Pool",
            meta: {
                layout: 'LayoutSecond'
            },
            component: () => import("@/views/Pool.vue")
        }
    ],
    scrollBehavior () {
        return {
            top: 0
        }
    }
});

export default router;
