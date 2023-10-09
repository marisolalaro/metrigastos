<template>
  <layout>
    <template #header>
      <Header></Header>
    </template>
  </layout>
</template>

<script>
import layout from "./Layout.vue";
import Header from "./Header.vue";
export default {
  components: {
    layout,
    Header,
  },
};
</script>
