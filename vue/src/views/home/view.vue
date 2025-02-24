<script setup >

import {UserItem} from "../../components/User";
import axios from "axios";
import {onMounted, ref} from "vue";

const users = ref([])

const getUserData = async () => {
  const data = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = data.data
}

onMounted(() => {
  getUserData()
})


</script>

<template>
  <div class="home">
    <user-item id="id" name="name" username="username" email="email" street="street" suite="suite" city="city" phone="phone" website="website" :isHeader="true"/>

    <template v-if="users.length">
      <user-item v-for="item in users" :id="item.id" :name="item.name" :username="item.username" :email="item.email" :street="item.address.street" :suite="item.address.suite" :city="item.address.city" :phone="item.phone" :website="item.website" :isHeader="false"/>
    </template>
  </div>
</template>

<style scoped lang="sass">


</style>
