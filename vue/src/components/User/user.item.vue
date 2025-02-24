<script setup>

import {useRouter} from "vue-router";

const props = defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  isHeader: {
    type: Boolean,
  },
  street: {
    type: String,
  },
  suite: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
});

const router = useRouter();

const redirectToUser = () => {
  console.log(props.isHeader)
  if (!props.isHeader) {
    router.push(`/${props.id}`);
  }
}

</script>

<template>
  <div class="item" :class="{'item__header': isHeader}" @click="redirectToUser">
    <div class="item__item"><span>{{ id }}</span></div>
    <div class="item__item"><span>{{ name }}</span></div>
    <div class="item__item"><span>{{ username }}</span></div>
    <div class="item__item"><span>{{ email }}</span></div>
    <div class="item__item">
      <span v-if="isHeader">address</span>
      <div class="item__item">
        <span>{{ street }}</span>
        <span>{{ suite }}</span>
        <span>{{ city }}</span>
      </div>
    </div>
    <div class="item__item"><span>{{ phone }}</span></div>
    <div class="item__item"><span>{{ website }}</span></div>
  </div>
</template>

<style scoped lang="sass">
.item
  display: flex
  background: #00b1da
  transition: 0.5s
  cursor: pointer

  &:hover
    background: #076b83


  &__header
    display: flex
    margin-bottom: 30px
    cursor: auto


  &__item
    //flex: 1 0 auto;
    display: flex
    flex-direction: column
    padding: 15px 10px
    border-right: 1px solid #fff
    box-sizing: border-box

    &:last-child
      border-right: none


    span
      font-family: "Wix Madefor Text", serif
      font-size: 14px
      line-height: 20px
      font-weight: bold
      color: #fff
      text-align: center
      text-wrap: nowrap
      overflow: hidden
      width: 100%
      white-space: nowrap
      text-overflow: ellipsis



    &:nth-child(1)
      width: 5%


    &:nth-child(2)
      flex: 1 1 10%
      min-width: 0


    &:nth-child(3)
      flex: 1 1 10%
      min-width: 0


    &:nth-child(4)
      width: 10%


    &:nth-child(5)
      width: 20%
      align-content: center


    &:nth-child(6)
      width: 15%
      align-content: center


    &:nth-child(7)
      width: 15%
      align-content: center



  &__item &__item
    flex-direction: row
    justify-content: space-between
    border: none
    padding: 0
    margin-top: 5px
    width: 100%




</style>
