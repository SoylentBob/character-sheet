<template>
  <div class="q-pa-md">
    <div v-if="character === null">
      Oops... Dieser Charakter existiert nicht
    </div>
    <div v-else>
      {{ character.name }}

      <a
        :href="'data:application/octet-stream;base64,' + characterExport"
        download="character.json"
        >Export</a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    character() {
      return this.$store.state.characterSheets.findById(this.id);
    },
    characterExport() {
      return btoa(JSON.stringify(this.character));
    },
  },
};
</script>
