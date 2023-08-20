<template>
  <v-container>
    <h1>Макеты сайтов</h1>
    <PhotoForm  @addPhoto="addPhoto"/>
    <v-row>
      <Photo
    v-for="photo in $store.getters.getAllPhotos"
    :photo="photo"
      /> 
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo.vue"
import PhotoForm from "@/components/photo/PhotoForm.vue"
import PhotoDialog from "@/components/photo/PhotoDialog"
import {mapActions} from "vuex" 
  export default {
    components: {
      PhotoDialog,
      Photo, PhotoForm
    },
    data: () => ({
      photos: [],
      // currentPhoto: {},
      // dialogVisible: false,
    }),
    mounted() {
      // this.fetchTodo()
      this.fetchPhotos()
    },
    methods: {
      ...mapActions(['fetchPhotos']),
      // fetchTodo(){
      //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      //     .then(response => this.photos = response.data)
      // },
      addPhoto(photo) {
        this.photos.push(photo)
      },
      openPhoto(photo) {
        this.currentPhoto = photo
        this.dialogVisible = true
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>