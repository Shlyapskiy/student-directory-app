import Vue from 'vue';
import VueRouter from 'vue-router';
import AddStudent from '../views/AddStudent.vue';
import ViewStudents from '../views/ViewStudents.vue';
import RemoveStudent from '../views/RemoveStudent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ViewStudents },
  { path: '/add', component: AddStudent },
  { path: '/remove', component: RemoveStudent },
];

const router = new VueRouter({
  routes,
});

export default router;
