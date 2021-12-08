<template>
  <header>
      <h1>{{title}}</h1>
      <img src="../assets/logo.png" alt="logo">
  </header>
</template>

<script setup>


import { defineProps, reactive } from 'vue'

defineProps({
  title: String,
})

</script>

<style scoped>

header {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: #00b86583;
    border-radius: 10px 10px 0px 0px;
}



img {
  width: 50px;
}

</style>
