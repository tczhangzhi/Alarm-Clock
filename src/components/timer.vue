<template>
  <div class="timer-container">
    <Digit :digit="minutes" title="MINUTES" />
    <span class="separator-container"><span class="separator"></span></span>
    <Digit :digit="seconds" title="SECONDS" />
  </div>
</template>

<script setup lang="ts">
import Digit from "./digit.vue";

defineProps({
  days: {
    type: Number,
    required: false,
  },
  hours: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
  seconds: {
    type: Number,
    required: true,
  },
});
</script>
<style scoped>
.timer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
}
.separator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 0 0 10px 0px;
}
.separator {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #404549;
  border-radius: 6px;
  margin: 5px 0px;
}
</style>