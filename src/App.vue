<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import locomotiveScroll from "locomotive-scroll";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log("test");

    this.$nextTick(() => {
      console.log("test2");

      this.initLocomotiveScroll();
      console.log("test3");
    });
  },
  methods: {
    initLocomotiveScroll() {
      window.lmS = new locomotiveScroll({
        el: document.querySelector("#app"),
        smooth: true,
        tablet: {
          smooth: false,
        },
        smartphone: { smooth: false },
        lerp: 0.002,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
