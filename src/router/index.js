import Vue from 'vue';
import Router from 'vue-router'

import AboutPage from '~/components/AboutPage.vue';
import App from '../App.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'App',
            component: App,

        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage,
        },
    ],
});