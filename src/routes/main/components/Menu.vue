<template>
  <v-sheet rounded="lg" min-height="268">
    <v-list dense>
      <v-subheader>Uygulamalar</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="onMenuClick(item.route)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"> </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-sheet>
</template>


<script>
export default {
  name: "Menu",
  data() {
    return {
      selectedItem: "",
      items: [
        { text: "Anasayfaa", icon: "mdi-view-dashboard", name:"Dashboard", route:"/" },
        { text: "Profilim", icon: "mdi-account", name:"Profile", route:"/profile" },
        { text: "Maç Ayarlaa", icon: "mdi-gamepad-variant", name:"Appointment", route:"appointment" },
        { text: "Önceki Maçlarımm", icon: "mdi-history" },
        { text: "Galerii", icon: "mdi-folder-multiple-image" },
      ],
    };
  },
  mounted(){
    var routeName = this.$route.matched[0].name
    var routeIndex = this.items.findIndex(x=>x.name === routeName)
    this.selectedItem = routeIndex;
  },
  methods:{
    onMenuClick(event) {
        this.$router.push(event)
    }
  }
};
</script>

<style scoped>
</style>