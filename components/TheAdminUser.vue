<template>
  <form @submit.prevent>
    <div class="form-group m-5" v-for="(data, text) in dataUser" :key="data.id">
      <label for="exampleInputEmail1">{{ text }}</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        :value="data"
      />
    </div>

    <button type="submit" class="btn btn-primary m-5">Сохранить</button>
  </form>
</template>

<script>
export default {
  props: ["dataUser"],
};
</script>

<style></style>
