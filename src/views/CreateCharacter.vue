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

        <q-input v-model="characterSheet.name" label="Name" />
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
        title="Spend your talent points"
        icon="assignment"
        :done="step > 2"
      >
        <div class="q-pa-lg">
          <UsedTalentPoints
            :usedTalentPoints="usedTalentPoints"
            :totalTalentPoints="characterSheet.totalTalentPoints"
            style="margin-bottom: 20px"
          ></UsedTalentPoints>

          <div
            v-for="talent in characterSheet.talents"
            v-bind:key="talent.talent.value"
          >
            <TalentLevelSelect
              :talent="talent"
              style="margin-bottom: 20px"
            ></TalentLevelSelect>
          </div>

          <UsedTalentPoints
            :usedTalentPoints="usedTalentPoints"
            :totalTalentPoints="characterSheet.totalTalentPoints"
          ></UsedTalentPoints>
        </div>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
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
          <q-btn color="primary" label="Finish" @click="createCharacter" />
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
import TalentLevelSelect from "@/components/TalentLevelSelect.vue";
import UsedTalentPoints from "@/components/UsedTalentPoints.vue";

export default {
  data() {
    return {
      step: 1,
      talents: this.$store.state.talents,
      characterSheet: this.$store.state.newCharacterSheet,
    };
  },
  computed: {
    usedTalentPoints() {
      return this.characterSheet.usedTalentPoints();
    },
  },
  components: {
    TalentLevelSelect,
    UsedTalentPoints,
  },
  methods: {
    createCharacter() {
      this.$store.state.characterSheets.add(this.characterSheet);
      this.$router.push("/characters");
    },
  },
};
</script>
