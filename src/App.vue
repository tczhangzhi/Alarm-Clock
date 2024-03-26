<template>
  <Alarm :detailMode="detailMode" @dblclick="handleDetailMode()" />
  <NextPerson :detailMode="detailMode" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Alarm from "./components/alarm.vue";

export default defineComponent({
  name: "App",
  components: {
    Alarm,
  },
  data() {
    return {
      detailMode: true,
    };
  },
  methods: {
    handleDetailMode() {
      this.detailMode = !this.detailMode;

      if (this.detailMode) {
        this.$nextTick(() => {
          window.scrollTo({
            top: window.screen.availHeight,
            behavior: "smooth",
          });
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
  mounted() {
    const html = document.getElementsByTagName("html")[0];
    const oWidth =
      document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth / 50 + "px";
    console.log("rem:", html.style.fontSize);
    window.onresize = () => {
      const html = document.getElementsByTagName("html")[0];
      const oWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth / 50 + "px";
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
</style>
