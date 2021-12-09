<template>
  <div class="header-content">
    <nav class="header-content__tabs">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        @click="onActive(tab)"
        class="link-tab"
        :class="{
          'active-tab': tab === activeTab,
        }"
      >
        {{ tab }}
      </span>
    </nav>
    <div class="header-content__temperature">
      <div class="temperature-c"><span>C</span></div>
      <div class="temperature-f active-temperature"><span>F</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class HeaderContent extends Vue {
  @Prop({ required: true })
  tabs!: string[];

  @Prop({ required: true })
  activeTab!: string;

  private onActive(tab: string) {
    this.$emit("onActiveTab", tab);
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/variables";

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-content__tabs {
    display: flex;
    .link-tab {
      margin-right: 10px;
      font-size: 20px;
      color: #959899;
      text-decoration: none;
      cursor: pointer;
    }
    .link-tab:last-child {
      margin-right: 0;
    }
    .active-tab {
      color: $h-color;
    }
  }
  .header-content__temperature {
    display: flex;
    .temperature-c,
    .temperature-f {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      background: #c7cacc54;
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .temperature-f {
      margin-right: 0;
    }
    .active-temperature {
      background: $h-color;
      color: $text-color;
    }
  }
}
</style>
