<template>
  <div class="task-content">
      <div class="task-item" v-for="item of todo" v-bind:key="item.id">
          <span :class="{active: item.complit}" @click="$emit('onComplite', item.id, item.complit)">{{item.text}}</span>
          <div class="task-item__button">
            <button class="change" @click="$emit('onChangeText', item.text, item.id)"><img src="../assets/pen.svg" alt="pen"></button>
            <button class="remove" @click="$emit('onDelete', item.id)"><img src="../assets/trash.svg" alt="trash"></button>
          </div>
      </div>
  </div>
</template>

<script setup>

import { defineProps, reactive } from 'vue'

defineProps({
  todo: Object
})



</script>

<style scoped>

.task-content{
  padding: 20px 15px;
}

.task-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

span {
  flex: 1;
  border: 1px solid purple;
  padding: 10px;
  cursor: pointer;
}

span.active{
  background: #35495e;
  color: #fff;
}

.change, .remove {
  background: #42b883;
  width: 45px;
  border: none;
  margin-left: 10px;
}

.remove {
  background: #35495e;
}

.task-item__button{
  flex: 0.2;
  display: flex;
  justify-content: flex-end;
}

img {
  width: 32px;
  cursor: pointer;
}

</style>
