<template>
  <div class="todo-content">
    <Header title="Todo-vue"/>
    <Form 
      textButton="Add" 
      v-on:onAdd="onAdd" 
      v:bind:message="state.message"
    />
    <Sort
      v-on:onSort="onSort"
    />
    <List
      v-bind:todo="state.task"
      v-on:onChangeText="onChangeText"
      v-on:onDelete="onDelete"
      v-on:onComplite="onComplite"
    />
  </div>
</template>

<script setup>

import Header from '../components/Header.vue'
import Form from '../components/Form.vue'
import List from '../components/List.vue'
import Sort from '../components/Sort.vue'

import { reactive } from 'vue'

const state = reactive({ 
  task: JSON.parse(localStorage.getItem('todo')),
  message: ''
})

const onAdd = ( text ) => {
  const data = JSON.parse(localStorage.getItem('todo'));
  const id = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
  const newTask = {
    text,
    complit: false,
    id
  }
  state.task = [...data, newTask]
  localStorage.setItem('todo', JSON.stringify(state.task))
}

const onChangeText = ( text, id ) => {
  const data = JSON.parse(localStorage.getItem('todo'));
  const newText = prompt('Изменить задание?', text)
  const newTitle = data.map( item => {
    if( item.id === id ){
      item.text = newText
    }
    return item
  })
  state.task = newTitle
  localStorage.setItem('todo', JSON.stringify(state.task))
}

const onDelete = ( id ) => {
  const data = JSON.parse(localStorage.getItem('todo'));
  const message = confirm("Вы действительно хотите удалить?")
  if (message){
    const newTasks = data.filter( item => item.id !== id )
    state.task = newTasks
    localStorage.setItem('todo', JSON.stringify(state.task))
  }
}

const onComplite = ( id, status ) => {
  const data = JSON.parse(localStorage.getItem('todo'));
  const complitTask = data.map( item => {
    if( item.id === id ){
      item.complit = !status
    }
    return item
  })
  state.task = complitTask
  localStorage.setItem('todo', JSON.stringify(state.task))
}

const onSort = ( selected ) => {
  const data = JSON.parse(localStorage.getItem('todo'));
  switch (selected){
      case 'Все задания':
        state.task = data
        break;
      case 'Выполнены':
        const sortComplite = data.filter( item => item.complit !== false )
        state.task = sortComplite
        break;
      case 'Не выполнены':
        const sortNotComplite = data.filter( item => item.complit !== true )
        state.task = sortNotComplite
        break;
      default: 
        return data
  }
}

</script>



<style scoped>

.todo-content {
    width: 100%;
    color: #000;
    border-radius: 10px 10px 0px 0px;
    background: #fff;
}

a {
  color: #42b983;
}

</style>
