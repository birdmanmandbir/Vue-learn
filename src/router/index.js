const home = () => import('../components/Employee.vue')
const routes = [
    {
        path: '/employees',
        name: 'employees',
        component: home
    },
    {
        path: '/vr',
        name: 'vr',
        component: () => import('../components/VueVR.vue')
    }
]

export default routes