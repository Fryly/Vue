<template>
  <div class="tabs">
    <slot :name="tab" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Tabs extends Vue {
  @Prop({ type: String, required: true })
  tab!: string;
}
</script>
