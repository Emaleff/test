<template>
  <ul class="list-group">
    <li
      v-for="(user, text) in dataUser"
      :key="user.id"
      class="list-group-item d-flex justify-content-between flex-row"
    >
      <span>{{ user }}</span
      ><span>{{ text }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["dataUser"],
};
</script>

<style></style>
