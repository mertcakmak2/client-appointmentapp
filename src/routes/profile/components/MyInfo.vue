<template>
  <v-form class="form" ref="form"  lazy-validation>
    <v-text-field
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      label="Telefon"
      required
    ></v-text-field>

    <v-btn color="primary" class="mr-4"> Kaydet </v-btn>

  </v-form>
</template>

<script>
export default {
  components: {},
  name: "MyInfo",
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>