<template>
  <div class="q-pa-md">
    <div v-if="character === null">
      Oops... Dieser Charakter existiert nicht
    </div>
    <div v-else>
      {{ character.name }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    characters() {
      return this.$store.state.characters == null
        ? []
        : this.$store.state.characters;
    },
    character() {
      const matchingCharacters = this.characters.filter((v) => v.id === this.id);

      if (matchingCharacters.length === 0) {
        return null;
      } else {
        return matchingCharacters[0];
      }
    },
  },
};
</script>
