import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [
      { id: 1, name: 'Іванов Іван Іванович', birthYear: 2000, address: 'Київ', rating: 85 },
    ],
  },
  mutations: {
    addStudent(state, student) {
      state.students.push(student);
    },
    removeStudent(state, studentId) {
      state.students = state.students.filter(student => student.id !== studentId);
    },
  },
});
