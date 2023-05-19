<template>
  <div class="page-container">
    <div class="left-section">

      <page-navigation></page-navigation>
    </div>
  <div class="right-section">
    <router-view></router-view>
  </div>
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
.page-container{
  display: flex;
  height: 100vh;
}
.right-section{
  flex: 1;
  background-color: white;
  padding: 20px;
}

.left-section {
  flex: 1;
  background: linear-gradient(to bottom,#0c5b8f,  #03243F);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
