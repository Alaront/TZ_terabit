import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/home'
import UserView from './views/user'

export default createRouter({
    history: createWebHistory(),
    routes: [
        ...HomeView,
        ...UserView
    ]
})
