<template>
  <div>

    <!-- App Bar Componenti -->
    <app-bar/>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          
          <v-col cols="12" :sm="colWidth.leftCol" >
            
            <!-- Sol Menü Componenti -->
            <Menu />
                
            <!-- Hava Durumu Componenti -->
            <weather-card />

          </v-col>

          <v-col rounded="lg" cols="12" :sm="colWidth.midCol">
            <v-sheet min-height="70vh" rounded="lg">
            <!-- <v-sheet min-height="auto" rounded="lg"> -->

              <slot></slot>

            </v-sheet>
          </v-col>

          <v-col cols="12" :sm="colWidth.rightCol">

            <!-- Sağ resim Componenti -->
            <image-grid />

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

import { mapGetters } from 'vuex';

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
      colWidth:{
        leftCol:3,
        midCol:6,
        rightCol:3
      }
    };
  },
  computed: mapGetters(['getAuthentication']),
  watch:{
    getAuthentication(loginState){
      console.log(loginState);
    }
  },
  mounted() {
    // alert(this.$props.slotComponent);
    
  },
  methods:{
   
  }
};
</script>

<style scoped>
.container {
  max-width: 1485px;
  min-height: 100vh !important;
}

</style>