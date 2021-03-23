<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-menu
          v-model="dateMenu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Tarih seçiniz.."
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu = true"></v-date-picker>
        </v-menu>
      </v-col>

      <v-col rounded="lg" cols="12" sm="4"> 
         
      </v-col>

      <v-col cols="12" sm="4" > 

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FilterBar",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dateMenu: false,
    items: ['Saha 1', 'Saha 2'],
    values: ['saha1', 'saha2'],
  }),
  methods: {},
};
</script>