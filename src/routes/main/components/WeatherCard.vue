<template>
  <v-sheet rounded="lg" min-height="268">
    <v-card class="weatherCard mx-auto" max-width="400">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            San Francisco
          </v-list-item-title>
          <v-list-item-subtitle
            >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col class="display-3" cols="6"> 23&deg;C </v-col>
          <v-col cols="6">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
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
      ></v-slider>

      <v-list class="transparent">
        <v-list-item v-for="item in forecast" :key="item.day">
          <v-list-item-title>{{ item.day }}</v-list-item-title>

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
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
export default {
  name: "WeatherCard",
  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0",
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0",
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
      ],

      cards: [
        {
          title: "Pre-fab homes",
          src:
            "https://birmilyonnokta.com/view/upload/images/company/2020/11/18/10/105334/6b8071fb1e665f5b9e0933c6f455cc1b.png",
          flex: 12,
        },
        {
          title: "Favorite road trips",
          src:
            "https://sosyalhalisaha.com/images/sivas-yuzbasoglu-hali-saha3_1600092352.jpg",
          flex: 6,
        },
        {
          title: "Best airlines",
          src:
            "https://sosyalhalisaha.com/images/sivas-yuzbasoglu-hali-saha2_1600092342.jpg",
          flex: 6,
        },
      ],
    };
  },
};
</script>

<style scoped>
.weatherCard {
  margin-top: 5%;
}
</style>