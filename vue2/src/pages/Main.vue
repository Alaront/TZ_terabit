<template>
  <div class="home">
    <user-item
        :id="0"
        name="name"
        username="username"
        email="email"
        street="street"
        suite="suite"
        city="city"
        phone="phone"
        website="website"
        :isHeader="true"
    />

    <template v-if="users.length">
      <user-item
          v-for="item in users"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :username="item.username"
          :email="item.email"
          :street="item.address.street"
          :suite="item.address.suite"
          :city="item.address.city"
          :phone="item.phone"
          :website="item.website"
          :isHeader="false"
      />
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import UserItem from '../components/UserItem.vue';

export default {
  name: 'Main-home',
  components: {
    UserItem,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {

    async getUserData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error);
        this.users = [];
      }
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>
