<template>
  <div class ="InputPage">
    

    <div class="inp">

    <h2>About You!</h2> 
    <input type="text" v-model="firstname" class="personal"  placeholder="First Name">
    <input type="text" class="personal" v-model="lastname" placeholder="Last Name">
    <br>
    <input type="text" class="personal" v-model="major" placeholder="Major">
    <br>
    <input type="radio" class="personal" name="picked"  v-model="picked"> 
    <label for="m">Male</label>
    <input type="radio" class="personal" name="picked"  v-model="picked"> 
    <label for="f">Female</label>
    <br>
    <input type="text" class="personal" v-model="weight" placeholder="Weight">
    <input type="text" class="personal" v-model="age" placeholder="Age">
    <br>
  
    <router-link to="/SchedulePage">
    <button class="next">Next</button>
    </router-link>
    
    <!--may have to v-bind:disabled to make sure all forms are are filled. v-on:click-->
    
    </div>
     
  </div>
</template>



<script>
export default {
  name: 'InputPage',
  data: () => ({
      m: 0,
      f: 1,
      firstname: '',
      lastname: '',
      major: '',
      weight: '',
      age: ''
  })
}
</script>
