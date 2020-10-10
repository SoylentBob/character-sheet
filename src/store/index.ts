import Vue from 'vue';
import Vuex from 'vuex';
import talents from '@/model/talent/talents';
import CharacterSheet from '@/model/character/CharacterSheet';
import CharacterTalent from '@/model/character/CharacterTalent';
import LocalStorageCharacterSheets from '@/model/character/localstorage/LocalStorageCharacterSheets';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    face: 1,
    dice: 6,
    characters: JSON.parse(localStorage.getItem('characters')),
    newCharacterSheet: new CharacterSheet(
      "",
      talents.map(v => new CharacterTalent(v, 4)),
      12,
    ),
    characterSheets: new LocalStorageCharacterSheets(),
    talents: talents,
  },
  mutations: {
    roll(state) {
      state.face = Math.floor(Math.random() * state.dice) + 1;
    },

    selectDice(state, dice) {
      state.dice = dice;
    },
  },
  actions: {
  },
  modules: {
  },
});
