<template>
  <aside>
    <Search />
    <CityContent />
  </aside>
</template>

<style scoped lang="scss">
@import "@/scss/variables";
h1 {
  font-size: 30px;
}
aside {
  width: 20%;
  border-radius: 5px;
  background: $bg-color;
  padding: 10px;
  // box-shadow: 8px 0px 16px 0px rgba(0,0,0,0.5);
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "./../search-city/Search.vue";
import CityContent from "./../city-content/CityContent.vue";

@Component({
  components: {
    Search,
    CityContent,
  },
})
export default class AsideMenu extends Vue {}
</script>
