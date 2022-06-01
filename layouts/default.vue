<template>
  <div>
    <the-header />
    <nuxt />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers",
      checkTkn: "auth/checkTkn",
    }),
  },
  created() {
    this.fetchUsers(process.env.MOCKAPI_URL);
    this.checkTkn();
  },
};
</script>