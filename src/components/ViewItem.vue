<template>
    <div>
      <h2>Перегляд елементів даних</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          {{ student.lastName }}, {{ student.firstName }} {{ student.patronymic }} - {{ student.birthYear }}
          <button @click="viewDetails(student)">Деталі</button>
        </li>
      </ul>
      <div v-if="selectedStudent">
        <h3>Інформація про {{ selectedStudent.lastName }}, {{ selectedStudent.firstName }} {{ selectedStudent.patronymic }}</h3>
        <p>Рік народження: {{ selectedStudent.birthYear }}</p>
        <p>Адреса: {{ selectedStudent.address }}</p>
        <p>Рейтинг: {{ selectedStudent.rating }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      students() {
        return this.$store.state.students;
      },
    },
    data() {
      return {
        selectedStudent: null,
      };
    },
    methods: {
      viewDetails(student) {
        this.selectedStudent = student;
      },
    },
  };
  </script>
  