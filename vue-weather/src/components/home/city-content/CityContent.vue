<template>
  <div class="city">
    <img src="./../../../assets/weather.svg" alt="weather" />
    <span class="city-temperature">9 C</span>
    <span class="city-data">Monday, 16:00</span>
    <div class="city-info">
      <span>dop info</span>
      <span>dop info</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/variables";

.city {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  img {
    margin: 0 auto;
    width: 250px;
  }
  .city-temperature {
    font-size: 50px;
    font-weight: 100;
  }
  .city-data {
      margin-top: 10%;
  }
  .city-info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
}
</style>
