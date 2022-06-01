<template>
  <header>
    <div class="container py-2 header__container">
      <img src="@/static/images/logo.png" alt="" class="header__logo" />
      <the-header-actions />
    </div>
  </header>
</template>
<script>
import TheHeaderActions from "./TheHeaderActions.vue";
export default {
  name: "TheHeader",
  components: {
    TheHeaderActions,
  },
};
</script>
<style lang="scss" scoped>
.header__container {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 600px) {
  .header__container {
    flex-direction: column;
  }
  .header__logo {
    width: 80%;
    margin: 25px auto;
  }
}
</style>
