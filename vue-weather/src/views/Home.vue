<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <AsideMenu />
      <ContentWeather />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background: #f5f1f1;
  height: 100vh;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  // gap: 20px;
  padding: 20px;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/home/header/Header.vue";
import AsideMenu from "@/components/home/aside/AsideMenu.vue";
import ContentWeather from "@/components/home/content/Content.vue";

@Component({
  components: {
    Header,
    AsideMenu,
    ContentWeather,
  },
})
export default class Home extends Vue {}
</script>
