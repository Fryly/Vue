<template>
  <aside>
    <Search @addCity="addCity" />
    <CityContent :dataCity="dataCity" />
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Search from "./../search-city/Search.vue";
import CityContent from "./../city-content/CityContent.vue";

@Component({
  components: {
    Search,
    CityContent,
  },
})
export default class AsideMenu extends Vue {
  @Prop({ required: true })
  dataCity!: any;

  private addCity(city: string) {
    this.$emit('addCity', city)
  }

}
</script>


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
}
</style>
