<template>
  <v-sheet rounded="lg" min-height="268">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon color="blue darken-2">mdi-facebook</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon color="purple">mdi-instagram</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon color="red darken-2">mdi-youtube</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>


<script>
export default {
  name: "ImageGrid",
  data() {
    return {
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
</style>