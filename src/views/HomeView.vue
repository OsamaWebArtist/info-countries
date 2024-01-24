<template>
  <div class="home-page">
    <myHead />
    <myBody />
  </div>

</template>

<script>
// @ is an alias to /src
import head from "../components/head component/head";
import myBody from "../components/body component/body.vue";

export default {
  
  name: 'HomeView',

  components: {
    'myHead': head,
    'myBody':myBody,
  },
  computed: {
    getDarkMode() {
        return this.$store.state.darkMode 
    },
  }

}
</script>
