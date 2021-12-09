<template>
  <ItemWeather />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemWeather from "@/components/week/week-weather-item/ItemWeatcher.vue";

@Component({
  components: {
    ItemWeather,
  },
})
export default class TabWeek extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/variables";

.content-weather {
  // background: $bg-color;
  border-radius: 5px;
  width: 78%;
  height: 40vh;
  padding: 20px;
}
</style>
