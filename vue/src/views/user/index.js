export default [
    {
        path: '/:id',
        name: 'User',
        component: () => import('./view.vue'),
    },
]
