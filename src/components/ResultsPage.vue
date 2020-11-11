<template>
    <div id="profile">
        <h3>Name: {{firstname}} {{lastname}}</h3>
        <h3>Sex: {{sex}}</h3>
        <br>
        <h3>Age: {{age}}</h3>

        <h3 style="margin-left: 206px">Weight: {{weight}}</h3>
        <br>
        <h3>Major: {{major}}</h3>
        
    <div id="calculations">
        <h2>Calories burned walking on Campus</h2>
    </div>
        <h2>MWF calories a day: {{MWFcal}}</h2> 
        <h2>TU calories a day: {{TUcal}}</h2>
        <h2>Total Calories burned a week: {{totalcal}}</h2>
        <router-link to="/SchedulePage">
    <button id="change">Change Schedule</button>
    </router-link>
    <br>
    <br>
    <br>
    <br>
    <router-link to="/">
    <button id="home">Home</button>
    </router-link>

    <!--<router-link to="/">
    <router-link to="/">
    <button>Save</button>
    </router-link>
    <button>See Route</button>
    </router-link>
    -->
    </div>
    

</template>


<style>

#profile{
    margin: 20px 20px 0px 20px;
    border:solid black;
    border-width: 4px;
    height: 374px;
    width: 720px;
}

#calculations{
    border-top: solid black;
    margin-top: 25px;
}

h2{
    margin-left:10px;

    
}

#change {
    float: right;
    margin-left: 10px;
    margin-right: 10px;
    
    border-radius: 4px;
    border: 2px solid black;
    padding: 5px 30px 5px 30px;
    font-family: "ArchitectsDaughter";
    font-weight: bolder
}

#home {
    margin-left:50%;
    border-radius: 4px;
    border: 2px solid black;
    padding: 5px 30px 5px 30px;
    font-family: "ArchitectsDaughter";
    font-weight: bolder
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
      firstname: 'Kevin',
      lastname: 'Merwin',
      major: 'Computer Science',
      weight: '164',
      age: '23',
      sex: 'Male',
      MWFcal: 72, 
    
      TUcal: 70,
      totalcal: 142
  })
}
</script>
