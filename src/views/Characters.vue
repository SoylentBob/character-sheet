<template>
  <div class="q-pa-md">
    <q-list
      v-if="characters !== null && characters.length > 0"
      bordered
      separator
    >
      <q-item
        v-for="(char, index) in characters"
        v-bind:key="char.id"
        @click="characterDetails(index)"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ char.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="newCharacter" />
    </q-page-sticky>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    characters() {
      return this.$store.state.characterSheets.list();
    },
  },
  methods: {
    ...mapMutations(["roll", "selectDice"]),
    newCharacter() {
      this.$router.push("/new-character");
    },
    characterDetails(id) {
      this.$router.push({ path: "/characters/" + id });
    },
  },
};
</script>
