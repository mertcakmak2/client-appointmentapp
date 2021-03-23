<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      
      <template v-slot:item.state="{ item }">
        <v-chip :color="getColor(item.state)" dark>
          {{ item.state }}
        </v-chip>
      </template>

      <template v-slot:item.start="{ item }">
        {{ item.start.substr(0,10) }}
      </template>

      <template v-slot:item.time="{ item }">
        {{ item.start.substr(10,6) + " - " + item.end.substr(10,6) }}
      </template>

      <template v-slot:item.islem="{ item }">
        <v-btn color="primary" @click="onClickAction(item)" class="mr-4"> {{ item.islem || "İşlem "}} </v-btn>
      </template>

    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "EventTable",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dateMenu: false,
    headers: [
      { text: "Ad", align: "start", sortable: false, value: "name" },
      { text: "Durum", value: "state" },
      { text: "Tarih", value: "start" },
      { text: "Zaman", value: "time" },
      { text: "Saha", value: "category" },
      { text: "İşlem", value: "islem" },
    ],
    desserts: [
      {
          id: 1,
          name: "Ali Veli",
          start: "2021-03-21 10:00",
          end: "2021-03-21 11:00",
          state: "Onaylandı",
          category: "Saha 1",
        },
        {
          id: 2,
          name: "Mert Çakmak",
          start: "2021-03-21 15:00",
          end: "2021-03-21 16:00",
          state: "Beklemede",
          category: "Saha 2",
        },
        {
          id: 3,
          name: "Test Test",
          start: "2021-03-21 13:00",
          end: "2021-03-21 14:00",
          state: "İptal Edildi",
          category: "Saha 1",
        },   
    ],
  }),
  methods: {
    onClickAction(event){
        console.log(event);
    },
    getColor(state) {
      if (state == "İptal Edildi") return "red";
      else if (state == "Beklemede") return "orange";
      else return "green";
    },
  },
};
</script>