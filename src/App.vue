<template>
  <div id="campusCalorieCounterApp">
    
     <header>

    <div id="title">
      Calorie Counter for Cats
    </div>
    <p class="description">Welcome to Calorie Counter for Cats! Walking to class is something that we all do here at K-State. 
      Knowing how many calories you burn from your daily walk can help you reach your health goals! Below you can 
      enter your starting building and ending building for your schedule. Your weekly route will then be updated automatically along with your total calories burned for the week.
       Thanks and stay healthy!
    </p>
    </header>
    <div class="container">

  <h2>Your weekly routes:</h2>
    <p style="background-color: white;
              border-radius: 6px;
              padding-left: 15px;
              width: fit-content;
              margin-left: 15px;
              border-style:solid;
              border-color: mediumpurple;
    " v-if="createdRoutes.length == 0">
      No routes added to your schedule yet.
    </p>
    <ul>
      <li
      style="
      background-color: white;
              border-radius: 6px;
              padding-left: 15px;
              width: fit-content;
              margin-left: 15px;
      "  
      class="route" v-for="route in createdRoutes" :key="route.id">
      {{route.label}}
      {{ route.calories}}
        <span class="remove" @click="removeRoute(route)">X</span>
      </li>
    </ul>
    <br>
    <h3 >Add a new route to your schedule</h3>
    <div class="select">
    <br>
    <br>
    <br>
      <label style="
      background-color: lightgrey;
              border-radius: 6px;
              padding: 5px 5px 5px 5px;
              width: 300px;
              margin-left: 15px;
              border-style:solid;
              border-color: black;
      " for="new_route_start_building">Starting building: </label>
      
      <select name="new_route_start_building" v-model="newRouteBuildingStartId">
        <option disabled value="">Select a building</option>
        <option
          v-for="building in buildings"
          :key="building.id"
          :value="building.id"
          >{{ building.name }}</option
        >
      </select>
    </div>
    
    <div class="select">
      <label style="
      background-color: lightgrey;
              border-radius: 6px;
              padding: 5px 5px 5px 5px;
              width: 300px;
              margin-left: 15px;
              border-style:solid;
              border-color: black;
      " for="new_route_end_building">Ending building: </label>

      <select name="new_route_end_building" v-model="newRouteBuildingEndId">
        <option disabled value="">Select a building</option>
        <option
          v-for="building in buildings"
          :key="building.id"
          :value="building.id"
          >{{ building.name }}</option
        >
      </select>
    </div>
    <br>
    <br>
    <br>
    <button @click="addNewRoute">Add new route</button>

    <h2>Total Calories: {{ totalCalories }}</h2>

    </div>
    
  </div>
</template>

<style>
body {
  background-color:  rgb(81, 40, 136) !important;
  margin:0;

}



#title{
  font-size: 45px;
  font-weight: bolder;
  margin: 15px;
  padding-left: 15px;
    background-color: lightgrey;
    border-radius: 6px;
  width: 550px;
  border-style:solid;
  border-color: black;
  
}

#campusCalorieCounterApp {
  height: 100%;
  width: 100%;
  font-family: "ArchitectsDaughter", Helvetica, sans-serif;
}


p.description {
    width: 650px;
    margin-left:15px;
    background-color:white;
    border-radius: 6px;
    padding: 15px;
    border-style:solid;
  border-color: black;
}

.name {
    margin-left: 25px;
}



@font-face {
  font-family: "ArchitectsDaughter";
  src: local("ArchitectsDaughter"),
   url(./fonts/ArchitectsDaughter-Regular.ttf) format("truetype");
}

.route {
  margin-bottom: 0px;
  
    border-style:solid;
  border-color: mediumpurple;
}

.route .remove {
      font-size: 20px;
    color: red;
    margin-right: 4px;
}

h2, h3 {
  margin:15px !important;
    padding-left: 5px;
    background-color: lightgrey;
    border-radius: 6px;
    width: fit-content;
    padding:5px;
    border-style:solid;
  border-color: black;
}

ul {
  list-style-type: none;
}

.select{
  display: inline;
}

button{
font-size: 15px;
font-family:'ArchitectsDaughter';
  background-color: white;
  color: black;
  border-radius: 6px;
  padding: 3px;
  margin-left: 225px;
  border-style:solid;
  border-color: black;
  }

</style>


<script>
// FORMAT
// buildingId => { id: buildingId, name: string building name }
const BUILDINGS = {
  1: {
    id: 1,
    name: "Ahearn",
  },
  2: {
    id: 2,
    name: "Anderson",
  },
  3: {
    id: 3,
    name: "Bill Snyder",
  },
  4: {
    id: 4,
    name: "Bluemont",
  },
  5: {
    id: 5,
    name: "Call Hall",
  },
  6: {
    id: 6,
    name: "Cardwell",
  },
  7: {
    id: 7,
    name: "Ackert",
  },
  8: {
    id: 8,
    name: "The Rec",
  },
  9: {
    id: 9,
    name: "Derby",
  },
  10: {
    id: 10,
    name: "Dickens",
  },
  11: {
    id: 11,
    name: "Eisenhower",
  },
  12: {
    id: 12,
    name: "Fairchild",
  },
  13: {
    id: 13,
    name: "Fiedler",
  },
  14: {
    id: 14,
    name: "Hale",
  },
  15: {
    id: 15,
    name: "Jardine",
  },
  16: {
    id: 16,
    name: "Justin",
  },
  17: {
    id: 17,
    name: "King",
  },
  18: {
    id: 18,
    name: "Kramer",
  },
  19: {
    id: 19,
    name: "Lafene",
  },
  20: {
    id: 20,
    name: "McCain",
  },
  21: {
    id: 21,
    name: "Nichols",
  },
  22: {
    id: 22,
    name: "Old Stadium",
  },
  23: {
    id: 23,
    name: "R-Lot",
  },
  24: {
    id: 24,
    name: "Seaton",
  },
  25: {
    id: 25,
    name: "Shellenberger",
  },
  26: {
    id: 26,
    name: "Union",
  },
  27: {
    id: 27,
    name: "Throckmorton",
  },
  28: {
    id: 28,
    name: "Trotter",
  },
  29: {
    id: 29,
    name: "Umberger",
  },
  30: {
    id: 30,
    name: "Van Zile",
  },
  31: {
    id: 31,
    name: "Waters",
  },
  32: {
    id: 32,
    name: "Weber",
  },
};
// FORMAT
// startBuildingID => {
//   endBuildingID => {
//     miles: number, # Number of miles on the route
//     calories: number, # Burned calories on the route
//     minutes: number, # Number of minutes on the route
//   }
//}
// 1st building:
//      all possible buildings
// 2nd building:
//      all possible buildings
// finished all 1,2,3,4,5 endBuilding:
//
const DATA_LOOKUP = {
  1: {
    1: { miles: 0, calories: 0, minutes: 0 },
    2: { miles: 0.2, calories: 14, minutes: 4 },
    3: { miles: 0.8, calories: 68, minutes: 17 },
    4: { miles: 0.4, calories: 31, minutes: 8 },
    5: { miles: 0.6, calories: 51, minutes: 13 },
    6: { miles: 0.4, calories: 31, minutes: 7 },
    7: { miles: 0.3, calories: 22, minutes: 6 },
    8: { miles: 1.0, calories: 86, minutes: 21 },
    9: { miles: 0.5, calories: 44, minutes: 11 },
    10: { miles: 0.3, calories: 26, minutes: 6 },
    11: { miles: 0.3, calories: 21, minutes: 5 },
    12: { miles: 0.2, calories: 19, minutes: 5 },
    13: { miles: 0.1, calories: 8, minutes: 2 },
    14: { miles: 0.2, calories: 17, minutes: 4 },
    15: { miles: 0.6, calories: 53, minutes: 13 },
    16: { miles: 0.4, calories: 31, minutes: 8 },
    17: { miles: 0.4, calories: 35, minutes: 9 },
    18: { miles: 0.3, calories: 25, minutes: 6 },
    19: { miles: 0.5, calories: 38, minutes: 9 },
    20: { miles: 0.3, calories: 24, minutes: 6 },
    21: { miles: 0.3, calories: 27, minutes: 7 },
    22: { miles: 0.2, calories: 15, minutes: 4 },
    23: { miles: 0.7, calories: 59, minutes: 15 },
    24: { miles: 0.1, calories: 10, minutes: 2 },
    25: { miles: 0.4, calories: 31, minutes: 8 },
    26: { miles: 0.1, calories: 11, minutes: 3 },
    27: { miles: 0.4, calories: 30, minutes: 7 },
    28: { miles: 0.7, calories: 61, minutes: 15 },
    29: { miles: 0.4, calories: 36, minutes: 9 },
    30: { miles: 0.5, calories: 44, minutes: 11 },
    31: { miles: 0.3, calories: 25, minutes: 6 },
    32: { miles: 0.7, calories: 56, minutes: 14 },

  },
  2: {
    1: {miles: 0.2, calories: 14, minutes: 4  },
    2: { miles: 0, calories: 0, minutes: 0 },
    3: { miles: 1.2, calories: 102, minutes: 25 },
    4: { miles: 0.1, calories: 12, minutes: 3 },
    5: { miles: 0.6, calories: 48, minutes: 12 },
    6: { miles: 0.3, calories: 24, minutes: 6 },
    7: { miles: 0.7, calories: 57, minutes: 14 },
    8: { miles: 1.4, calories: 121, minutes: 30 },
    9: { miles: 0.6, calories: 52, minutes: 13 },
    10: { miles: 0.2, calories: 14, minutes: 3 },
    11: { miles: 0.1, calories: 5, minutes: 1 },
    12: { miles: 0.1, calories: 5, minutes: 1 },
    13: { miles: 0.4, calories: 32, minutes: 8 },
    14: { miles: 0.2, calories: 13, minutes: 3 },
    15: { miles: 0.9, calories: 73, minutes: 18 },
    16: { miles: 0.2, calories: 20, minutes: 5},
    17: { miles: 0.3, calories: 23, minutes: 6 },
    18: { miles: 0.5, calories: 43, minutes: 11 },
    19: { miles: 0.7, calories: 59, minutes: 14 },
    20: { miles: 0.1, calories: 8, minutes: 2 },
    21: { miles: 0.2, calories: 15, minutes: 4 },
    22: { miles: 0.3, calories: 21, minutes: 5 },
    23: { miles: 0.5, calories: 46, minutes: 11 },
    24: { miles: 0.1, calories: 10, minutes: 2 },
    25: { miles: 0.2, calories: 14, minutes: 4 },
    26: { miles: 0.1, calories: 10, minutes: 2 },
    27: { miles: 0.5, calories: 38, minutes: 9 },
    28: { miles: 0.9, calories: 76, minutes: 19 },
    29: { miles: 0.4, calories: 31, minutes: 7 },
    30: { miles: 0.3, calories: 28, minutes: 7 },
    31: { miles: 0.2, calories: 18, minutes: 4 },
    32: { miles: 0.5, calories: 42, minutes: 10 },
  },
  3: {
    1: { miles: 0.8, calories: 68, minutes: 17 },
    2: { miles: 1.2, calories: 102, minutes: 25 },
    3: { miles: 0, calories: 0, minutes: 0 },
    4: { miles: 1.4, calories: 122, minutes: 30 },
    5: { miles: 1.0, calories: 83, minutes: 20 },
    6: { miles: 1.3, calories: 107, minutes: 26 },
    7: { miles: 1.1, calories: 92, minutes: 22 },
    8: { miles: 0.3, calories: 25, minutes: 6 },
    9: { miles: 1.3, calories: 110, minutes: 27 },
    10: { miles: 1.4, calories: 121, minutes: 30 },
    11: { miles: 1.5, calories: 127, minutes: 31 },
    12: { miles: 1.6, calories: 137, minutes: 33 },
    13: { miles: 1.2, calories: 99, minutes: 24 },
    14: { miles: 0.2, calories: 13, minutes: 3 },
    15: { miles: 0.6, calories: 51, minutes: 12 },
    16: { miles: 0.1, calories: 13, minutes: 3 },
    17: { miles: 1.3, calories: 111, minutes: 27 },
    18: { miles: 1.2, calories: 100, minutes: 24 },
    19: { miles: 1.4, calories: 115, minutes: 28 },
    20: { miles: 1.7, calories: 141, minutes: 35 },
    21: { miles: 1.7, calories: 144, minutes: 35 },
    22: { miles: 1.5, calories: 126, minutes: 31 },
    23: { miles: 1.3, calories: 106, minutes: 26},
    24: { miles: 1.4, calories: 119, minutes: 29 },
    25: { miles: 1.2, calories: 100, minutes: 4 },
    26: { miles: 1.5, calories: 126, minutes: 2 },
    27: { miles: 1.1, calories: 89, minutes: 9 },
    28: { miles: 0.7, calories: 55, minutes: 19 },
    29: { miles: 1.2, calories: 103, minutes: 7 },
    30: { miles: 1.6, calories: 133, minutes: 7 },
    31: { miles: 1.3, calories: 109, minutes: 4 },
    32: { miles: 1.2, calories: 102, minutes: 10 },
  },
  4: {
    1: { miles: 0.4, calories: 31, minutes: 8 },
    2: { miles: 0.1, calories: 12, minutes: 3 },
    3: { miles: 1.4, calories: 122, minutes: 30 },
    4: { miles: 0, calories: 0, minutes: 0 },
    5: { miles: 0.4, calories: 38, minutes: 9 },
    6: { miles: 0.2, calories: 20, minutes: 5 },
    7: { miles: 0.4, calories: 33, minutes: 8 },
    8: { miles: 1.1, calories: 91, minutes: 22 },
    9: { miles: 0.3, calories: 27, minutes: 7},
    10: { miles: 0.0, calories: 2, minutes: 0 },
    11: { miles: 0.1, calories: 6, minutes: 1 },
    12: { miles: 0.2, calories: 19, minutes: 5 },
    13: { miles: 0.3, calories: 24, minutes: 6 },
    14: { miles: 0.1, calories: 5, minutes: 1 },
    15: { miles: 0.8, calories: 64, minutes: 16 },
    16: { miles: 0.1, calories: 4, minutes: 1},
    17: { miles: 0.1, calories: 12, minutes: 3 },
    18: { miles: 0.5, calories: 42, minutes: 10 },
    19: { miles: 0.7, calories: 58, minutes: 14 },
    20: { miles: 0.3, calories: 23, minutes: 6 },
    21: { miles: 0.4, calories: 31, minutes: 8 },
    22: { miles: 0.4, calories: 37, minutes: 9 },
    23: { miles: 0.2, calories: 19, minutes: 5 },
    24: { miles: 0.2, calories: 14, minutes: 4 },
    25: { miles: 0.3, calories: 22, minutes: 5 },
    26: { miles: 0.2, calories: 18, minutes: 4 },
    27: { miles: 0.5, calories: 38, minutes: 9},
    28: { miles: 1.0, calories: 86, minutes: 21 },
    29: { miles: 0.4, calories: 33, minutes: 8 },
    30: { miles: 0.2, calories: 21, minutes: 5 },
    31: { miles: 0.2, calories: 18, minutes: 4 },
    32: { miles: 0.3, calories: 25, minutes: 6 },
  },
  5: {
    1: { miles: 0.6, calories: 51, minutes: 13 },
    2: {miles: 0.6, calories: 48, minutes: 12 },
    3: { miles: 1.0, calories: 83, minutes: 20 },
    4: { miles: 0.4, calories: 38, minutes: 9 },
    5: { miles: 0, calories: 0, minutes: 0 },
    6: { miles: 0.2, calories: 33, minutes: 8 },
    7: { miles: 0.2, calories: 34, minutes: 8 },
    8: { miles: 0.2, calories: 58, minutes: 14 },
    9: { miles: 0.2, calories: 30, minutes: 7 },
    10: { miles: 0.2, calories: 41, minutes: 10 },
    11: { miles: 0.2, calories: 51, minutes: 12 },
    12: { miles: 0.2, calories: 54, minutes: 13 },
    13: { miles: 0.2, calories: 46, minutes: 11 },
    14: { miles: 0.2, calories: 41, minutes: 10 },
    15: { miles: 0.2, calories: 25, minutes: 6 },
    16: { miles: 0.2, calories: 41, minutes: 10 },
    17: { miles: 0.2, calories: 31, minutes: 8},
    18: { miles: 0.2, calories: 49, minutes: 12 },
    19: { miles: 0.2, calories: 64, minutes: 16 },
    20: { miles: 0.2, calories: 56, minutes: 14 },
    21: { miles: 0.2, calories: 73, minutes: 15 },
    22: { miles: 0.2, calories: 62, minutes: 4 },
    23: { miles: 0.2, calories: 17, minutes: 14 },
    24: { miles: 0.2, calories: 58, minutes: 15 },
    25: { miles: 0.2, calories: 60, minutes: 14 },
    26: { miles: 0.2, calories: 55, minutes: 7 },
    27: { miles: 0.2, calories: 28, minutes: 7 },
    28: { miles: 0.2, calories: 28, minutes: 5 },
    29: { miles: 0.2, calories: 20, minutes: 9 },
    30: { miles: 0.4, calories: 36, minutes: 6 },
    31: { miles: 0.3, calories: 24, minutes: 4 },
    32: { miles: 0.2, calories: 17, minutes: 4 },
  },
  6: {
    1: { miles: 0.4, calories: 31, minutes: 7},
    2: { miles: 0.3, calories: 24, minutes: 6  },
    3: { miles: 1.3, calories: 107, minutes: 26 },
    4: { miles: 0.2, calories: 20, minutes: 5 },
    5: { miles: 0.2, calories: 33, minutes: 4 },
    6: { miles: 0, calories: 0, minutes: 0 },
    7: { miles: 0.1, calories: 10, minutes: 3 },
    8: { miles: 0.9, calories: 79, minutes: 19 },
    9: { miles: 0.3, calories: 24, minutes: 6 },
    10: { miles: 0.2, calories: 20, minutes: 5 },
    11: { miles: 0.3, calories: 21, minutes: 5 },
    12: { miles: 0.4, calories: 30, minutes: 7 },
    13: { miles: 0.2, calories: 15, minutes: 4 },
    14: { miles: 0.2, calories: 14, minutes: 3 },
    15: { miles: 0.6, calories: 48, minutes: 12 },
    16: { miles: 0.2, calories: 20, minutes: 5 },
    17: { miles: 0.2, calories: 14, minutes: 3 },
    18: { miles: 0.3, calories: 24, minutes: 6 },
    19: { miles: 0.4, calories: 36, minutes: 9 },
    20: { miles: 0.4, calories: 34, minutes: 8 },
    21: { miles: 0.4, calories: 38, minutes: 9 },
    22: { miles: 0.5, calories: 42, minutes: 10 },
    23: { miles: 0.5, calories: 44, minutes: 11 },
    24: { miles: 0.2, calories: 18, minutes: 4 },
    25: { miles: 0.1, calories: 12, minutes: 3 },
    26: { miles: 0.3, calories: 23, minutes: 6 },
    27: { miles: 0.2, calories: 17, minutes: 4 },
    28: { miles: 0.4, calories: 38, minutes: 9 },
    29: { miles: 0.1, calories: 10, minutes: 3 },
    30: { miles: 0.3, calories: 23, minutes: 6 },
    31: { miles: 0.0, calories: 3, minutes: 1 },
    32: { miles: 0.3, calories: 25, minutes: 6 },
  },
  7: {
    1: { miles: 0.3, calories: 22, minutes: 6},
    2: { miles: 0.7, calories: 57, minutes: 14 },
    3: { miles: 1.1, calories: 92, minutes: 22 },
    4: {  miles: 0.4, calories: 33, minutes: 8 },
    5: { miles: 0.2, calories: 34, minutes: 4 },
    6: {  miles: 0.2, calories: 10, minutes: 3 },
    7: { miles: 0, calories: 0, minutes: 0 },
    8: { miles: 0.2, calories: 62, minutes: 4 },
    9: { miles: 0.2, calories: 37, minutes: 4 },
    10: { miles: 0.2, calories: 28, minutes: 4 },
    11: { miles: 0.2, calories: 30, minutes: 4 },
    12: { miles: 0.2, calories: 30, minutes: 4 },
    13: { miles: 0.2, calories: 12, minutes: 4 },
    14: { miles: 0.2, calories: 24, minutes: 4 },
    15: { miles: 0.2, calories: 33, minutes: 4 },
    16: { miles: 0.2, calories: 38, minutes: 4 },
    17: { miles: 0.2, calories: 23, minutes: 4 },
    18: { miles: 0.2, calories: 13, minutes: 4 },
    19: { miles: 0.2, calories: 30, minutes: 4 },
    20: { miles: 0.2, calories: 42, minutes: 4 },
    21: { miles: 0.2, calories: 47, minutes: 4 },
    22: { miles: 0.2, calories: 31, minutes: 4 },
    23: { miles: 0.2, calories: 43, minutes: 4 },
    24: { miles: 0.2, calories: 27, minutes: 4 },
    25: { miles: 0.2, calories: 25, minutes: 4 },
    26: { miles: 0.2, calories: 28, minutes: 4 },
    27: { miles: 0.2, calories: 7, minutes: 4 },
    28: { miles: 0.2, calories: 46, minutes: 4 },
    29: { miles: 0.2, calories: 18, minutes: 4 },
    30: { miles: 0.2, calories: 36, minutes: 4 },
    31: { miles: 0.2, calories: 18, minutes: 4 },
    32: { miles: 0.2, calories: 42, minutes: 4 },
  },
  8: {
    1: { miles: 1.0, calories: 86, minutes: 21 },
    2: { miles: 1.4, calories: 121, minutes: 30 },
    3: { miles: 0.3, calories: 25, minutes: 6 },
    4: {miles: 1.1, calories: 91, minutes: 22  },
    5: { miles: 0.2, calories: 58, minutes: 4 },
    6: { miles: 0.2, calories: 79, minutes: 4 },
    7: { miles: 0.2, calories: 62, minutes: 4 },
    8: { miles: 0, calories: 0, minutes: 0 },
    9: { miles: 0.2, calories: 101, minutes: 4 },
    10: { miles: 0.2, calories: 98, minutes: 4 },
    11: { miles: 0.2, calories: 104, minutes: 4 },
    12: { miles: 0.2, calories: 96, minutes: 4 },
    13: { miles: 0.2, calories: 73, minutes: 4 },
    14: { miles: 0.2, calories: 92, minutes: 4 },
    15: { miles: 0.2, calories: 31, minutes: 4 },
    16: { miles: 0.2, calories: 109, minutes: 4 },
    17: { miles: 0.2, calories: 92, minutes: 4 },
    18: { miles: 0.2, calories: 71, minutes: 4 },
    19: { miles: 0.2, calories: 85, minutes: 4 },
    20: { miles: 0.2, calories: 111, minutes: 4 },
    21: { miles: 0.2, calories: 116, minutes: 4 },
    22: { miles: 0.2, calories: 90, minutes: 4 },
    23: { miles: 0.2, calories: 76, minutes: 4 },
    24: { miles: 0.2, calories: 92, minutes: 4 },
    25: { miles: 0.2, calories: 92, minutes: 4 },
    26: { miles: 0.2, calories: 93, minutes: 4 },
    27: { miles: 0.2, calories: 59, minutes: 4 },
    28: { miles: 0.2, calories: 28, minutes: 4 },
    29: { miles: 0.2, calories: 65, minutes: 4 },
    30: { miles: 0.2, calories: 87, minutes: 4 },
    31: { miles: 0.2, calories: 80, minutes: 4 },
    32: { miles: 0.2, calories: 76, minutes: 4 },
  },
  9: {
    1: { miles: 0.5, calories: 44, minutes: 11},
    2: { miles: 0.6, calories: 52, minutes: 13 },
    3: { miles: 1.3, calories: 110, minutes: 27 },
    4: { miles: 0.3, calories: 27, minutes: 7 },
    5: { miles: 0.2, calories: 30, minutes: 4 },
    6: { miles: 0.2, calories: 24, minutes: 4 },
    7: { miles: 0.2, calories: 37, minutes: 4 },
    8: { miles: 0.2, calories: 101, minutes: 4 },
    9: { miles: 0, calories: 0, minutes: 0 },
    10: { miles: 0.2, calories: 27, minutes: 4 },
    11: { miles: 0.2, calories: 33, minutes: 4 },
    12: { miles: 0.2, calories: 32, minutes: 4 },
    13: { miles: 0.2, calories: 45, minutes: 4 },
    14: { miles: 0.2, calories: 0, minutes: 4 },
    15: { miles: 0.2, calories: 52, minutes: 4 },
    16: { miles: 0.2, calories: 24, minutes: 4 },
    17: { miles: 0.2, calories: 16, minutes: 4 },
    18: { miles: 0.2, calories: 51, minutes: 4 },
    19: { miles: 0.2, calories: 68, minutes: 4 },
    20: { miles: 0.2, calories: 45, minutes: 4 },
    21: { miles: 0.2, calories: 54, minutes: 4 },
    22: { miles: 0.2, calories: 57, minutes: 4 },
    23: { miles: 0.2, calories: 14, minutes: 4 },
    24: { miles: 0.2, calories: 42, minutes: 4 },
    25: { miles: 0.2, calories: 17, minutes: 4 },
    26: { miles: 0.2, calories: 45, minutes: 4 },
    27: { miles: 0.2, calories: 42, minutes: 4 },
    28: { miles: 0.2, calories: 49, minutes: 4 },
    29: { miles: 0.2, calories: 25, minutes: 4 },
    30: { miles: 0.2, calories: 9, minutes: 4 },
    31: { miles: 0.2, calories: 21, minutes: 4 },
    32: { miles: 0.2, calories: 17, minutes: 4 },
  },
  10: {
    1: {miles: 0.3, calories: 26, minutes: 6 },
    2: { miles: 0.2, calories: 14, minutes: 3 },
    3: { miles: 1.4, calories: 121, minutes: 30 },
    4: {  miles: 0.0, calories: 2, minutes: 0 },
    5: { miles: 0.2, calories: 41, minutes: 4 },
    6: { miles: 0.2, calories: 20, minutes: 4 },
    7: { miles: 0.2, calories: 28, minutes: 4 },
    8: { miles: 0.2, calories: 98, minutes: 4 },
    9: { miles: 0.2, calories: 27, minutes: 4 },
    10: { miles: 0, calories: 0, minutes: 0 },
    11: { miles: 0.2, calories: 8, minutes: 4 },
    12: { miles: 0.2, calories: 18, minutes: 4 },
    13: { miles: 0.2, calories: 23, minutes: 4 },
    14: { miles: 0.2, calories: 4, minutes: 4 },
    15: { miles: 0.2, calories: 68, minutes: 4 },
    16: { miles: 0.2, calories: 4, minutes: 4 },
    17: { miles: 0.2, calories: 13, minutes: 4 },
    18: { miles: 0.2, calories: 42, minutes: 4 },
    19: { miles: 0.2, calories: 59, minutes: 4 },
    20: { miles: 0.2, calories: 20, minutes: 4 },
    21: { miles: 0.2, calories: 28, minutes: 4 },
    22: { miles: 0.2, calories: 36, minutes: 4 },
    23: { miles: 0.2, calories: 39, minutes: 4 },
    24: { miles: 0.2, calories: 20, minutes: 4 },
    25: { miles: 0.2, calories: 15, minutes: 4 },
    26: { miles: 0.2, calories: 20, minutes: 4 },
    27: { miles: 0.2, calories: 35, minutes: 4 },
    28: { miles: 0.2, calories: 56, minutes: 4 },
    29: { miles: 0.2, calories: 30, minutes: 4 },
    30: { miles: 0.2, calories: 19, minutes: 4 },
    31: { miles: 0.2, calories: 16, minutes: 4 },
    32: { miles: 0.2, calories: 34, minutes: 4 },
  },
  11: {
    1: { miles: 0.3, calories: 21, minutes: 5},
    2: { miles: 0.1, calories: 5, minutes: 1  },
    3: { miles: 1.5, calories: 127, minutes: 31 },
    4: { miles: 0.1, calories: 6, minutes: 1 },
    5: { miles: 0.2, calories: 51, minutes: 4 },
    6: { miles: 0.2, calories: 21, minutes: 4 },
    7: { miles: 0.2, calories: 30, minutes: 4 },
    8: { miles: 0.2, calories: 104, minutes: 4 },
    9: { miles: 0.2, calories: 33, minutes: 4 },
    10: { miles: 0.2, calories: 8, minutes: 4 },
    11: { miles: 0, calories: 0, minutes: 0 },
    12: { miles: 0.2, calories: 11, minutes: 4 },
    13: { miles: 0.2, calories: 22, minutes: 4 },
    14: { miles: 0.2, calories: 11, minutes: 4 },
    15: { miles: 0.2, calories: 66, minutes: 4 },
    16: { miles: 0.2, calories: 14, minutes: 4 },
    17: { miles: 0.2, calories: 17, minutes: 4 },
    18: { miles: 0.2, calories: 38, minutes: 4 },
    19: { miles: 0.2, calories: 53, minutes: 4 },
    20: { miles: 0.2, calories: 14, minutes: 4 },
    21: { miles: 0.2, calories: 18, minutes: 4 },
    22: { miles: 0.2, calories: 23, minutes: 4 },
    23: { miles: 0.2, calories: 53, minutes: 4 },
    24: { miles: 0.2, calories: 10, minutes: 4 },
    25: { miles: 0.2, calories: 21, minutes: 4 },
    26: { miles: 0.2, calories: 12, minutes: 4 },
    27: { miles: 0.2, calories: 36, minutes: 4 },
    28: { miles: 0.2, calories: 72, minutes: 4 },
    29: { miles: 0.2, calories: 31, minutes: 4 },
    30: { miles: 0.2, calories: 33, minutes: 4 },
    31: { miles: 0.2, calories: 18, minutes: 4 },
    32: { miles: 0.2, calories: 42, minutes: 4 },
  },
  12: {
    1: { miles: 0.2, calories: 19, minutes: 5 },
    2: { miles: 0.1, calories: 5, minutes: 1 },
    3: { miles: 1.6, calories: 137, minutes: 33 },
    4: { miles: 0.2, calories: 19, minutes: 5 },
    5: { miles: 0.2, calories: 54, minutes: 4 },
    6: { miles: 0.2, calories: 30, minutes: 4 },
    7: { miles: 0.2, calories: 30, minutes: 4 },
    8: { miles: 0.2, calories: 96, minutes: 4 },
    9: { miles: 0.2, calories: 32, minutes: 4 },
    10: { miles: 0.2, calories: 18, minutes: 4 },
    11: { miles: 0.2, calories: 11, minutes: 4 },
    12: { miles: 0, calories: 0, minutes: 0 },
    13: { miles: 0.2, calories: 26, minutes: 4 },
    14: { miles: 0.2, calories: 16, minutes: 4 },
    15: { miles: 0.2, calories: 72, minutes: 4 },
    16: { miles: 0.2, calories: 23, minutes: 4 },
    17: { miles: 0.2, calories: 26, minutes: 4 },
    18: { miles: 0.2, calories: 44, minutes: 4 },
    19: { miles: 0.2, calories: 60, minutes: 4 },
    20: { miles: 0.2, calories: 2, minutes: 4 },
    21: { miles: 0.2, calories: 16, minutes: 4 },
    22: { miles: 0.2, calories: 17, minutes: 4 },
    23: { miles: 0.2, calories: 58, minutes: 4 },
    24: { miles: 0.2, calories: 11, minutes: 4 },
    25: { miles: 0.2, calories: 29, minutes: 4 },
    26: { miles: 0.2, calories: 10, minutes: 4 },
    27: { miles: 0.2, calories: 43, minutes: 4 },
    28: { miles: 0.2, calories: 79, minutes: 4 },
    29: { miles: 0.2, calories: 41, minutes: 4 },
    30: { miles: 0.2, calories: 42, minutes: 4 },
    31: { miles: 0.2, calories: 28, minutes: 4 },
    32: { miles: 0.2, calories: 50, minutes: 4 },
  },
  13: {
    1: { miles: 0.1, calories: 8, minutes: 2},
    2: { miles: 0.4, calories: 32, minutes: 8 },
    3: { miles: 1.2, calories: 99, minutes: 24 },
    4: {  miles: 0.3, calories: 24, minutes: 6 },
    5: { miles: 0.2, calories: 46, minutes: 4 },
    6: { miles: 0.2, calories: 15, minutes: 4 },
    7: { miles: 0.2, calories: 12, minutes: 4 },
    8: { miles: 0.2, calories: 73, minutes: 4 },
    9: { miles: 0.2, calories: 45, minutes: 4 },
    10: { miles: 0.2, calories: 23, minutes: 4 },
    11: { miles: 0.2, calories: 22, minutes: 4 },
    12: { miles: 0.2, calories: 26, minutes: 4 },
    13: { miles: 0, calories: 0, minutes: 0 },
    14: { miles: 0.2, calories: 21, minutes: 4 },
    15: { miles: 0.2, calories: 38, minutes: 4 },
    16: { miles: 0.2, calories: 36, minutes: 4 },
    17: { miles: 0.2, calories: 31, minutes: 4 },
    18: { miles: 0.2, calories: 12, minutes: 4 },
    19: { miles: 0.2, calories: 28, minutes: 4 },
    20: { miles: 0.2, calories: 42, minutes: 4 },
    21: { miles: 0.2, calories: 47, minutes: 4 },
    22: { miles: 0.2, calories: 20, minutes: 4 },
    23: { miles: 0.2, calories: 47, minutes: 4 },
    24: { miles: 0.2, calories: 16, minutes: 4 },
    25: { miles: 0.2, calories: 31, minutes: 4 },
    26: { miles: 0.2, calories: 25, minutes: 4 },
    27: { miles: 0.2, calories: 26, minutes: 4 },
    28: { miles: 0.2, calories: 47, minutes: 4 },
    29: { miles: 0.2, calories: 31, minutes: 4 },
    30: { miles: 0.2, calories: 42, minutes: 4 },
    31: { miles: 0.2, calories: 22, minutes: 4 },
    32: { miles: 0.2, calories: 41, minutes: 4 },
  },
  14: {
    1: { miles: 0.2, calories: 17, minutes: 4  },
    2: { miles: 0.2, calories: 13, minutes: 3},
    3: { miles: 0.2, calories: 13, minutes: 3 },
    4: { miles: 0.1, calories: 5, minutes: 1 },
    5: { miles: 0.2, calories: 41, minutes: 4 },
    6: { miles: 0.2, calories: 14, minutes: 4 },
    7: { miles: 0.2, calories: 24, minutes: 4 },
    8: { miles: 0.2, calories: 92, minutes: 4 },
    9: { miles: 0.2, calories: 0, minutes: 4 },
    10: { miles: 0.2, calories: 14, minutes: 4 },
    11: { miles: 0.2, calories: 11, minutes: 4 },
    12: { miles: 0.2, calories: 16, minutes: 4 },
    13: { miles: 0.2, calories: 21, minutes: 4 },
    14: { miles: 0, calories: 0, minutes: 0 },
    15: { miles: 0.2, calories: 67, minutes: 4 },
    16: { miles: 0.2, calories: 13, minutes: 4 },
    17: { miles: 0.2, calories: 11, minutes: 4 },
    18: { miles: 0.2, calories: 38, minutes: 4 },
    19: { miles: 0.2, calories: 48, minutes: 4 },
    20: { miles: 0.2, calories: 20, minutes: 4 },
    21: { miles: 0.2, calories: 27, minutes: 4 },
    22: { miles: 0.2, calories: 29, minutes: 4 },
    23: { miles: 0.2, calories: 44, minutes: 4 },
    24: { miles: 0.2, calories: 14, minutes: 4 },
    25: { miles: 0.2, calories: 7, minutes: 4 },
    26: { miles: 0.2, calories: 14, minutes: 4 },
    27: { miles: 0.2, calories: 33, minutes: 4 },
    28: { miles: 0.2, calories: 56, minutes: 4 },
    29: { miles: 0.2, calories: 28, minutes: 4 },
    30: { miles: 0.2, calories: 24, minutes: 4 },
    31: { miles: 0.2, calories: 14, minutes: 4 },
    32: { miles: 0.2, calories: 33, minutes: 4 },
  },
  15: {
    1: { miles: 0.6, calories: 53, minutes: 13  },
    2: { miles: 0.9, calories: 73, minutes: 18 },
    3: { miles: 0.6, calories: 51, minutes: 12 },
    4: { miles: 0.8, calories: 64, minutes: 16 },
    5: { miles: 0.2, calories: 25, minutes: 4 },
    6: { miles: 0.2, calories: 48, minutes: 4 },
    7: { miles: 0.2, calories: 33, minutes: 4 },
    8: { miles: 0.2, calories: 31, minutes: 4 },
    9: { miles: 0.2, calories: 52, minutes: 4 },
    10: { miles: 0.2, calories: 68, minutes: 4 },
    11: { miles: 0.2, calories: 66, minutes: 4 },
    12: { miles: 0.2, calories: 72, minutes: 4 },
    13: { miles: 0.2, calories: 38, minutes: 4 },
    14: { miles: 0.2, calories: 67, minutes: 4 },
    15: { miles: 0, calories: 0, minutes: 0 },
    16: { miles: 0.2, calories: 73, minutes: 4 },
    17: { miles: 0.2, calories: 69, minutes: 4 },
    18: { miles: 0.2, calories: 38, minutes: 4 },
    19: { miles: 0.2, calories: 55, minutes: 4 },
    20: { miles: 0.2, calories: 81, minutes: 4 },
    21: { miles: 0.2, calories: 83, minutes: 4 },
    22: { miles: 0.2, calories: 58, minutes: 4 },
    23: { miles: 0.2, calories: 30, minutes: 4 },
    24: { miles: 0.2, calories: 57, minutes: 4 },
    25: { miles: 0.2, calories: 49, minutes: 4 },
    26: { miles: 0.2, calories: 65, minutes: 4 },
    27: { miles: 0.2, calories: 24, minutes: 4 },
    28: { miles: 0.2, calories: 7, minutes: 4 },
    29: { miles: 0.2, calories: 29, minutes: 4 },
    30: { miles: 0.2, calories: 56, minutes: 4 },
    31: { miles: 0.2, calories: 42, minutes: 4 },
    32: { miles: 0.2, calories: 32, minutes: 4 },
  },
  16: {
    1: { miles: 0.4, calories: 31, minutes: 8 },
    2: { miles: 0.2, calories: 20, minutes: 5 },
    3: {  miles: 0.1, calories: 13, minutes: 3 },
    4: { miles: 0.1, calories: 4, minutes: 1 },
    5: { miles: 0.2, calories: 41, minutes: 4 },
    6: { miles: 0.2, calories: 20, minutes: 4 },
    7: { miles: 0.2, calories: 38, minutes: 4 },
    8: { miles: 0.2, calories: 109, minutes: 4 },
    9: { miles: 0.2, calories: 24, minutes: 4 },
    10: { miles: 0.2, calories: 4, minutes: 4 },
    11: { miles: 0.2, calories: 14, minutes: 4 },
    12: { miles: 0.2, calories: 23, minutes: 4 },
    13: { miles: 0.2, calories: 36, minutes: 4 },
    14: { miles: 0.2, calories: 13, minutes: 4 },
    15: { miles: 0.2, calories: 73, minutes: 4 },
    16: {miles: 0, calories: 0, minutes: 0 },
    17: { miles: 0.2, calories: 11, minutes: 4 },
    18: { miles: 0.2, calories: 48, minutes: 4 },
    19: { miles: 0.2, calories: 72, minutes: 4 },
    20: { miles: 0.2, calories: 25, minutes: 4 },
    21: { miles: 0.2, calories: 31, minutes: 4 },
    22: { miles: 0.2, calories: 34, minutes: 4 },
    23: { miles: 0.2, calories: 42, minutes: 4 },
    24: { miles: 0.2, calories: 20, minutes: 4 },
    25: { miles: 0.2, calories: 15, minutes: 4 },
    26: { miles: 0.2, calories: 30, minutes: 4 },
    27: { miles: 0.2, calories: 53, minutes: 4 },
    28: { miles: 0.2, calories: 96, minutes: 4 },
    29: { miles: 0.2, calories: 44, minutes: 4 },
    30: { miles: 0.2, calories: 15, minutes: 4 },
    31: { miles: 0.2, calories: 18, minutes: 4 },
    32: { miles: 0.2, calories: 35, minutes: 4 },
  },
  17: {
    1: { miles: 0.4, calories: 35, minutes: 9 },
    2: { miles: 0.3, calories: 23, minutes: 6 },
    3: { miles: 1.3, calories: 111, minutes: 27 },
    4: { miles: 0.1, calories: 12, minutes: 3  },
    5: { miles: 0.2, calories: 31, minutes: 4 },
    6: { miles: 0.2, calories: 14, minutes: 4 },
    7: { miles: 0.2, calories: 23, minutes: 4 },
    8: { miles: 0.2, calories: 92, minutes: 4 },
    9: { miles: 0.2, calories: 16, minutes: 4 },
    10: { miles: 0.2, calories: 13, minutes: 4 },
    11: { miles: 0.2, calories: 17, minutes: 4 },
    12: { miles: 0.2, calories: 26, minutes: 4 },
    13: { miles: 0.2, calories: 31, minutes: 4 },
    14: { miles: 0.2, calories: 11, minutes: 4 },
    15: { miles: 0.2, calories: 69, minutes: 4 },
    16: { miles: 0.2, calories: 11, minutes: 4 },
    17: { miles: 0, calories: 0, minutes: 0 },
    18: { miles: 0.2, calories: 35, minutes: 4 },
    19: { miles: 0.2, calories: 51, minutes: 4 },
    20: { miles: 0.2, calories: 33, minutes: 4 },
    21: { miles: 0.2, calories: 32, minutes: 4 },
    22: { miles: 0.2, calories: 53, minutes: 4 },
    23: { miles: 0.2, calories: 31, minutes: 4 },
    24: { miles: 0.2, calories: 26, minutes: 4 },
    25: { miles: 0.2, calories: 5, minutes: 4 },
    26: { miles: 0.2, calories: 28, minutes: 4 },
    27: { miles: 0.2, calories: 32, minutes: 4 },
    28: { miles: 0.2, calories: 66, minutes: 4 },
    29: { miles: 0.2, calories: 20, minutes: 4 },
    30: { miles: 0.2, calories: 13, minutes: 4 },
    31: { miles: 0.2, calories: 7, minutes: 4 },
    32: { miles: 0.2, calories: 22, minutes: 4 },
  },
  18: {
    1: { miles: 0.3, calories: 25, minutes: 6 },
    2: {miles: 0.5, calories: 43, minutes: 11  },
    3: { miles: 1.2, calories: 100, minutes: 24 },
    4: { miles: 0.5, calories: 42, minutes: 10 },
    5: { miles: 0.2, calories: 49, minutes: 4 },
    6: { miles: 0.2, calories: 24, minutes: 4 },
    7: { miles: 0.2, calories: 13, minutes: 4 },
    8: { miles: 0.2, calories: 71, minutes: 4 },
    9: { miles: 0.2, calories: 51, minutes: 4 },
    10: { miles: 0.2, calories: 42, minutes: 4 },
    11: { miles: 0.2, calories: 38, minutes: 4 },
    12: { miles: 0.2, calories: 44, minutes: 4 },
    13: { miles: 0.2, calories: 12, minutes: 4 },
    14: { miles: 0.2, calories: 38, minutes: 4 },
    15: { miles: 0.2, calories: 38, minutes: 4 },
    16: { miles: 0.2, calories: 48, minutes: 4 },
    17: { miles: 0.2, calories: 35, minutes: 4 },
    18: { miles: 0, calories: 0, minutes: 0 },
    19: { miles: 0.2, calories: 14, minutes: 4 },
    20: { miles: 0.2, calories: 41, minutes: 4 },
    21: { miles: 0.2, calories: 53, minutes: 4 },
    22: { miles: 0.2, calories: 31, minutes: 4 },
    23: { miles: 0.2, calories: 58, minutes: 4 },
    24: { miles: 0.2, calories: 41, minutes: 4 },
    25: { miles: 0.2, calories: 37, minutes: 4 },
    26: { miles: 0.2, calories: 31, minutes: 4 },
    27: { miles: 0.2, calories: 16, minutes: 4 },
    28: { miles: 0.2, calories: 51, minutes: 4 },
    29: { miles: 0.2, calories: 33, minutes: 4 },
    30: { miles: 0.2, calories: 63, minutes: 4 },
    31: { miles: 0.2, calories: 28, minutes: 4 },
    32: { miles: 0.2, calories: 44, minutes: 4 },
  },
  19: {
    1: { miles: 0.5, calories: 38, minutes: 9  },
    2: {miles: 0.7, calories: 59, minutes: 14 },
    3: { miles: 1.4, calories: 115, minutes: 28 },
    4: { miles: 0.7, calories: 58, minutes: 14 },
    5: { miles: 0.2, calories: 64, minutes: 4 },
    6: { miles: 0.2, calories: 36, minutes: 4 },
    7: { miles: 0.2, calories: 30, minutes: 4 },
    8: { miles: 0.2, calories: 85, minutes: 4 },
    9: { miles: 0.2, calories: 68, minutes: 4 },
    10: { miles: 0.2, calories: 59, minutes: 4 },
    11: { miles: 0.2, calories: 53, minutes: 4 },
    12: { miles: 0.2, calories: 60, minutes: 4 },
    13: { miles: 0.2, calories: 28, minutes: 4 },
    14: { miles: 0.2, calories: 48, minutes: 4 },
    15: { miles: 0.2, calories: 55, minutes: 4 },
    16: { miles: 0.2, calories: 72, minutes: 4 },
    17: { miles: 0.2, calories: 51, minutes: 4 },
    18: { miles: 0.2, calories: 14, minutes: 4 },
    19: { miles: 0, calories: 0, minutes: 0 },
    20: { miles: 0.2, calories: 68, minutes: 4 },
    21: { miles: 0.2, calories: 67, minutes: 4 },
    22: { miles: 0.2, calories: 25, minutes: 4 },
    23: { miles: 0.2, calories: 41, minutes: 4 },
    24: { miles: 0.2, calories: 40, minutes: 4 },
    25: { miles: 0.2, calories: 49, minutes: 4 },
    26: { miles: 0.2, calories: 46, minutes: 4 },
    27: { miles: 0.2, calories: 25, minutes: 4 },
    28: { miles: 0.2, calories: 54, minutes: 4 },
    29: { miles: 0.2, calories: 39, minutes: 4 },
    30: { miles: 0.2, calories: 64, minutes: 4 },
    31: { miles: 0.2, calories: 47, minutes: 4 },
    32: { miles: 0.2, calories: 51, minutes: 4 },
  },
  20: {
    1: { miles: 0.3, calories: 24, minutes: 6 },
    2: {  miles: 0.1, calories: 8, minutes: 2 },
    3: { miles: 1.7, calories: 141, minutes: 35 },
    4: { miles: 0.3, calories: 23, minutes: 6 },
    5: { miles: 0.2, calories: 56, minutes: 4 },
    6: { miles: 0.2, calories: 34, minutes: 4 },
    7: { miles: 0.2, calories: 42, minutes: 4 },
    8: { miles: 0.2, calories: 111, minutes: 4 },
    9: { miles: 0.2, calories: 45, minutes: 4 },
    10: { miles: 0.2, calories: 20, minutes: 4 },
    11: { miles: 0.2, calories: 14, minutes: 4 },
    12: { miles: 0.2, calories: 2, minutes: 4 },
    13: { miles: 0.2, calories: 42, minutes: 4 },
    14: { miles: 0.2, calories: 20, minutes: 4 },
    15: { miles: 0.2, calories: 81, minutes: 4 },
    16: { miles: 0.2, calories: 25, minutes: 4 },
    17: { miles: 0.2, calories: 33, minutes: 4 },
    18: { miles: 0.2, calories: 51, minutes: 4 },
    19: { miles: 0.2, calories: 68, minutes: 4 },
    20: { miles: 0, calories: 0, minutes: 0 },
    21: { miles: 0.2, calories: 2, minutes: 4 },
    22: { miles: 0.2, calories: 24, minutes: 4 },
    23: { miles: 0.2, calories: 56, minutes: 4 },
    24: { miles: 0.2, calories: 16, minutes: 4 },
    25: { miles: 0.2, calories: 31, minutes: 4 },
    26: { miles: 0.2, calories: 11, minutes: 4 },
    27: { miles: 0.2, calories: 47, minutes: 4 },
    28: { miles: 0.2, calories: 84, minutes: 4 },
    29: { miles: 0.2, calories: 42, minutes: 4 },
    30: { miles: 0.2, calories: 36, minutes: 4 },
    31: { miles: 0.2, calories: 29, minutes: 4 },
    32: { miles: 0.2, calories: 50, minutes: 4 },
  },
  21: {
    1: {  miles: 0.3, calories: 27, minutes: 7 },
    2: {  miles: 0.2, calories: 15, minutes: 4 },
    3: { miles: 1.7, calories: 144, minutes: 35 },
    4: { miles: 0.4, calories: 31, minutes: 8},
    5: { miles: 0.2, calories: 73, minutes: 4 },
    6: { miles: 0.2, calories: 38, minutes: 4 },
    7: { miles: 0.2, calories: 47, minutes: 4 },
    8: { miles: 0.2, calories: 116, minutes: 4 },
    9: { miles: 0.2, calories: 54, minutes: 4 },
    10: { miles: 0.2, calories: 28, minutes: 4 },
    11: { miles: 0.2, calories: 18, minutes: 4 },
    12: { miles: 0.2, calories: 6, minutes: 4 },
    13: { miles: 0.2, calories: 47, minutes: 4 },
    14: { miles: 0.2, calories: 27, minutes: 4 },
    15: { miles: 0.2, calories: 83, minutes: 4 },
    16: { miles: 0.2, calories: 31, minutes: 4 },
    17: { miles: 0.2, calories: 32, minutes: 4 },
    18: { miles: 0.2, calories: 53, minutes: 4 },
    19: { miles: 0.2, calories: 67, minutes: 4 },
    20: { miles: 0.2, calories: 2, minutes: 4 },
    21: { miles: 0, calories: 0, minutes: 0 },
    22: { miles: 0.2, calories: 16, minutes: 4 },
    23: { miles: 0.2, calories: 59, minutes: 4 },
    24: { miles: 0.2, calories: 18, minutes: 4 },
    25: { miles: 0.2, calories: 41, minutes: 4 },
    26: { miles: 0.2, calories: 14, minutes: 4 },
    27: { miles: 0.2, calories: 49, minutes: 4 },
    28: { miles: 0.2, calories: 89, minutes: 4 },
    29: { miles: 0.2, calories: 47, minutes: 4 },
    30: { miles: 0.2, calories: 44, minutes: 4 },
    31: { miles: 0.2, calories: 38, minutes: 4 },
    32: { miles: 0.2, calories: 53, minutes: 4 },
  },
  22: {
    1: { miles: 0.2, calories: 15, minutes: 4},
    2: { miles: 0.2, calories: 13, minutes: 4 },
    3: { miles: 1.5, calories: 126, minutes: 31 },
    4: { miles: 0.4, calories: 37, minutes: 9 },
    5: { miles: 0.2, calories: 62, minutes: 4 },
    6: { miles: 0.2, calories: 42, minutes: 4 },
    7: { miles: 0.2, calories: 31, minutes: 4 },
    8: { miles: 0.2, calories: 90, minutes: 4 },
    9: { miles: 0.2, calories: 57, minutes: 4 },
    10: { miles: 0.2, calories: 36, minutes: 4 },
    11: { miles: 0.2, calories: 23, minutes: 4 },
    12: { miles: 0.2, calories: 17, minutes: 4 },
    13: { miles: 0.2, calories: 20, minutes: 4 },
    14: { miles: 0.2, calories: 29, minutes: 4 },
    15: { miles: 0.2, calories: 58, minutes: 4 },
    16: { miles: 0.2, calories: 34, minutes: 4 },
    17: { miles: 0.2, calories: 53, minutes: 4 },
    18: { miles: 0.2, calories: 31, minutes: 4 },
    19: { miles: 0.2, calories: 25, minutes: 4 },
    20: { miles: 0.2, calories: 24, minutes: 4 },
    21: { miles: 0.2, calories: 16, minutes: 4 },
    22: { miles: 0, calories: 0, minutes: 0 },
    23: { miles: 0.2, calories: 67, minutes: 4 },
    24: { miles: 0.2, calories: 10, minutes: 4 },
    25: { miles: 0.2, calories: 36, minutes: 4 },
    26: { miles: 0.2, calories: 8, minutes: 4 },
    27: { miles: 0.2, calories: 35, minutes: 4 },
    28: { miles: 0.2, calories: 73, minutes: 4 },
    29: { miles: 0.2, calories: 44, minutes: 4 },
    30: { miles: 0.2, calories: 51, minutes: 4 },
    31: { miles: 0.2, calories: 33, minutes: 4 },
    32: { miles: 0.2, calories: 58, minutes: 4 },
  },
  23: {
    1: { miles: 0.7, calories: 59, minutes: 15 },
    2: { miles: 0.5, calories: 46, minutes: 11 },
    3: { miles: 1.3, calories: 106, minutes: 26 },
    4: { miles: 0.2, calories: 19, minutes: 5 },
    5: { miles: 0.2, calories: 17, minutes: 4 },
    6: { miles: 0.2, calories: 44, minutes: 4 },
    7: { miles: 0.2, calories: 43, minutes: 4 },
    8: { miles: 0.2, calories: 76, minutes: 4 },
    9: { miles: 0.2, calories: 14, minutes: 4 },
    10: { miles: 0.2, calories: 39, minutes: 4 },
    11: { miles: 0.2, calories: 53, minutes: 4 },
    12: { miles: 0.2, calories: 58, minutes: 4 },
    13: { miles: 0.2, calories: 47, minutes: 4 },
    14: { miles: 0.2, calories: 44, minutes: 4 },
    15: { miles: 0.2, calories: 30, minutes: 4 },
    16: { miles: 0.2, calories: 42, minutes: 4 },
    17: { miles: 0.2, calories: 31, minutes: 4 },
    18: { miles: 0.2, calories: 58, minutes: 4 },
    19: { miles: 0.2, calories: 41, minutes: 4 },
    20: { miles: 0.2, calories: 56, minutes: 4 },
    21: { miles: 0.2, calories: 59, minutes: 4 },
    22: { miles: 0.2, calories: 67, minutes: 4 },
    23: { miles: 0, calories: 0, minutes: 0 },
    24: { miles: 0.2, calories: 59, minutes: 4 },
    25: { miles: 0.2, calories: 37, minutes: 4 },
    26: { miles: 0.2, calories: 64, minutes: 4 },
    27: { miles: 0.2, calories: 47, minutes: 4 },
    28: { miles: 0.2, calories: 27, minutes: 4 },
    29: { miles: 0.2, calories: 30, minutes: 4 },
    30: { miles: 0.2, calories: 34, minutes: 4 },
    31: { miles: 0.2, calories: 33, minutes: 4 },
    32: { miles: 0.2, calories: 13, minutes: 4 },
  },
  24: {
    1: { miles: 0.1, calories: 10, minutes: 2 },
    2: { miles: 0.1, calories: 10, minutes: 2 },
    3: { miles: 1.4, calories: 119, minutes: 29 },
    4: { miles: 0.2, calories: 14, minutes: 4 },
    5: { miles: 0.2, calories: 58, minutes: 4 },
    6: { miles: 0.2, calories: 18, minutes: 4 },
    7: { miles: 0.2, calories: 27, minutes: 4 },
    8: { miles: 0.2, calories: 92, minutes: 4 },
    9: { miles: 0.2, calories: 42, minutes: 4 },
    10: { miles: 0.2, calories: 20, minutes: 4 },
    11: { miles: 0.2, calories: 10, minutes: 4 },
    12: { miles: 0.2, calories: 11, minutes: 4 },
    13: { miles: 0.2, calories: 16, minutes: 4 },
    14: { miles: 0.2, calories: 14, minutes: 4 },
    15: { miles: 0.2, calories: 57, minutes: 4 },
    16: { miles: 0.2, calories: 20, minutes: 4 },
    17: { miles: 0.2, calories: 26, minutes: 4 },
    18: { miles: 0.2, calories: 31, minutes: 4 },
    19: { miles: 0.2, calories: 40, minutes: 4 },
    20: { miles: 0.2, calories: 16, minutes: 4 },
    21: { miles: 0.2, calories: 18, minutes: 4 },
    22: { miles: 0.2, calories: 10, minutes: 4 },
    23: { miles: 0.2, calories: 59, minutes: 4 },
    24: { miles: 0, calories: 0, minutes: 0 },
    25: { miles: 0.2, calories: 22, minutes: 4 },
    26: { miles: 0.2, calories: 2, minutes: 4 },
    27: { miles: 0.2, calories: 32, minutes: 4 },
    28: { miles: 0.2, calories: 70, minutes: 4 },
    29: { miles: 0.2, calories: 38, minutes: 4 },
    30: { miles: 0.2, calories: 41, minutes: 4 },
    31: { miles: 0.2, calories: 22, minutes: 4 },
    32: { miles: 0.2, calories: 48, minutes: 4 },
  },
  25: {
    1: { miles: 0.4, calories: 31, minutes: 8 },
    2: { miles: 0.2, calories: 14, minutes: 4 },
    3: { miles: 1.2, calories: 100, minutes: 4 },
    4: { miles: 0.3, calories: 22, minutes: 5 },
    5: { miles: 0.2, calories: 60, minutes: 4 },
    6: { miles: 0.2, calories: 12, minutes: 4 },
    7: { miles: 0.2, calories: 25, minutes: 4 },
    8: { miles: 0.2, calories: 92, minutes: 4 },
    9: { miles: 0.2, calories: 17, minutes: 4 },
    10: { miles: 0.2, calories: 15, minutes: 4 },
    11: { miles: 0.2, calories: 21, minutes: 4 },
    12: { miles: 0.2, calories: 29, minutes: 4 },
    13: { miles: 0.2, calories: 31, minutes: 4 },
    14: { miles: 0.2, calories: 7, minutes: 4 },
    15: { miles: 0.2, calories: 49, minutes: 4 },
    16: { miles: 0.2, calories: 15, minutes: 4 },
    17: { miles: 0.2, calories: 5, minutes: 4 },
    18: { miles: 0.2, calories: 37, minutes: 4 },
    19: { miles: 0.2, calories: 49, minutes: 4 },
    20: { miles: 0.2, calories: 31, minutes: 4 },
    21: { miles: 0.2, calories: 41, minutes: 4 },
    22: { miles: 0.2, calories: 36, minutes: 4 },
    23: { miles: 0.2, calories: 37, minutes: 4 },
    24: { miles: 0.2, calories: 22, minutes: 4 },
    25: { miles: 0, calories: 0, minutes: 0 },
    26: { miles: 0.2, calories: 27, minutes: 4 },
    27: { miles: 0.2, calories: 19, minutes: 4 },
    28: { miles: 0.2, calories: 40, minutes: 4 },
    29: { miles: 0.2, calories: 18, minutes: 4 },
    30: { miles: 0.2, calories: 11, minutes: 4 },
    31: { miles: 0.2, calories: 3, minutes: 4 },
    32: { miles: 0.2, calories: 18, minutes: 4 },
  },
  26: {
    1: { miles: 0.1, calories: 11, minutes: 3 },
    2: {  miles: 0.1, calories: 10, minutes: 2 },
    3: { miles: 1.5, calories: 126, minutes: 2 },
    4: { miles: 0.2, calories: 18, minutes: 4 },
    5: { miles: 0.2, calories: 55, minutes: 4 },
    6: { miles: 0.2, calories: 25, minutes: 4 },
    7: { miles: 0.2, calories: 28, minutes: 4 },
    8: { miles: 0.2, calories: 93, minutes: 4 },
    9: { miles: 0.2, calories: 45, minutes: 4 },
    10: { miles: 0.2, calories: 20, minutes: 4 },
    11: { miles: 0.2, calories: 12, minutes: 4 },
    12: { miles: 0.2, calories: 10, minutes: 4 },
    13: { miles: 0.2, calories: 25, minutes: 4 },
    14: { miles: 0.2, calories: 14, minutes: 4 },
    15: { miles: 0.2, calories: 65, minutes: 4 },
    16: { miles: 0.2, calories: 30, minutes: 4 },
    17: { miles: 0.2, calories: 28, minutes: 4 },
    18: { miles: 0.2, calories: 31, minutes: 4 },
    19: { miles: 0.2, calories: 46, minutes: 4 },
    20: { miles: 0.2, calories: 11, minutes: 4 },
    21: { miles: 0.2, calories: 14, minutes: 4 },
    22: { miles: 0.2, calories: 8, minutes: 4 },
    23: { miles: 0.2, calories: 64, minutes: 4 },
    24: { miles: 0.2, calories: 2, minutes: 4 },
    25: { miles: 0.2, calories: 27, minutes: 4 },
    26: { miles: 0, calories: 0, minutes: 0 },
    27: { miles: 0.2, calories: 34, minutes: 4 },
    28: { miles: 0.2, calories: 73, minutes: 4 },
    29: { miles: 0.2, calories: 36, minutes: 4 },
    30: { miles: 0.2, calories: 38, minutes: 4 },
    31: { miles: 0.2, calories: 23, minutes: 4 },
    32: { miles: 0.2, calories: 47, minutes: 4 },
  },
  27: {
    1: { miles: 0.4, calories: 30, minutes: 7 },
    2: { miles: 0.5, calories: 38, minutes: 9 },
    3: { miles: 1.1, calories: 89, minutes: 9 },
    4: { miles: 0.5, calories: 38, minutes: 9 },
    5: { miles: 0.2, calories: 28, minutes: 4 },
    6: { miles: 0.2, calories: 17, minutes: 4 },
    7: { miles: 0.2, calories: 7, minutes: 4 },
    8: { miles: 0.2, calories: 59, minutes: 4 },
    9: { miles: 0.2, calories: 42, minutes: 4 },
    10: { miles: 0.2, calories: 35, minutes: 4 },
    11: { miles: 0.2, calories: 36, minutes: 4 },
    12: { miles: 0.2, calories: 43, minutes: 4 },
    13: { miles: 0.2, calories: 26, minutes: 4 },
    14: { miles: 0.2, calories: 33, minutes: 4 },
    15: { miles: 0.2, calories: 24, minutes: 4 },
    16: { miles: 0.2, calories: 53, minutes: 4 },
    17: { miles: 0.2, calories: 32, minutes: 4 },
    18: { miles: 0.2, calories: 16, minutes: 4 },
    19: { miles: 0.2, calories: 25, minutes: 4 },
    20: { miles: 0.2, calories: 47, minutes: 4 },
    21: { miles: 0.2, calories: 49, minutes: 4 },
    22: { miles: 0.2, calories: 35, minutes: 4 },
    23: { miles: 0.2, calories: 47, minutes: 4 },
    24: { miles: 0.2, calories: 32, minutes: 4 },
    25: { miles: 0.2, calories: 19, minutes: 4 },
    26: { miles: 0.2, calories: 34, minutes: 4 },
    27: { miles: 0, calories: 0, minutes: 0 },
    28: { miles: 0.2, calories: 37, minutes: 4 },
    29: { miles: 0.2, calories: 14, minutes: 4 },
    30: { miles: 0.2, calories: 40, minutes: 4 },
    31: { miles: 0.2, calories: 20, minutes: 4 },
    32: { miles: 0.2, calories: 25, minutes: 4 },
  },
  28: {
    1: { miles: 0.7, calories: 61, minutes: 15 },
    2: {  miles: 0.9, calories: 76, minutes: 19 },
    3: {miles: 0.7, calories: 55, minutes: 19  },
    4: { miles: 1.0, calories: 86, minutes: 21 },
    5: { miles: 0.2, calories: 28, minutes: 4 },
    6: { miles: 0.2, calories: 38, minutes: 4 },
    7: { miles: 0.2, calories: 46, minutes: 4 },
    8: { miles: 0.2, calories: 28, minutes: 4 },
    9: { miles: 0.2, calories: 49, minutes: 4 },
    10: { miles: 0.2, calories: 56, minutes: 4 },
    11: { miles: 0.2, calories: 72, minutes: 4 },
    12: { miles: 0.2, calories: 79, minutes: 4 },
    13: { miles: 0.2, calories: 47, minutes: 4 },
    14: { miles: 0.2, calories: 56, minutes: 4 },
    15: { miles: 0.2, calories: 7, minutes: 4 },
    16: { miles: 0.2, calories: 96, minutes: 4 },
    17: { miles: 0.2, calories: 66, minutes: 4 },
    18: { miles: 0.2, calories: 51, minutes: 4 },
    19: { miles: 0.2, calories: 54, minutes: 4 },
    20: { miles: 0.2, calories: 84, minutes: 4 },
    21: { miles: 0.2, calories: 89, minutes: 4 },
    22: { miles: 0.2, calories: 73, minutes: 4 },
    23: { miles: 0.2, calories: 27, minutes: 4 },
    24: { miles: 0.2, calories: 70, minutes: 4 },
    25: { miles: 0.2, calories: 40, minutes: 4 },
    26: { miles: 0.2, calories: 73, minutes: 4 },
    27: { miles: 0.2, calories: 37, minutes: 4 },
    28: { miles: 0, calories: 0, minutes: 0 },
    29: { miles: 0.2, calories: 51, minutes: 4 },
    30: { miles: 0.2, calories: 77, minutes: 4 },
    31: { miles: 0.2, calories: 52, minutes: 4 },
    32: { miles: 0.2, calories: 61, minutes: 4 },
  },
  29: {
    1: { miles: 0.4, calories: 36, minutes: 9 },
    2: { miles: 0.4, calories: 31, minutes: 7 },
    3: { miles: 1.2, calories: 103, minutes: 7 },
    4: { miles: 0.4, calories: 33, minutes: 8 },
    5: { miles: 0.2, calories: 20, minutes: 4 },
    6: { miles: 0.2, calories: 10, minutes: 4 },
    7: { miles: 0.2, calories: 18, minutes: 4 },
    8: { miles: 0.2, calories: 65, minutes: 4 },
    9: { miles: 0.2, calories: 25, minutes: 4 },
    10: { miles: 0.2, calories: 30, minutes: 4 },
    11: { miles: 0.2, calories: 31, minutes: 4 },
    12: { miles: 0.2, calories: 41, minutes: 4 },
    13: { miles: 0.2, calories: 31, minutes: 4 },
    14: { miles: 0.2, calories: 28, minutes: 4 },
    15: { miles: 0.2, calories: 29, minutes: 4 },
    16: { miles: 0.2, calories: 44, minutes: 4 },
    17: { miles: 0.2, calories: 20, minutes: 4 },
    18: { miles: 0.2, calories: 33, minutes: 4 },
    19: { miles: 0.2, calories: 39, minutes: 4 },
    20: { miles: 0.2, calories: 42, minutes: 4 },
    21: { miles: 0.2, calories: 47, minutes: 4 },
    22: { miles: 0.2, calories: 44, minutes: 4 },
    23: { miles: 0.2, calories: 30, minutes: 4 },
    24: { miles: 0.2, calories: 38, minutes: 4 },
    25: { miles: 0.2, calories: 18, minutes: 4 },
    26: { miles: 0.2, calories: 36, minutes: 4 },
    27: { miles: 0.2, calories: 14, minutes: 4 },
    28: { miles: 0.2, calories: 51, minutes: 4 },
    29: { miles: 0, calories: 0, minutes: 0 },
    30: { miles: 0.2, calories: 29, minutes: 4 },
    31: { miles: 0.2, calories: 8, minutes: 4 },
    32: { miles: 0.2, calories: 14, minutes: 4 },
  },
  30: {
    1: {  miles: 0.5, calories: 44, minutes: 11 },
    2: { miles: 0.3, calories: 28, minutes: 7 },
    3: {  miles: 1.6, calories: 133, minutes: 7},
    4: { miles: 0.2, calories: 21, minutes: 5 },
    5: { miles: 0.2, calories: 36, minutes: 4 },
    6: { miles: 0.2, calories: 23, minutes: 4 },
    7: { miles: 0.2, calories: 36, minutes: 4 },
    8: { miles: 0.2, calories: 87, minutes: 4 },
    9: { miles: 0.2, calories: 9, minutes: 4 },
    10: { miles: 0.2, calories: 19, minutes: 4 },
    11: { miles: 0.2, calories: 33, minutes: 4 },
    12: { miles: 0.2, calories: 42, minutes: 4 },
    13: { miles: 0.2, calories: 42, minutes: 4 },
    14: { miles: 0.2, calories: 24, minutes: 4 },
    15: { miles: 0.2, calories: 56, minutes: 4 },
    16: { miles: 0.2, calories: 15, minutes: 4 },
    17: { miles: 0.2, calories: 13, minutes: 4 },
    18: { miles: 0.2, calories: 63, minutes: 4 },
    19: { miles: 0.2, calories: 64, minutes: 4 },
    20: { miles: 0.2, calories: 36, minutes: 4 },
    21: { miles: 0.2, calories: 44, minutes: 4 },
    22: { miles: 0.2, calories: 51, minutes: 4 },
    23: { miles: 0.2, calories: 34, minutes: 4 },
    24: { miles: 0.2, calories: 41, minutes: 4 },
    25: { miles: 0.2, calories: 11, minutes: 4 },
    26: { miles: 0.2, calories: 38, minutes: 4 },
    27: { miles: 0.2, calories: 40, minutes: 4 },
    28: { miles: 0.2, calories: 77, minutes: 4 },
    29: { miles: 0.2, calories: 29, minutes: 4 },
    30: { miles: 0, calories: 0, minutes: 0 },
    31: { miles: 0.2, calories: 19, minutes: 4 },
    32: { miles: 0.2, calories: 30, minutes: 4 },
  },
  31: {
    1: { miles: 0.3, calories: 25, minutes: 6},
    2: { miles: 0.2, calories: 18, minutes: 4 },
    3: { miles: 1.3, calories: 109, minutes: 4},
    4: { miles: 0.2, calories: 18, minutes: 4 },
    5: { miles: 0.2, calories: 24, minutes: 4 },
    6: { miles: 0.2, calories: 3, minutes: 4 },
    7: { miles: 0.2, calories: 18, minutes: 4 },
    8: { miles: 0.2, calories: 80, minutes: 4 },
    9: { miles: 0.2, calories: 21, minutes: 4 },
    10: { miles: 0.2, calories: 16, minutes: 4 },
    11: { miles: 0.2, calories: 18, minutes: 4 },
    12: { miles: 0.2, calories: 28, minutes: 4 },
    13: { miles: 0.2, calories: 22, minutes: 4 },
    14: { miles: 0.2, calories: 14, minutes: 4 },
    15: { miles: 0.2, calories: 10, minutes: 4 },
    16: { miles: 0.2, calories: 18, minutes: 4 },
    17: { miles: 0.2, calories: 7, minutes: 4 },
    18: { miles: 0.2, calories: 28, minutes: 4 },
    19: { miles: 0.2, calories: 47, minutes: 4 },
    20: { miles: 0.2, calories: 29, minutes: 4 },
    21: { miles: 0.2, calories: 38, minutes: 4 },
    22: { miles: 0.2, calories: 33, minutes: 4 },
    23: { miles: 0.2, calories: 33, minutes: 4 },
    24: { miles: 0.2, calories: 22, minutes: 4 },
    25: { miles: 0.2, calories: 3, minutes: 4 },
    26: { miles: 0.2, calories: 23, minutes: 4 },
    27: { miles: 0.2, calories: 20, minutes: 4 },
    28: { miles: 0.2, calories: 52, minutes: 4 },
    29: { miles: 0.2, calories: 8, minutes: 4 },
    30: { miles: 0.2, calories: 19, minutes: 4 },
    31: { miles: 0, calories: 0, minutes: 0 },
    32: { miles: 0.2, calories: 20, minutes: 4 },
  },
  32: {
    1: { miles: 0.7, calories: 56, minutes: 14},
    2: { miles: 0.5, calories: 42, minutes: 10 },
    3: { miles: 1.2, calories: 102, minutes: 10 },
    4: { miles: 0.3, calories: 25, minutes: 6 },
    5: { miles: 0.2, calories: 17, minutes: 4 },
    6: { miles: 0.2, calories: 25, minutes: 4 },
    7: { miles: 0.2, calories: 42, minutes: 4 },
    8: { miles: 0.2, calories: 76, minutes: 4 },
    9: { miles: 0.2, calories: 17, minutes: 4 },
    10: { miles: 0.2, calories: 34, minutes: 4 },
    11: { miles: 0.2, calories: 42, minutes: 4 },
    12: { miles: 0.2, calories: 50, minutes: 4 },
    13: { miles: 0.2, calories: 41, minutes: 4 },
    14: { miles: 0.2, calories: 33, minutes: 4 },
    15: { miles: 0.2, calories: 32, minutes: 4 },
    16: { miles: 0.2, calories: 35, minutes: 4 },
    17: { miles: 0.2, calories: 22, minutes: 4 },
    18: { miles: 0.2, calories: 44, minutes: 4 },
    19: { miles: 0.2, calories: 51, minutes: 4 },
    20: { miles: 0.2, calories: 50, minutes: 4 },
    21: { miles: 0.2, calories: 53, minutes: 4 },
    22: { miles: 0.2, calories: 58, minutes: 4 },
    23: { miles: 0.2, calories: 13, minutes: 4 },
    24: { miles: 0.2, calories: 48, minutes: 4 },
    25: { miles: 0.2, calories: 18, minutes: 4 },
    26: { miles: 0.2, calories: 47, minutes: 4 },
    27: { miles: 0.2, calories: 25, minutes: 4 },
    28: { miles: 0.2, calories: 61, minutes: 4 },
    29: { miles: 0.2, calories: 14, minutes: 4 },
    30: { miles: 0.2, calories: 30, minutes: 4 },
    31: { miles: 0.2, calories: 20, minutes: 4 },
    32: { miles: 0, calories: 0, minutes: 0 },
  },
};
const mapDataLookup = (startId, endId) => {
  return DATA_LOOKUP[startId][endId];
};
const calculateCalories = (routes) => {
  let calories = 0;
  routes.forEach((route) => {
    calories += calculateCaloriesForRoute(route);
  });
  return calories;
};
const calculateCaloriesForRoute = (route) => {
  return mapDataLookup(route.start.id, route.end.id).calories;
};
const createRoute = (startBuilding, endBuilding) => {
  let calories = mapDataLookup(startBuilding.id, endBuilding.id).calories;
  let minutes = mapDataLookup(startBuilding.id, endBuilding.id).minutes;
  let miles = mapDataLookup(startBuilding.id, endBuilding.id).miles;
  return {
    id: Date.now(),
    label: `${startBuilding.name} to ${endBuilding.name}`,
    route: { start: startBuilding, end: endBuilding },
    calories: calories,
    minutes: minutes,
    miles: miles
  };
};
export default {
  name: "App",
  data() {
    return {
      buildings: BUILDINGS,
      createdRoutes: [],
      newRouteBuildingStartId: "",
      newRouteBuildingEndId: "",
    };
  },
  methods: {
    addNewRoute() {
      this.createdRoutes.push(
        createRoute(this.newRouteStartBuilding, this.newRouteEndBuilding)
      )
    },
    removeRoute(route) {
      this.createdRoutes.splice(
        this.createdRoutes.findIndex(
          (createdRoute) => createdRoute.id == route.id
        ),
        1
      );
    },
    addCals(route) {
      return calculateCaloriesForRoute(route);
    }
    
  },
  computed: {
    totalCalories() {
      const routes = [];
      this.createdRoutes.forEach((createdRoute) => {
        routes.push(createdRoute.route);
      });
      return calculateCalories(routes);
    },
    newRouteStartBuilding() {
      return this.buildings[this.newRouteBuildingStartId];
    },
    newRouteEndBuilding() {
      return this.buildings[this.newRouteBuildingEndId];
    },
  },
};
</script>