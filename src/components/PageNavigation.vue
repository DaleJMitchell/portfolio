<template>
  <div class="page-container">
    
      <div class="navigation-buttons">
        <router-link class="home" to="/">Home</router-link>
        <router-link class="project" to="/project">Projects</router-link>
        <router-link class="contact" to="/contact">Contact</router-link>
        <router-link class="about" to="/about">About</router-link>
      </div>    
      <div class="logo-container">
        <img src="../assets/2023.03.28 Dale Mitchel Headshot-square-centered.jpg" alt="Dale Mitchell Headshot" class="rounded-full w-full">
      </div>
    
    
  </div>
</template>

<script>
export default {
  name: "PageNavigation",
  // methods: {
  //   navigateToHomePage() {
  //     this.$router.push('/home');
  //   },
  //   navigateToNewsPage() {
  //     this.$router.push('/news');
  //   },
  //   navigateToContactPage() {
  //     this.$router.push('/contact');
  //   },
  //   navigateToAboutPage() {
  //     this.$router.push('/about');
  //   }
  // }
}
</script>

<style>
.page-container{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100vh;
}


.navigation-buttons{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navigation-buttons a {
  margin-bottom: 5px;
  color: white;
  text-decoration: none;
  padding: 20px; 
  border: 1px solid transparent;
  padding-right: 20px;

}
.navigation-buttons a:hover {
  transition: border-color 0.3s; 
  transition: background-color 0.3s; 
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  border-color: white;
}
.navigation-buttons a.home:hover {
  color: red; /* Color when hovering home */
}

.navigation-buttons a.project:hover {
  color: green; /* Color when hovering news */
}

.navigation-buttons a.contact:hover {
  color: blue; /* Color when hovering contact */
}

.navigation-buttons .about:hover {
  color: rgb(197, 4, 207); /* Color when hovering about */
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
