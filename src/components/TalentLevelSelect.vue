<template>
  <div>
    <q-slider
      v-model="level"
      color="blue"
      :min="4"
      :step="2"
      :max="12"
      :label-value="talent.label + ' W' + level + ' (' + talent.cost + 'TP)'"
      markers
      label
      label-always
    />
    Verfügbare Perks
    <q-list>
      <q-item
        tag="label"
        v-ripple
        v-for="perk in talent.perks"
        :key="perk.name"
      >
        <q-item-section avatar>
          <q-checkbox :disabled="level < 8" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ perk.name }}</q-item-label>
          <q-item-label caption>{{perk.description}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TalentLevelSelect extends Vue {
  @Prop() private talent!: object;
  @Prop() private level!: number;
  @Prop() private selectedPerks!: object[];
  @Prop() private usedTalentPoints!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
