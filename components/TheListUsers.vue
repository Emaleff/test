<template>
  <div class="container">
    <ul class="list-group">
      <the-list-users-item v-for="user in users" :key="user.id" :user="user" />
    </ul>
  </div>
</template>

<script>
import TheListUsersItem from "./TheListUsersItem.vue";
import { mapGetters } from "vuex";
export default {
  mounted() {
},
  components: { TheListUsersItem },
  computed: {
    ...mapGetters({
      users: "users/getUsers",
      getCurrentUser: "users/getCurrentUser",
    }),
  },
  data() {
    return {
      // users: [
      //   {
      //     id: 213324,
      //     login: "IvanIvanov",
      //     family_name: "Ivanov",
      //     first_name: "Ivan",
      //     middle_name: "Ivanovich",
      //     email: "ivanivanov@gmail.com",
      //     phone: 89131234567,
      //     password: "123456",
      //     secret_word: "ivan",
      //     created_at: "23 04 2020",
      //     updated_at: "23 04 2020",
      //   },
      //   {
      //     id: 1233254,
      //     login: "PetrPetrov",
      //     family_name: "Petrov",
      //     first_name: "Petr",
      //     middle_name: "Petrovich",
      //     email: "ivanivanov@gmail.com",
      //     phone: 89131232367,
      //     password: "654321",
      //     secret_word: "petr",
      //     created_at: "26 04 2020",
      //     updated_at: "21 04 2022",
      //   },
      //   {
      //     id: 1235634234,
      //     login: "ananas",
      //     family_name: "Sidorov",
      //     first_name: "Andrey",
      //     middle_name: "Alexsandrovixh",
      //     email: "ananas@gmail.com",
      //     phone: 89131223256,
      //     password: "2131234",
      //     secret_word: "ananas",
      //     created_at: "01 11 2021",
      //     updated_at: "12 05 2022",
      //   },
      //   {
      //     id: 12362312,
      //     login: "vaskoz",
      //     family_name: "Kozlov",
      //     first_name: "Vasiliy",
      //     middle_name: "Petrovich",
      //     email: "ivanivanov@gmail.com",
      //     phone: 89231212347,
      //     password: "1222333",
      //     secret_word: "kozkoz",
      //     created_at: "06 04 2022",
      //     updated_at: "29 05 2022",
      //   },
      //   {
      //     id: 12368912,
      //     login: "apple",
      //     family_name: "Kobalt",
      //     first_name: "Kristina",
      //     middle_name: "Olegovna",
      //     email: "kristinaolegovna@gmail.com",
      //     phone: 89231219947,
      //     password: "999999",
      //     secret_word: "kobalt",
      //     created_at: "08 03 2022",
      //     updated_at: "22 05 2022",
      //   },
      //   {
      //     id: 9874431231,
      //     login: "iriska",
      //     family_name: "Putina",
      //     first_name: "Irina",
      //     middle_name: "Igorevna",
      //     email: "putinairina@gmail.com",
      //     phone: 89231112222,
      //     password: "987654",
      //     secret_word: "irina",
      //     created_at: "01 01 2022",
      //     updated_at: "01 05 2022",
      //   },
      // ],
    };
  },
};
</script>

<style></style>
