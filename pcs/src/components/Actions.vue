<template>
  <div class="actions-container">
    <div class="check-out">
      <div>
        <i class="pi pi-power-off" style="font-size: 30px"></i>
      </div>
    </div>
    <div class="action-wrapper">
      <div class="first">
        <div class="home">
          <i class="pi pi-home"></i>
          <p>Home</p>
        </div>
        <div class="attendance">
          <i class="pi pi-check-square"></i>
          <p>Attendance</p>
        </div>
      </div>
      <!-- <div class="second"></div> -->
      <div class="third">
        <div class="form">
          <i class="pi pi-check-square"></i>
          <p>Form</p>
        </div>
        <div class="div settings">
          <i class="pi pi-cog"></i>
          <p>Settings</p>
        </div>
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
.actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  //   align-items: center;
  //   position: relative;
  .check-out {
    div {
      background-color: red;
      text-align: center;
      border-radius: 50%;
      width: max-content;
      padding: 10px;
      position: relative;
      top: 25px;
      z-index: 1;
      i {
        filter: invert(100%) sepia(54%) saturate(0%) hue-rotate(144deg)
          brightness(114%) contrast(101%);
      }
    }
  }
  .action-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 8px;
    justify-content: space-between;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    .first {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 50%;
      justify-content: space-evenly;
      .home {
        line-height: 24px;
        text-align: center;
      }
      .attendance {
        line-height: 24px;
        text-align: center;
      }
    }
    .third {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 50%;
      justify-content: space-evenly;
      .form {
        line-height: 24px;
        text-align: center;
      }
      .settings {
        line-height: 24px;
        text-align: center;
      }
    }
  }
}
</style>
