<template>
  <!-- <main-component :slotComponent="slotComponent"> -->
      <Calendar/>
  <!-- </main-component> -->
</template>

<script>
// import MainComponent from "../main/MainComponent.vue";
import Calendar from "./components/calendar";

export default {
  name: "index",
  components: {
    // MainComponent,
    Calendar,
  },
  data() {
    return {
      slotComponent: "appointment"
    };
  },
 };
</script>
