<template>
  <div class="container">
    <div class="container__content">ini notifications</div>
  </div>
</template>

<script langs="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 30px;
  &__content {
    border-radius: 10px;
    border: 2px solid black;
  }
}
</style>
