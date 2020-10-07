<template>
  <div id="app">
     <header>

    <div id="title">
      Calorie Counter for Cats
    </div>
    <p class="description">Welcome to Calorie Counter for Cats! Walking to class is something that we all do here at K-State. 
      Knowing how many calories you burn from your daily walk can help you reach your health goals! Below you can 
      enter your information and then be redirected to a page to enter in your schedule. Thanks and stay healthy!
    </p>
    </header>
    <div class="container">
    <router-link to="/">Input</router-link>
    
    </div>
    <router-view/>

  </div>
</template>

<style>
body {
  margin:0;
  background-color: #000000;
}

#title{
  font-size: 45px;
  font-weight: bolder;
  margin: 5px;
  padding:0;
}

#app {
  height: 100vh;
  width: 100vw;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(rgb(177, 15, 177), rgb(105, 6, 105), black);
}


.description {
    width: 550px;
    margin-left: 35px;
}

.name {
    margin-left: 25px;
}


</style>


<script>

export default {
  name: 'App',

  
};
</script>
