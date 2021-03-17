<template>
  <v-list subheader two-line>
    <v-subheader inset>Maçlarım</v-subheader>

    <v-list-item v-for="file in matches" :key="file.title">
      <v-list-item-avatar>
        <v-icon :class="file.color" dark v-text="file.icon"></v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="file.title"></v-list-item-title>
        <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-subheader inset>İptal Edilen Maçlarım</v-subheader>

    <v-list-item v-for="file in cancelMatches" :key="file.title">
      <v-list-item-avatar>
        <v-icon :class="file.color" dark v-text="file.icon"></v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="file.title"></v-list-item-title>
        <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  components: {},
  name: "PreMatches",
  data() {
    return {
      matches: [
        {
          color: "blue",
          icon: "mdi-gamepad-variant",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary",
        },
        {
          color: "blue",
          icon: "mdi-gamepad-variant",
          subtitle: "Jan 10, 2014",
          title: "Kitchen remodel",
        },
      ],
      cancelMatches: [
        {
          color: "red",
          icon: "mdi-delete",
          subtitle: "Jan 20, 2014",
          title: "Vacation itinerary",
        },
        {
          color: "red",
          icon: "mdi-delete",
          subtitle: "Jan 10, 2014",
          title: "Kitchen remodel",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>