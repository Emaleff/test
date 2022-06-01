<template>
  <li
    class="list-group-item r item"
  >
    <div>
      <span>{{ user.first_name }}</span>
      <span> {{ user.family_name }} </span>
    </div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <div class="item__btn-wrapp">
        <NuxtLink
          :to="{
            path: '/lk',
            query: { userId: user.id },
          }"
          class="btn btn-secondary mx-2"
          >Просмотреть</NuxtLink
        >
        <NuxtLink
          v-show="checkAuth"
          :key="checkAuth"
          :to="{
            path: '/admin',
            query: { userId: user.id },
          }"
          class="btn btn-danger mx-2"
        >
          Редактировать
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ checkAuth: "auth/checkAuth" }),
  },
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.item{
  display: flex;justify-content: space-between;align-items: center;
}
.item__btn-wrapp{
  display: flex;
}
@media screen and (max-width:550px) {
  .item{
    flex-direction: column;
  }
  .item__btn-wrapp{
 margin-top: 10px;
}
}
</style>
