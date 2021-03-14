<template>
  <div>

    <app-bar/>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          
          <v-col cols="12" sm="3">
            
            <Menu/>
                
            <weather-card/>

          </v-col>

          <v-col rounded="lg" cols="12" sm="6">
            <v-sheet min-height="70vh" rounded="lg">
              <slot></slot>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="3">

            <image-grid/>

          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';
import Menu from './components/Menu.vue';
import WeatherCard from './components/WeatherCard.vue';
import ImageGrid from './components/ImageGrid.vue';

export default {
  props: ["slotComponent"],
  components:{
    AppBar,
    Menu,
    WeatherCard,
    ImageGrid
  },
  data() {
    return {
      
    };
  },
  mounted() {
    // alert(this.$props.slotComponent);
    console.log("mounted");
  },
  methods:{
   
  }
};
</script>

<style scoped>
.container {
  max-width: 1485px;
}

</style>