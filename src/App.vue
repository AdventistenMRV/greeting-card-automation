<template>
  <div class="p-grid">
    <div class="p-col-0 p-md-1 p-lg-2"></div>
    <div class="p-col-0 p-md-10 p-lg-8">
      <Navigation></Navigation>
      <router-view />
    </div>
    <div class="p-col-0 p-md-1 p-lg-2"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
