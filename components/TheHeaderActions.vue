<template>
  <div class="btn-group">
    <button
      class="btn mx-2 rounded"
      :class="checkAuth ? 'btn-danger' : 'btn-success'"
      @click="toggleAuth" :key="buttonText"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({ checkAuth: "auth/checkAuth" }),
    buttonText() {
      if (this.checkAuth) {
        return "Выйти из профиля";
      } else {
        return "Войти в профиль";
      }
    },
  },
  methods: {
    ...mapActions({ changeAuth: "auth/changeAuth" }),
    toggleAuth() {
      if (this.checkAuth) {
        localStorage.removeItem("tkn");
        this.$router.push('/')

      } else {
        localStorage.setItem("tkn", true);
      }
      this.changeAuth(!this.checkAuth);
    },
  },
};
</script>

<style></style>
