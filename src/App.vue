<template>
  <v-app>
    <NavBar
    />
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import router from './router.js';
  export default {
    name: 'App',
    components: {
    NavBar,
    router
}

    
  }
</script>

<style lang="scss" scoped>

</style>
