import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutPageVue from './components/AboutPage.vue';

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    component: AboutPageVue,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');