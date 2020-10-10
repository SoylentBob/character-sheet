<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item clickable v-ripple @click="newCharacter">
        <q-item-section>
            <q-item-label>Create a new character</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        v-for="char in characters"
        v-bind:key="char.id"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ char.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div style="display: none">
      <q-select v-model="dice" :options="dices" label="Dice" emit-value />

      <q-btn color="primary" label="Roll" @click="roll" />

      <pre>{{ face }}</pre>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => {
    return {
      dices: [
        {
          label: 'D4',
          value: 4,
        },
        {
          label: 'D6',
          value: 6,
        },
        {
          label: 'D8',
          value: 8,
        },
        {
          label: 'D10',
          value: 10,
        },
        {
          label: 'D12',
          value: 12,
        },
      ],
    };
  },
  computed: {
    dice: {
      get() {
        return this.$store.state.dice;
      },
      set(val) {
        this.$store.commit('selectDice', val);
      },
    },
    face() {
      return this.$store.state.face;
    },
    characters() {
      return this.$store.state.characters;
    },
  },
  methods: {
    ...mapMutations(['roll', 'selectDice']),
    newCharacter() {
      this.$router.push('/new-character');
    },
  },
};
</script>
