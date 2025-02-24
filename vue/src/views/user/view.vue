<script setup >

import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const user = ref(null)
const route = useRoute()

const getUserData = async () => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  user.value = data.data
}

onMounted(() => {
  getUserData()
})


</script>

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
        <p>street Phrase: {{ user.address.street }}</p>
        <p>suite: {{ user.address.suite }}</p>
        <p>zipcode: {{ user.address.zipcode }}</p>
      </div>
    </div>
    <h1 v-else class="loading">Loading</h1>
  </div>
</template>

<style scoped lang="sass">
.user
  width: 100%
  padding: 20px 30px

  h1
    font-size: 40px
    line-height: 50px
    text-align: center
    margin-bottom: 40px
    text-decoration: underline

  p
    font-size: 30px
    line-height: 40px
    margin-bottom: 10px

  &__info
    padding: 20px
    border: 1px solid #000
    box-sizing: border-box
    margin-bottom: 20px

    h2
      font-size: 35px
      line-height: 45px
      margin-bottom: 20px


</style>
