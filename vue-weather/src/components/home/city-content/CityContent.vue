<template>
  <div v-if="dataCity.length !== 0" class="city">
    <img
      :src="`http://openweathermap.org/img/wn/${dataCity.weather[0].icon}@2x.png`"
      alt="weather"
    />
    <p>
      City: <span class="city-name">{{ dataCity.name }}</span>
    </p>
    <span class="city-temperature">{{ temp }}°C</span>
    <span class="city-data">{{ toDay }}, {{ toTime }}</span>
    <div class="city-info">
      <span>Погодные условия: {{ dataCity.weather[0].main }}</span>
      <span>Влажность: {{ dataCity.main.humidity }} %</span>
    </div>
  </div>
  <div v-else>выберите город</div>
</template>

<script lang="ts">
import { Utils } from "@/utils/Utils";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class CityContent extends Vue {
  @Prop({ required: true })
  dataCity!: any;

  private toTime: any = "";

  mounted(): void {
    this.toTimeStart();
  }

  beforeDestroy(): void {
    this.toTimeStop();
  }

  get toDay(): string {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(new Date());
  }

  get temp(): number {
    return Utils.temperature(this.dataCity.main.temp);
  }

  toTimeStart(): void {
    setInterval(() => (this.toTime = new Date().toLocaleTimeString()), 1000);
  }

  toTimeStop(): void {
    if (this.toTime) {
      clearInterval(this.toTime);
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/variables";

.city {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  p {
    font-size: 25px;
  }
  img {
    margin: 0 auto;
    // widt&0px; !! подумать по поводу картинки
  }
  &-temperature {
    font-size: 50px;
    font-weight: 100;
  }
  &-data {
    margin-top: 10px;
  }
  &-info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  &-name {
    font-size: 30px;
  }
}
</style>
