<template>
  <div class="content-weather">
    <HeaderContent
      :tabs="tabs"
      @onActiveTab="onActiveTab"
      :activeTab="activeTab"
    />
    <Tabs :tab="activeTab" v-if="dataCity.length !== 0">
      <TabToday slot="Today" :dataCity="dataCity" />
      <TabWeek slot="Week" />
    </Tabs>
    <div v-else>
      Введите город
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import HeaderContent from "@/components/home/header/HeaderContent.vue";
import Tabs from "@/components/tabs/Tabs.vue";
import TabWeek from "@/components/tabs/TabWeek.vue";
import TabToday from "@/components/tabs/TabToday.vue";

@Component({
  components: {
    HeaderContent,
    Tabs,
    TabWeek,
    TabToday,
  },
})
export default class Content extends Vue {
  @Prop({ required: true })
  tabs!: string[];

  @Prop({ required: true })
  dataCity!: [];

  private activeTab = "Today";

  private onActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
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
