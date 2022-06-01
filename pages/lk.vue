<template>
  <div class="container">
    <NuxtLink to="/" class="btn btn-dark my-3">
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="#ddd"
        xmlns="http://www.w3.org/2000/svg"
        class="m-2"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
        />
      </svg>
      Назад
    </NuxtLink>
    <the-lk-user :dataUser="dataUser" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheLkUser from "../components/TheLkUser.vue";
export default {
  components: { TheLkUser },
  data() {
    return {
      user: {},
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      getCurrentUser: "users/getCurrentUser",
    }),
    dataUser() {
      return this.getCurrentUser(+this.$route.query.userId);
    },
  },
};
</script>

<style></style>
