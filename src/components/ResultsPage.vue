<template>
    <div id="profile">
        <h3>Name: Kevin Merwin</h3>
        <h3>Sex: Male</h3>
        <br>
        <h3>Age: 23</h3>
        <h3>Weight: 161</h3>
        <br>
        <h3>Major: Computer Science</h3>
        
    <div id="calculations">
        <h2>Calories burned walking on Campus</h2>
    </div>
        <h2>MWF calories a day: 0</h2> 
        <h2>TU calories a day: 0</h2>
        <h2>Total Calories burned a week: 0</h2>
        
        <router-link to="/SchedulePage">
    <button>Change Schedule</button>
    </router-link>
    </div>
</template>


<style>

#profile{
    margin: 20px 20px 0px 20px;
    border:solid black;
    border-width: 4px;
    height: 350px;
}

#calculations{
    border-top: solid black;
    margin-top: 25px;
    

}

h2{
    margin-left:10px;
    
}

button {
    float: right;
    margin: 10px;
}

h3{
    display: inline;
    margin: 100px;
    padding: 10px;
}

</style>



<script>
export default {
  name: 'ResultsPage',
  data: () => ({
      
  })
}
</script>
