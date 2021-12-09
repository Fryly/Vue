<template>
  <div class="content-weather">
    <HeaderContent />
    <ItemWeather />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderContent from "@/components/home/header/HeaderContent.vue";
import ItemWeather from "@/components/home/cart-item-weather/ItemWeatcher.vue";

@Component({
  components: {
    HeaderContent,
    ItemWeather,
  },
})
export default class Content extends Vue {}
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
