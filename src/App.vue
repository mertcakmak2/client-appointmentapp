<template>
  <v-app>
    
    <MainApp v-show="vshow">
      <router-view/>
    </MainApp>

  </v-app>
</template>

<script>

import MainApp from './routes/main/MainComponent'
export default {
  name: "App",
  components: {
    MainApp,
  },

  data: () => ({
    vshow:true,
  }),
};
</script>


