<template>
  <v-app>
      <div class="d-flex align-center">
       
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>


    <v-main>
      <InputPage/>
    </v-main>
  </v-app>
</template>

<script>
import InputPage from './components/InputPage';
import {appData} from './main';

export default {
  name: 'App',

  components: {
    InputPage,
  },
  data: () => {
    return appData
  },
};
</script>
