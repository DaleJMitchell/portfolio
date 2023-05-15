<template>
   
  
  <div id="myTopnav" class="topnav h-screen text-white flex flex-col justify-center items-end">
    <div class="logo-container">
      <img src="../assets/2023.03.28 Dale Mitchel Headshot-square-centered.jpg" alt="Dale Mitchell Headshot" class="rounded-full w-full">
      
    </div>

    <a class="active px-2 rounded-l-xl my-1 hover:text-red-500" href="#home">Home</a>
    <a class="px-2 rounded-l-xl my-1 hover:text-yellow-500" href="#news">News</a>
    <a class="px-2 rounded-l-xl my-1 hover:text-green-500" href="#contact">Contact</a>
    <a class="px-2 rounded-l-xl my-1 hover:text-blue-500" @click="navigateToAboutPage">About</a>
    
  </div>

</template>

<script>
export default {
  name: "PageNavigation",
  methods: {
    navigateToAboutPage() {
      this.$router.push('/about');
    }
  }
}
</script>

<style>
  .topnav a {
    padding: 10px;
    transition: background-color 0.3s ease;
  }
  
  .topnav a:hover {
    background-color: rgb(255, 255, 255);
    border-radius: 0 -10px -10px 0;
  }

  .logo-container {
    position: absolute;
    top: 2in;
    left: 0.5in;
    width: 20vw;
    height: 20%;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .rounded-full {
    border-radius: 50%;
  }
  
  .w-full {
    width: 100%;
  }
  
  .h-full {
    height: 100%;
  }
</style>
