<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <AsideMenu @addCity="onAddCity" :dataCity="dataCity" />
      <ContentWeather :tabs="tabs" :dataCity="dataCity" />
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
export default class Home extends Vue {
  private tabs: string[] = ["Today", "Week"];
  private dataCity: any = [];

  private onAddCity(city: string) {
    const data = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac1d8d7c748ea7df6345148b4b2c3933`
    )
      .then((response) => response.json())
      .then((data) => {
        this.dataCity = data;
        console.log(this.dataCity);
      });
  }
}
</script>
