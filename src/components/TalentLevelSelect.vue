<template>
  <div>
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        :label="talent.talent.label + ' (W' + talent.level + ')'"
      >
        <q-card>
          <q-card-section>
            <div style="white-space: pre">{{ talent.talent.description }}</div>

            <q-slider
              v-model="talent.level"
              color="blue"
              :min="4"
              :step="2"
              :max="12"
              label
              :label-value="'W' + talent.level"
              markers
            />

            <div>
              Das Steigern dieses Talents kostet {{ talent.talent.cost }}TP.
            </div>

            <h6>Perks</h6>
            <q-list>
              <q-item
                tag="label"
                v-ripple
                v-for="perk in talent.talent.perks"
                :key="perk.name"
              >
                <q-item-section avatar>
                  <q-checkbox :value="false" :disabled="talent.level < 8" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ perk.name }}</q-item-label>
                  <q-item-label caption>{{ perk.description }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
