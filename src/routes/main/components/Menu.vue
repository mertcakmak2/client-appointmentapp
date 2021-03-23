<template>
  <v-sheet rounded="lg" :min-height="sheetHeight" >
    <v-list dense>
      <v-subheader>Uygulamalar</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          v-show="item.visible"
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
import { mapGetters } from 'vuex';

export default {
  name: "Menu",
  data() {
    return {
      sheetHeight:268,
      selectedItem: "",
      items: [
        { text: "Anasayfa", visible:true, icon: "mdi-view-dashboard", name:"Dashboard", route:"/", auth:false},
        { text: "Profilim", visible:false, icon: "mdi-account", name:"Profile", route:"/profile", auth:true },
        { text: "Maç Ayarla", visible:true, icon: "mdi-gamepad-variant", name:"Appointment", route:"appointment", auth:false },
        { text: "Galeri", visible:true, icon: "mdi-folder-multiple-image", auth:false },
        { text: "Turnuvalar", visible:true, icon: "mdi-trophy", auth:false },
      ],
    };
  },
  computed: {
    ...mapGetters(['getAuthentication'])
  },
  watch:{
    $route(to) {
      var findRoute = this.items.find(x=>x.name == to.name)
      if(!findRoute) this.selectedItem = null;
    },
    getAuthentication(loginState){
      this.items.filter(item=>item.auth == true).map(item=>item.visible = loginState)
      this.sheetHeight = loginState ? 258 : 228;
    }
  },
  mounted(){
    var routeName = this.$route.matched[0].name
    var routeIndex = this.items.findIndex(x=>x.name === routeName)
    this.selectedItem = routeIndex;

    var loginState = this.$store.getters.getAuthentication
    this.items.filter(item=>item.auth == true).map(item=>item.visible = loginState)
    this.sheetHeight = loginState ? 268 : 228;
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