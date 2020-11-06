<template>
    <div style="justify-content: center">
        <h2>What's your schedule?</h2>
        <h3 style="margin: 15px">M/W/F SCHEDULE</h3>
        <ul> 
        <!--number of classes select-->
        <!--MWF Route Select-->
        <li v-for="n in numberofclasses" :key="n.value">
        First Building <select name="MWF">
        <option disabled value="">Please select one</option>
        <option  v-for="b in buildings" :key="b" >{{b.building}}</option> 
        </select>
        Second Building
        <select name="MWF">
        <option disabled value="">Please select one</option>
        <option class="secondclass" v-for="b in buildings" :key="b" >{{b.building}}</option>
        </select>
        <!--add time later?? for now working with routes-->
        <br>
        </li> 
        </ul>
        <p style="margin-left: 45px">
             number of classes:
        <select class="form-control" name="classes">
        <option v-for="n in numberofclasses" :key="n.value" :value="n.value" >{{n.value}}</option>
        </select>
            </p>
        
        
    <br>


    <h3 style="margin: 15px">T/U SCHEDULE</h3>
        <ul> 
        <li v-for="n in numberofclasses" :key="n.value" >
        First Building <select name="TU">
        <option disabled value="">Please select one</option>
        <option  v-for="b in buildings" :key="b" >{{b.building}}</option> 
        </select>
        Second Building
        <select name="TI">
        <option disabled value="">Please select one</option>
        <option class="secondclass" v-for="b in buildings" :key="b" >{{b.building}}</option>
        </select>
        <!--add time later?? for now working with routes-->
        <br>
        </li> 
        </ul>
        <p style="margin-left: 45px">
             number of classes:
        <select class="form-control" name="classes">
        <option v-for="n in numberofclasses" :key="n.value" :value="n.value" >{{n.value}}</option>
        </select>
            </p>
     <router-link to="/ResultsPage">
    <button id="calculate">Calculate Calories!</button>
    </router-link>
    </div>
</template>


<style>
body{
    background:rgb(199, 121, 213);
    justify-content: center;
}

 li{
     margin:4px;
     
 }


 #calculate{border-radius: 4px;
    border: 2px solid black;
    padding: 5px 30px 5px 30px;
    font-family: "ArchitectsDaughter";
    font-weight: bolder;
    margin:20px;
    float:right;
    margin-right: 50%;
}
    
</style>



<script>
export default {
  name: 'SchedulePage',
  data: () => ({
      numberofclasses: [
          {value:1},
          {value:2},
          {value:3}
          ],
    selected: 0,
      route:[
          {buildingstart: 'Ahearn',
          buildingend: 'Anderson',
          calories: 14, miles:0.2},
          {buildingstart: 'Ahearn',
          buildingend: 'Bill Snyder',
          calories: 68,miles: 0.8},
          {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Call Hall',
           calories: 51, miles: 0.6},
           {buildingstart: 'Ahearn',
          buildingend: 'Cardwell',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Ackert',
           calories: 22, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'The Rec',
           calories: 86, miles: 1.0},
           {buildingstart: 'Ahearn',
          buildingend: 'Derby',
           calories: 44, miles: 0.5},
           {buildingstart: 'Ahearn',
          buildingend: 'Dickens',
           calories: 26, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'Eisenhower',
           calories: 21, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'Fairchild',
           calories: 31, miles: 0.2},
           {buildingstart: 'Ahearn',
          buildingend: 'Fiedler',
           calories: 31, miles: 0.1},
           {buildingstart: 'Ahearn',
          buildingend: 'Hale',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Jardine',
           calories: 31, miles: 0.6},
           {buildingstart: 'Ahearn',
          buildingend: 'Justin',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'King',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Kramer',
           calories: 31, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'Lafene',
           calories: 31, miles: 0.5},
           {buildingstart: 'Ahearn',
          buildingend: 'McCain',
           calories: 31, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'Nichols',
           calories: 31, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'Old Stadium',
           calories: 31, miles: 0.2},
           {buildingstart: 'Ahearn',
          buildingend: 'R-Lot',
           calories: 31, miles: 0.7},
           {buildingstart: 'Ahearn',
          buildingend: 'Seaton',
           calories: 31, miles: 0.1},
           {buildingstart: 'Ahearn',
          buildingend: 'Shellenberger',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Union',
           calories: 31, miles: 0.1},
           {buildingstart: 'Ahearn',
          buildingend: 'Throckmorton',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Trotter',
           calories: 31, miles: 0.7},
           {buildingstart: 'Ahearn',
          buildingend: 'Umberger',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Van Zile',
           calories: 31, miles: 0.5},
           {buildingstart: 'Ahearn',
          buildingend: 'Waters',
           calories: 31, miles: 0.3},
           {buildingstart: 'Ahearn',
          buildingend: 'Weber',
           calories: 31, miles: 0.7},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
           {buildingstart: 'Ahearn',
          buildingend: 'Bluemont',
           calories: 31, miles: 0.4},
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

