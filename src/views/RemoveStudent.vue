<template>
    <div>
      <h2>Вилучити студента</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          {{ student.name }}
          <button @click="removeStudent(student.id)">Вилучити</button>
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
      removeStudent(studentId) {
        this.$store.commit('removeStudent', studentId);
      },
    },
  };
  </script>
  