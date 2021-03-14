<template>
  <v-app-bar color="white" flat dark>
    <v-spacer></v-spacer>

    <v-img
      max-height="50"
      max-width="60"
      src="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2018/09/dev-community.png?fit=5000%2C2941&ssl=1"
    ></v-img>

    <v-text-field
      background-color="white"
      light
      class="searchInput"
      label="Ara.."
      single-line
      solo
    ></v-text-field>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-btn depressed color="#323EBE"> Maç Ayarla </v-btn>

    <v-btn icon color="grey darken-1">
      <v-icon color="blue-grey darken-2">mdi-message-text</v-icon>
    </v-btn>

    <v-btn icon color="grey darken-1">
      <v-icon color="blue-grey darken-2">mdi-bell-ring</v-icon>
    </v-btn>

    <v-menu bottom min-width="200px" rounded offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon x-large v-on="on">
          <v-avatar>
            <img
              src="https://scontent.fasr1-2.fna.fbcdn.net/v/t1.0-9/69487512_10220233600620226_3903073967149154304_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0YUApAoC8QMAX_nhpJY&_nc_oc=AQnL0H1D807dcyKZwsocfBFsAsPAgsl9KHOmTsIw5kbNKtEo7TJVrQQcFLBSlYT6oPc&_nc_ht=scontent.fasr1-2.fna&oh=4242432b263b0ea4c40141e8a434ec54&oe=606C8170"
              size="32"
            />
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar>
              <img
                src="https://scontent.fasr1-2.fna.fbcdn.net/v/t1.0-9/69487512_10220233600620226_3903073967149154304_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0YUApAoC8QMAX_nhpJY&_nc_oc=AQnL0H1D807dcyKZwsocfBFsAsPAgsl9KHOmTsIw5kbNKtEo7TJVrQQcFLBSlYT6oPc&_nc_ht=scontent.fasr1-2.fna&oh=4242432b263b0ea4c40141e8a434ec54&oe=606C8170"
                size="32"
              />
            </v-avatar>

            <h3>Mert Çakmak</h3>

            <p class="caption mt-1">mertcakmak2@gmail.com</p>

            <v-divider class="my-3"></v-divider>

            <v-btn depressed rounded text> Profili Düzenle </v-btn>

            <v-divider class="my-3"></v-divider>

            <v-btn depressed rounded text> Çıkış </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>


<script>
export default {
  name: "Appbar",
  data() {
    return {};
  },
};
</script>

<style scoped>

.searchInput {
  margin-top: 30px;
  margin-left: 20px;
}

</style>