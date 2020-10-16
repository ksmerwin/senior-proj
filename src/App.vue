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
    <router-link to="/">Home Input</router-link>
    
    </div>
    <router-view/>

  </div>
</template>

<style>
body {
  margin:0;
  
}

#title{
  font-size: 45px;
  font-weight: bolder;
  margin: 5px;
  padding:0;
}

#app {
  
  font-family: "ArchitectsDaughter", Helvetica, sans-serif;
  background: rgb(199, 121, 213);
}


.description {
    width: 550px;
    margin-left: 35px;
}

.name {
    margin-left: 25px;
}



@font-face {
  font-family: "ArchitectsDaughter";
  src: local("ArchitectsDaughter"),
   url(./fonts/ArchitectsDaughter-Regular.ttf) format("truetype");
}

</style>


<script>

export default {
  name: 'App',

  
};
</script>
