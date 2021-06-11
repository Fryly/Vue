<template>
  <div class="wrapper">
      <Todo/>
  </div>
</template>

<script>

import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body{
  background: rgb(238, 236, 236);
  word-break: break-word;
}

*{
  margin: 0;
  padding: 0;
  list-style: none;
}

.wrapper {
  max-width: 600px;
  margin: 20px auto;
}

@media screen and (max-width: 620px){
  .wrapper {
    max-width: 420px;
  }
}

@media screen and (max-width: 430px){
  .wrapper {
    max-width: 320px;
  }
}

</style>
