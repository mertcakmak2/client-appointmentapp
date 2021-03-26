<template>
  <v-sheet rounded="lg" min-height="268">
    <v-card class="weatherCard mx-auto" max-width="400">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ this.selectedDay.city }}
          </v-list-item-title>
          <v-list-item-subtitle>{{
            this.selectedDay.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col class="display-3" cols="6">
            {{ this.selectedDay.degree + "&deg;C" }}
          </v-col>
          <v-col cols="6">
            <v-img
              :src="this.selectedDay.weatherIcon"
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-slider
        v-model="time"
        :max="6"
        :tick-labels="labels"
        class="mx-4"
        ticks
        @change="onChangeDay"
      ></v-slider>

      <v-list class="transparent">
        <v-list-item v-for="item in forecast" :key="item.day">
          <v-list-item-title>{{ item.day }}</v-list-item-title>

          <v-list-item-icon>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
            <v-img :src="item.icon" width="24"></v-img>
          </v-list-item-icon>

          <v-list-item-subtitle class="text-right">
            {{ item.temp }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </v-sheet>
</template>


<script>
import weatherService from "./services/WeatherService";

export default {
  name: "WeatherCard",
  data() {
    return {
      labels: ["P", "S", "Ç", "P", "C", "C", "P"],
      time: "",
      forecast: [],
      weatherIcon: "",
      weatherData: [],
      selectedDay: "",
    };
  },
  mounted() {
    var that = this;
    weatherService.getWeather().then((response) => {
      that.weatherData = JSON.parse(response.data[0].weather);
      that.labels = that.weatherData.result.map(d => d.day.substr(0,1))

      //Bugün
      var today = that.weatherData.result[0];
      this.setViewDay(today)

      //Sonraki günler
      this.setNextDays();
    });
  },
  methods:{
    onChangeDay(indices){
      var day = this.weatherData.result[indices];
      this.setViewDay(day)
    },

    setViewDay(day){
       this.selectedDay = {
        city: this.weatherData.city.toUpperCase(),
        description:
          day.day +
          ", " +
          new Date().toLocaleTimeString().substr(0, 5) +
          ", " +
          day.description,
        weatherIcon: day.icon,
        degree: parseInt(day.degree),
      };
    },

    setNextDays(){
      var that = this;
      for (let index = 0; index < 3; index++) {
        var data = that.weatherData.result[index];
        var max = parseInt(data.max);
        var min = parseInt(data.min);
        var weather = {
          day: data.day,
          icon: data.icon,
          temp: min + "\xB0" + "/" + max + "\xB0",
        };
        that.forecast.push(weather);
      }
    }
  }
};
</script>

<style scoped>
.weatherCard {
  margin-top: 5%;
}
</style>