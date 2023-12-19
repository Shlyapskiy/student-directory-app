<template>
    <div>
      <h2>Вилучення елементів даних</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          {{ student.lastName }}, {{ student.firstName }} {{ student.patronymic }}
          <button @click="deleteItem(student)">Вилучити</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      students() {
        return this.$store.state.students;
      },
    },
    methods: {
      deleteItem(student) {
        this.$store.commit('deleteItem', student.id);
      },
    },
  };
  </script>
  