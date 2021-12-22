<template>
  <div class="search">
    <img src="./../../../assets/search-icon.svg" alt="search" />
    <input
      type="text"
      name="search"
      placeholder="Search city"
      v-model="search"
      @keydown.enter="add"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Search extends Vue {
  private search = "";

  mounted() {
    // this.getCountry();
  }

  // private getCountry() {}

  private add() {
    if (this.search.length === 0) return;
    this.$emit("addCity", this.search);
    this.search = "";
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/variables";

.search {
  display: flex;
  align-items: center;
  background: #c7cacc54;
  padding: 10px;
  border-radius: 4px;
  img {
    width: 25px;
  }
  input {
    border: none;
    background: none;
    padding: 5px;
    outline: none;
    color: #959899;
    width: 100%;
  }
}
</style>
