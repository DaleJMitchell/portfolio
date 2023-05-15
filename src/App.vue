<template>
  <div>
  <page-navigation></page-navigation>
  <router-view></router-view>
  </div>
</template>

<script>
import PageNavigation from './components/PageNavigation.vue'
export default {
  components: { PageNavigation },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
