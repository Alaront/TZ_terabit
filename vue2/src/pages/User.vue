<template>
  <div class="user">
    <div v-if="user">
      <h1>Name: {{ user.name }} ({{ user.username }})</h1>
      <div>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
      </div>

      <div class="user__info">
        <h2>Company</h2>
        <p>bs: {{ user.company.bs }}</p>
        <p>Catch Phrase: {{ user.company.catchPhrase }}</p>
        <p>Name: {{ user.company.name }}</p>
      </div>

      <div class="user__info">
        <h2>Address</h2>
        <p>city: {{ user.address.city }}</p>
        <p>street: {{ user.address.street }}</p>
        <p>suite: {{ user.address.suite }}</p>
        <p>zipcode: {{ user.address.zipcode }}</p>
      </div>
    </div>
    <h1 v-else class="loading">Loading</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserDetails',
  data() {
    return {
      user: null,
    };
  },
  methods: {

    async getUserData() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        this.user = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        this.user = null;
      }
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style scoped>
.user {
  width: 100%;
  padding: 20px 30px;
}

.user h1 {
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 40px;
  text-decoration: underline;
}

.user p {
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 10px;
}

.user__info {
  padding: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.user__info h2 {
  font-size: 35px;
  line-height: 45px;
  margin-bottom: 20px;
}
</style>
