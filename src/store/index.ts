import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    face: 1,
    dice: 6,
    characters: JSON.parse(localStorage.getItem('characters')),
    talents: [
      {
        label: 'Stärke',
        value: 'STRENGTH',
        cost: 2,
        perks: [
          {
            name: 'Weste',
            description: 'Schadensabsorption +2',
          },
        ],
      },
      {
        label: 'Gewandtheit',
        value: 'AGILITY',
        cost: 2,
        perks: [
          {
            name: 'Leichtes Marschgepäck',
            description: 'Gewandtheit +2',
          },
        ],
      },
      {
        label: 'Nahkampf',
        value: 'MELEE_ATTACK',
        cost: 2,
        perks: [
          {
            name: 'Baseballschläger',
            description: 'Stärke + W6',
          },
          {
            name: 'Axt',
            description: 'Stärke + W6',
          },
        ],
      },
      {
        label: 'Fernkampf',
        value: 'RANGED_ATTACK',
        cost: 2,
        perks: [
          {
            name: 'Maschinengewehr',
            description: 'Schaden 2x W10',
          },
          {
            name: 'Schrotflinte',
            description: 'Schaden 3x W6',
          },
          {
            name: 'Karabiner',
            description: 'Schaden 2x W8',
          },
        ],
      },
      {
        label: 'Technik',
        value: 'TECHNICS',
        cost: 1,
        perks: [
          {
            name: 'Werkzeugkiste',
            description: 'Schwere Technikproben',
          },
        ],
      },
      {
        label: 'Wissen',
        value: 'KNOWLEDGE',
        cost: 1,
        perks: [
          {
            name: 'Almanach',
            description: 'Fehlgeschlagene Wissensprobe erneut versuchen (1x pro Abenteuer einsetzbar)',
          },
        ],
      },
      {
        label: 'Wahrnehmung',
        value: 'PERCEPTION',
        cost: 1,
        perks: [
          {
            name: 'Fernglas',
            description: 'Beobachten aus der Ferne',
          },
        ],
      },
      {
        label: 'Fahrzeuge steuern',
        value: 'STEER_VEHICLES',
        cost: 1,
        perks: [
          {
            name: 'Flugschein',
            description: 'Flugzeuge steuern',
          },
        ],
      },
      {
        label: 'Heimlich',
        value: 'STEALTHY',
        cost: 1,
        perks: [
          {
            name: 'Leise Sohlen',
            description: 'Heimlich +2 auf festem Untergrund',
          },
          {
            name: 'Klaviersaite',
            description: 'Feinde lautlos ausschalten',
          },
        ],
      },
      {
        label: 'Reden',
        value: 'TALK',
        cost: 1,
        perks: [
          {
            name: 'Charmebolzen',
            description: 'Fehlgeschlagene Probe auf Reden erneut versuchen (1x pro Abenteuer einsetzbar)',
          },
        ],
      },
      {
        label: 'Schlösser knacken',
        value: 'LOCK_PICKING',
        cost: 1,
        perks: [
          {
            name: 'Dietrich-Set',
            description: 'Schlösser knacken + 2 (Kann 3x verwendet werden)',
          },
        ],
      },
      {
        label: 'Medizin',
        value: 'MEDICINE',
        cost: 1,
        perks: [
          {
            name: 'Medikit',
            description: 'Wunden heilen (Kann 3x verwendet werden)',
          },
          {
            name: 'Adrenalinspritze',
            description: 'Bewusstlose Charaktere wiederbeleben',
          },
        ],
      },
      {
        label: 'Sprengstoff',
        value: 'EXPLOSIVES',
        cost: 1,
        perks: [
          {
            name: 'Panzerfaust',
            description: 'Schaden 4x W8',
          },
          {
            name: 'Granaten',
            description: 'Schaden 3x W6',
          },
        ],
      },
      {
        label: 'Glück',
        value: 'LUCK',
        cost: 1,
        perks: [
          {
            name: 'Glückspilz',
            description: 'Beliebige Probe erneut versuchen (1x pro Abenteuer einsetzbar)',
          },
        ],
      },
    ],
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
