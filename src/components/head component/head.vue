<template>
  <div :class="{ 'head-darkmode': getDarkMode }" class='head'>
    <div class="container">
      <span class="fw-bold fs-4">Where In The World?</span>
      <div @click="ActionClick()" class="dark-light-mode">
        <i :class="{ 'fw-bold': getDarkMode }" class='fa-regular fa-moon'></i>
        <span class="fw-bold">Dark Mode</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'head',
  data() {
    return {

    }
  },
  computed: {
    getDarkMode() {
      return this.$store.state.darkMode
    },

  },
  methods: {
    ActionClick() {
      this.toDarkMode();
      this.darkModeBody();
    },
    darkModeBody() {
      if (this.$store.state.darkMode) {
        document.body.classList.add('body-darkmode');
      } else {
        document.body.classList.remove('body-darkmode');
      }
    },
    toDarkMode() {
      this.$store.commit('storageDarkMode');
      localStorage.setItem('dark-mode', this.$store.state.darkMode)
    }

  },
  mounted() {
    let darkMode = JSON.parse(localStorage.getItem('dark-mode'));
    if (darkMode) {
      this.$store.commit('storageToStateValue', darkMode);

    };
    this.darkModeBody()
  }


}


</script>



<style></style>