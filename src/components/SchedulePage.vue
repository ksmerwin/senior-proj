<template>
    <div>
        <h2>What's your schedule?</h2>

        <h3 style="margin: 15px">M/W/F SCHEDULE</h3>
        <ul> 
        <!--number of classes select-->
        <select class="form-control" name="classes" v-model="selected">
        <option v-for="n in numberofclasses" :key="n.value"  >{{n.value}}</option>
        </select>
        <!--MWF Route Select-->
        <li v-for="n in numberofclasses" :key="n.value">
        First Building <select name="MWF">
        <option disabled value="">Please select one</option>
        <option  v-for="route in route" :key="route" >{{route.buildingstart}}</option> 
        </select>
        Second Building
        <select name="MWF">
        <option disabled value="">Please select one</option>
        <option class="secondclass" v-for="route in route" :key="route" >{{route.buildingend}}</option>
        </select>
        <!--add time later?? for now working with routes-->
        <br>
        </li> 
        </ul>
        
        <!--<ul>
        <li class="option">
        <select name="MWF">
        <option disabled value="">Please select one</option>
        <option v-for="building in buildings" :key="building.building" >{{building.building}}</option>
        </select>
        </li>
        </ul>
        <ul>
        <li class="option">
        <select name="MWF">
        <option disabled value="">Please select one</option>
        <option v-for="building in buildings" :key="building.building" >{{building.building}}</option>
        </select>
        </li>
        </ul>
        <ul>
        <li class="option">
        <select name="MWF">
        <option disabled value="">Please select one</option>
        <option v-for="building in buildings" :key="building.building" >{{building.building}}</option>
        </select>
        </li>
        </ul>-->

        <span>
            selected: {{selected}}
        </span>
    <br>
    <br>


    <h3 style="margin: 15px">T/U SCHEDULE</h3>
        <ul> 
        <li v-for="n in numberofclasses" :key="n.value" >
        First Building <select name="TU">
        <option disabled value="">Please select one</option>
        <option  v-for="route in route" :key="route" >{{route.buildingstart}}</option> 
        </select>
        Second Building
        <select name="TI">
        <option disabled value="">Please select one</option>
        <option class="secondclass" v-for="route in route" :key="route" >{{route.buildingend}}</option>
        </select>
        <!--add time later?? for now working with routes-->
        <br>
        </li> 
        </ul>
    
        <select class="form-control" name="classes">
        <option v-for="n in numberofclasses" :key="n.value" :value="n.value" >{{n.value}}</option>
        </select>


     <router-link to="/ResultsPage">
    <button class="next">Calculate Calories!</button>
    </router-link>

    </div>



    
</template>


<style>
 li{
     margin:4px;
     
 }

 select{
     margin:4px;
 }
</style>



<script>
export default {
  name: 'SchedulePage',
  data: () => ({
      numberofclasses: [
          {value:0},
          {value:1},
          {value:2},
          {value:3},
          {value:4},
          {value:5}
          ],
    selected: 0,
      route:[
          {buildingstart: 'Building A',
          buildingend: 'Building B',
          calories: 54},
          {buildingstart: 'Building B',
          buildingend: 'Building C',calories: 100},
          {buildingstart: 'Building C',
          buildingend: 'Building D', calories: 23},
      ],
      buildings:
      [
          {building: 'Ahearn'},
          {building: 'Anderson'},
          {building: 'Bill Snyder'},
          {building: 'Bluemont'},
          {building: 'Call Hall'},
          {building: 'Cardwell'},
          {building: 'Ackert'},
          {building: 'The Rec'},
          {building: 'Derby'},
          {building: 'Dickens'},
          {building: 'Eisenhower'},
          {building: 'Fairchild'},
          {building: 'Fielder'},
          {building: 'Hale'},
          {building: 'Jardine'},
          {building: 'Justin'},
          {building: 'King'},
          {building: 'Kramer'},
          {building: 'Lafene'},
          {building: 'McCain'},
          {building: 'Nichols'},
          {building: 'Old Stadium'},
          {building: 'Seaton'},
          {building: 'Shellenberger'},
          {building: 'Union'},
          {building: 'Throckmorton'},
          {building: 'Trotter'},
          {building: 'Umberger'},
          {building: 'Van Zile'},
          {building: 'Waters'},
          {building: 'Weber'},
      ] 
  })
}
</script>

