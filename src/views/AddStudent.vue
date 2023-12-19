<script lang="ts">
export default {
  data(): {
    newStudent: {
      name: string;
      birthYear: number | null;
      address: string;
      rating: number | null;
    };
  } {
    return {
      newStudent: {
        name: '',
        birthYear: null,
        address: '',
        rating: null,
      },
    };
  },
  methods: {
    addStudent() {
      this.$store.commit('addStudent', this.newStudent);
      this.$router.push('/');
    },
  },
};
</script>
