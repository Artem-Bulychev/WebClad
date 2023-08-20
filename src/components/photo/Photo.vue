<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img 
          width="200"
          height="200"
          :src="photo.url"
          />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    props: {
      photo: {
        type: Object,
        required: true,
      }
    },
    methods: {
      openPhoto() {
        this.$store.commit("stateCurrentPhoto", this.photo)
        this.$store.commit("showDialog")
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>