<template>
  <div class="form-task">
      <input v-model="message">
      <button @click="$emit('onAdd',message)">{{textButton}}</button>
  </div>
</template>

<script setup>

import { defineProps } from 'vue'

defineProps({
  textButton: String,
  message: String,
})

</script>

<style scoped>

.form-task{
    padding: 20px;
    display: flex;
}

input {
    border: 1px solid #35495e;
    padding: 9px 5px;
    border-radius: 5px 0px 0px 5px;
    border-right: 0px;
    width: 100%; 
    outline:none;
    background: #35495e;
    color: #fff;
}

button {
  color: rgb(255, 255, 255);
  padding: 10px 5px;
  background: #42b883;
  border: none;
  width: 100px;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
}

</style>
