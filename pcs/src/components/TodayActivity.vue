<template>
  <div class="today-activity-container">
    <h6>Today's Activity</h6>
    <div class="content">
      <div class="content__check-in">
        <i class="pi pi-clock"></i>
        <p style="font-weight: 600">08.30</p>
        <p style="font-size: 10px">Check-In</p>
      </div>
      <div class="content__working-hour">
        <i class="pi pi-refresh"></i>
        <p style="color: red; font-weight: 600">08:00:00</p>
        <p style="font-size: 10px">Working Hours</p>
      </div>
      <div class="content__check-out">
        <i class="pi pi-home"></i>
        <p>--:--</p>
        <p style="font-size: 10px">Check Out</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
h6 {
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
}
.today-activity-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    i {
      filter: invert(14%) sepia(91%) saturate(4333%) hue-rotate(357deg)
        brightness(100%) contrast(94%);
    }
    &__check-in {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    &__working-hour {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    &__check-out {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
  }
}
</style>
