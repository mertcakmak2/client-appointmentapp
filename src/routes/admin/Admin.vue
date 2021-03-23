<template>
  <div>
    
    <filter-bar/>

    <event-table/>
    
  </div>
</template>

<script>

import EventTable from './components/EventTable.vue'
import FilterBar from './components/FilterBar.vue'

export default {
  name: "Admin",
  components:{
    EventTable,
    FilterBar
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dateMenu: false,
  }),
  methods: {
    
  },
};
</script>