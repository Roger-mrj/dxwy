<template>
  <div id='app'>
    <div>fdfsdf</div>
    <router-link to="/about">about</router-link>
    
    <!-- <about></about> -->
    <router-view/>
  </div>
</template>

<script>
  // import About from './views/About.vue'
  export default {
    name: 'App',
    data() {
      return {}
    },
    // components: {
    //   About
    // }
  }
</script>

<style scoped>

</style>