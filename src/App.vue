<style lang="scss">
@import "@/scss/vars.scss";
@import "@/scss/main.scss";
</style>

<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import axios from "axios";

export default {
  data() {
    return {
      pageData: null,
    };
  },
  name: "app",
  components: {
    myFooter: Footer,
    myNav: Nav,
  },

  created() {
    axios
      .get("http://mashoo.paulakar.fr/wp-json/wp/v2/pages/5")
      .then((response) => {
        this.pageData = response.data.acf;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
