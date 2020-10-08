<template>
    <div>
        <h2>What's your schedule?</h2>
        <ul>
        <li class="option">
        <select name="MWF">
        <option disabled value="">Please select one</option>
        <option v-for="building in buildings" :key="building.building" >{{building.building}}</option>
        </select>
        </li>
        </ul>
    </div>
</template>






<script>
export default {
  name: 'SchedulePage',
  data: () => ({
      route:[
          {buildingstart: 'Building A',
          buildingend: 'Building B'},
          {buildingstart: 'Building B',
          buildingend: 'Building C'},
          {buildingstart: 'Building C',
          buildingend: 'Building D'},
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

