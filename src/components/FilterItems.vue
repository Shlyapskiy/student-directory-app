<template>
    <div>
      <h2>Фільтрація елементів даних</h2>
      <form @submit.prevent="filterItems">
        <label>Мінімальний рейтинг: <input type="number" v-model="minRating"></label><br>
        <button type="submit">Фільтрувати</button>
      </form>
      <ul>
        <li v-for="student in filteredStudents" :key="student.id">
          {{ student.lastName }}, {{ student.firstName }} {{ student.patronymic }} - {{ student.birthYear }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        minRating: null,
      };
    },
    computed: {
      filteredStudents() {
        return this.$store.getters.filteredStudents(this.minRating);
      },
    },
    methods: {
      filterItems() {
        this.$store.commit('filterItems', this.minRating);
      },
    },
  };
  </script>
  