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
    <!--<router-link to="/login">login</router-link> <br>
    <router-link to="/">InputPage</router-link>  <br>
    <router-link to="/secure">secure</router-link> <br>
    <router-link to="/register">register</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span> <br>
    <router-link to="/SchedulePage">Schedule</router-link> <br>
    <router-link to="/ResultsPage">Results</router-link> <br>
  -->
    </div>
    <router-view/>

  </div>
</template>

<style>
body {
  margin:0;
}

.container{
  margin-left: 10px;
}

#title{
  font-size: 45px;
  font-weight: bolder;
  margin: 5px;
  padding:0;
}

#app {
  height: 100%;
  width: 100%;
  
  font-family: "ArchitectsDaughter", Helvetica, sans-serif;
  background: rgb(215, 143, 228);
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
  omputed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  
};
</script>

