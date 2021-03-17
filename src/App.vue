<template>
  <v-app>
    
    <MainApp v-show="vshow">
      <router-view/>
    </MainApp>

    <not-found v-show="!vshow" />
  </v-app>
</template>

<script>

import MainApp from './routes/main/MainComponent'
import NotFound from './routes/404/NotFound.vue';
export default {
  name: "App",

  components: {
    MainApp,
    NotFound
  },

  data: () => ({
    vshow:true,
  }),
};
</script>


