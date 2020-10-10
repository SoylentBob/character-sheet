<template>
  <q-linear-progress
    size="25px"
    :value="usedTalentPoints / totalTalentPoints"
    color="primary"
  >
    <div class="absolute-full flex flex-center">
      <q-badge
        color="white"
        text-color="primary"
        :label="
          'Du hast ' +
          usedTalentPoints +
          ' von deinen ' +
          totalTalentPoints +
          ' Talentpunkten ausgegeben'
        "
      />
    </div>
  </q-linear-progress>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UsedTalentPoints extends Vue {
  @Prop() private usedTalentPoints!: number;
  @Prop() private totalTalentPoints!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
