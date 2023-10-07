<template>
  <div class="PantallaBienvenida">
    <img src="@/assets/cashflow-icon.svg" alt="logo" />
    <h1><span>Metri</span>Gastos</h1>
  </div>
</template>
<style scoped>
.PantallaBienvenida {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
h1 {
  color: var(--brand-blue);
}
h1 span {
  color: var(--brand-green);
}
</style>
<script>
export default {
  name: "PantallaIgualada",
};
</script>
