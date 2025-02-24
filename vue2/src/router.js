import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/pages/Main.vue';
import User from '@/pages/User.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/:id', // Динамический сегмент для ID
        component: User,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
