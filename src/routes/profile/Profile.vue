<template>
  <v-container>

    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="5"> </v-col>

      <v-col sm="5" md="3">
        <v-avatar size="128">
          <img
            src="https://scontent.fasr1-2.fna.fbcdn.net/v/t1.0-9/69487512_10220233600620226_3903073967149154304_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0YUApAoC8QMAX_nhpJY&_nc_oc=AQnL0H1D807dcyKZwsocfBFsAsPAgsl9KHOmTsIw5kbNKtEo7TJVrQQcFLBSlYT6oPc&_nc_ht=scontent.fasr1-2.fna&oh=4242432b263b0ea4c40141e8a434ec54&oe=606C8170"
          />
        </v-avatar>
      </v-col>

      <v-col sm="5" md="4"> </v-col>
    </v-row>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item >
        <v-card color="basil" flat>
          <my-info class="formComp"/>
        </v-card>
      </v-tab-item>

      <v-tab-item >
        <v-card color="basil" flat>
          <pre-matches/>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </v-container>
</template>

<script>

import MyInfo from './components/MyInfo.vue'
import PreMatches from './components/PreMatches.vue'

export default {
  components: {
    MyInfo,
    PreMatches
  },
  name: "Profile",
  data() {
    return {
      tab: 0,
      items: ["BİLGİLERİM","ÖNCEKİ MAÇLARIM"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    };
  },
};
</script>

<style scoped>

.formComp{
  margin-top: 20px !important
}

</style>