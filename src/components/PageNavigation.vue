<template>
  <div class="page-container">
    <div class="left-section">
      <div class="navigation-buttons">
        <a href="#home" class="home">Home</a>
        <a href="#news" class="news">News</a>
        <a href="#contact" class="contact">Contact</a>
        <a href="#about" class="about">About</a>
    </div>
      <div class="logo-container">
        <img src="../assets/2023.03.28 Dale Mitchel Headshot-square-centered.jpg" alt="Dale Mitchell Headshot" class="rounded-full w-full">
      </div>
    </div>
    <div class="right-section">
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNavigation",
  methods: {
    navigateToHomePage() {
      this.$router.push('/home');
    },
    navigateToNewsPage() {
      this.$router.push('/news');
    },
    navigateToContactPage() {
      this.$router.push('/contact');
    },
    navigateToAboutPage() {
      this.$router.push('/about');
    }
  }
}
</script>

<style>
.page-container{
  display: flex;
  height: 100vh;
}

.left-section {
  flex: 1;
  background-color: gray;
  /* padding: 20px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end
}
.navigation-buttons{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navigation-buttons a {
  margin-bottom: 5px;
  color: black;
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

.navigation-buttons a.news:hover {
  color: green; /* Color when hovering news */
}

.navigation-buttons a.contact:hover {
  color: blue; /* Color when hovering contact */
}

.navigation-buttons a.about:hover {
  color: purple; /* Color when hovering about */
}

.right-section{
  flex: 1;
  background-color: white;
  padding: 20px;
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
