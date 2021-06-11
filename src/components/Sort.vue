<template>
  <div class="sort-block">
      <div class="sort-text">
            Сопртировать по: <span>{{state.selected}}</span>
      </div>
      <div class="sort-filter">
          <span class="text-select" @click="onOpen()">{{state.selected}}</span>
          <div class="option" v-if="state.open">
                <span v-for="item in state.option" v-bind:key="item" @click="onClickSelected(item), $emit('onSort', item)">
                    {{item}}
                </span>
          </div>
      </div>
  </div>
</template>

<script setup>


import { reactive } from 'vue'


const state = reactive({
    option: ['Все задания','Выполнены','Не выполнены'],
    open: false,
    selected: 'Все задания'
})

const onOpen = () => {
    state.open = !state.open
}

const onClickSelected = (item) => {
    state.selected = item
    state.open = !state.open
}

</script>

<style scoped>

.sort-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

.sort-filter {
    position: relative;
    width: 130px;
}

.text-select {
    background: #42b883;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    display: block;
    text-align: center;
}

.option {
    display: flex;
    flex-direction: column;
    color: #fff;
    background: #35495e;
    position: absolute;
}

.option span {
    display: block;
    cursor: pointer;
    padding: 10px;
}

.option span:hover {
    background: #42b883;
}

.sort-text span {
    text-decoration: underline;
    color: #42b883;
    font-style: italic;
}

@media screen and (max-width: 430px){
  .sort-block {
      flex-direction: column;
  }

  .sort-text {
      margin-bottom: 10px;
  }
}

</style>
