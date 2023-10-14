<template>
  <layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume :label="'Ahorro Total'" :totalcantidad="10000" :cantidad="100" />
    </template>
    <template #movements>
      <Movements />
    </template>
  </layout>
</template>

<script>
import layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/Index.vue";
import Movements from "./Movements.vue";

export default {
  components: {
    layout,
    Header,
    Resume,
    Movements,
  },
};
</script>
