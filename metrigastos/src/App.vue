<template>
  <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback>
      <PantallaBienvenida />
    </template>
  </Suspense>
</template>

<script>
import PantallaBienvenida from "./components/PantallaBienvenida.vue";
import { defineAsyncComponent, DefineComponent } from "vue";

export default {
  components: {
    PantallaBienvenida,
    Home: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./components/Home.vue"));
          }, 2500);
        })
    ),
  },
};
</script>

<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}
</style>
