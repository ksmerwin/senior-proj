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
    <button>Change Schedule</button>
    </router-link>
    </div>
</template>


<style>

#profile{
    margin: 20px 20px 0px 20px;
    border:solid black;
    border-width: 4px;
    height: 400px;
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
    margin-left: 10px;
    margin-right: 20px;
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
      MWFcal: 0,
      TUcal: 0,
      totalcal: 0
  })
}
</script>
