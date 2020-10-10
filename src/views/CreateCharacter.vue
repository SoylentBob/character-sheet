<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        :name="1"
        title="Character Background"
        icon="settings"
        :done="step > 1"
      >
        Describe your characters background.

        <q-input v-model="text" label="Name" />
        <q-input v-model="text" label="Hometown" />
        <q-input type="number" v-model="text" label="Age" />
        <q-input v-model="text" label="Occupation" />
        <q-input v-model="text" label="Size" />
        <q-input type="number" v-model="text" label="Weight" />

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title="'Spend your talent points (' + usedTalentPoints + '/' + availableTalentPoints + ')'"
        icon="assignment"
        :done="step > 2"
      >
        <div class="q-pa-lg">
          <div v-for="talent in talents" v-bind:key="talent.value">
            <TalentLevelSelect
              :talent="talent"
              :level="4"
              style="margin-bottom: 20px"
            ></TalentLevelSelect>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import TalentLevelSelect from '@/components/TalentLevelSelect.vue';

export default {
  data() {
    return {
      step: 1,
      availableTalentPoints: 12,
      usedTalentPoints: 0,
      talents: this.$store.state.talents,
    };
  },
  components: {
    TalentLevelSelect,
  },
};
</script>
