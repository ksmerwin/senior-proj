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
    
    <span>Your info: {{firstname}}</span>
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




<!--<template>
  <v-container>
    <v-row class="text-center">
      
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Calorie Counter for Cats
        </h1>

        <p class="subheading font-weight-regular">
          Here you can find the the calories burned for walking to class!
          </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          About You!
        </h2>

        <v-row justify="center">
          <input type="text" placeholder="First Name">
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'InputPage',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
-->