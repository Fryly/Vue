<template>
  <div>
    {{ dataCity }}
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Content extends Vue {
  @Prop({ required: true })
  dataCity!: [];

  private activeTab = "Today";

  private onActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
</script>
