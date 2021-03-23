<template>
  <v-row class="fill-height calendar">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Bugün
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          type="category"
          category-show-all
          locale="tr"
          :first-interval="8"
          :interval-count="17"
          :categories="categories"
          :events="events"
          :event-color="getEventColor"
          @change="fetchEvents"
          @click:event="onClickEvent"
          @click:time-category="onCreateEvent"
        >
          <template v-slot:event="{ event }">
            <div class="v-event-draggable">
              <strong>{{ event.customer.name }}</strong>
              -
              {{ formatEventTime(event.start) }} -
              {{ formatEventTime(event.end) }}
              <br />
              <v-row no-gutters>
                <v-col cols="12" sm="1">
                  <v-avatar color="primary" size="10"></v-avatar>
                </v-col>
                <v-col cols="12" sm="11">
                  <h5>Onaylandı</h5>
                </v-col>
              </v-row>
              <!-- <div>
              <h5>Onaylandı</h5>
              <v-avatar color="primary" size="10"></v-avatar>
              </div> -->
            </div>
          </template>
        </v-calendar>
        <create-appointment
          @saveAppointment="saveAppointment"
          ref="createApp"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import CreateAppointment from "../components/createAppointment";
// import appointmentService from "../services/appointmentService";

export default {
  name: "Calendar",
  components: {
    CreateAppointment,
  },
  data() {
    return {
      focus: "",
      newappointment: {}, //oluşturulacak yeni appointment
      categories: ["saha1", "saha2"],
      isOpen: false,
      events: [],
      dates: [
        {
          appId: 1,
          customer: {
            cusId: 1,
            name: "test",
            surname: "test",
            username: "test",
            email: "test@gmail.com",
            phone: "1212",
            crdt: "2021-03-05T21:04:35.000+00:00",
          },
          category: "saha1",
          start: "2021-03-20 10:00",
          end: "2021-03-20 11:00",
          crdt: null,
          color: "deep-purple",
        },

        
        

        // {
        //   id: 1,
        //   name: "Ali Veli",
        //   start: "2021-03-17 10:00",
        //   end: "2021-03-17 11:00",
        //   color: "blue",
        //   timed: true,
        //   category: "Saha 1",
        // },
        // {
        //   id: 2,
        //   name: "Mert Çakmak",
        //   start: "2021-03-17 15:00",
        //   end: "2021-03-17 16:30",
        //   color: "indigo",
        //   timed: true,
        //   category: "Saha 2",
        // },
        // {
        //   id: 3,
        //   name: "Test Test",
        //   start: "2021-03-17 13:00",
        //   end: "2021-03-17 14:30",
        //   color: "cyan",
        //   timed: true,
        //   category: "Saha 1",
        // },
        // {
        //   id: 4,
        //   name: "Admin Admin",
        //   start: "2021-03-17 18:00",
        //   end: "2021-03-17 20:30",
        //   color: "deep-purple",
        //   timed: true,
        //   category: "Saha 2",
        // },
      ],
    };
  },
  mounted() {
    // var that = this;
    this.$refs.calendar.checkChange();
    // alert("sa")
    // appointmentService.getAppointments().then((res) => {
    //   var dates = res.data;
    //   dates.map((x) => (x.color = "deep-purple"));
    //   // that.events = dates;
    // });
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    fetchEvents({ start, end }) {
      var begdt = start;
      var enddt = end;
      this.events = this.dates;
      console.log("fetchevents", begdt, enddt);
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    formatEventTime(date) {
      return new Date(date).toLocaleTimeString("tr", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
    onClickEvent(appointment) {
      var eventId = appointment.event.id;
      console.log(eventId);
    },
    onCreateEvent(event) {
      this.$refs.createApp.openDialog("");
      console.log(event);
    },
    saveAppointment() {
      alert("saveAppointment");
    },
  },
};
</script>

<style scoped>
.calendar {
  margin-top: 3px;
}
</style>