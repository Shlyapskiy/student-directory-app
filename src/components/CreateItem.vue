<template>
    <div>
      <h2>Створення елемента даних</h2>
      <form @submit.prevent="createItem">
        <label>Прізвище: <input v-model="lastName" required></label><br>
        <label>Ім'я: <input v-model="firstName" required></label><br>
        <label>По-батькові: <input v-model="patronymic" required></label><br>
        <label>Рік народження: <input type="number" v-model="birthYear" required></label><br>
        <label>Адреса: <input v-model="address" required></label><br>
        <label>Рейтинг: <input type="number" v-model="rating" required></label><br>
        <button type="submit">Створити</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lastName: '',
        firstName: '',
        patronymic: '',
        birthYear: null,
        address: '',
        rating: null,
      };
    },
    methods: {
      createItem() {
        this.$store.commit('addItem', {
          lastName: this.lastName,
          firstName: this.firstName,
          patronymic: this.patronymic,
          birthYear: this.birthYear,
          address: this.address,
          rating: this.rating,
        });
  
        this.lastName = '';
        this.firstName = '';
        this.patronymic = '';
        this.birthYear = null;
        this.address = '';
        this.rating = null;
      },
    },
  };
  </script>
  