<template>
  <div class="dashboard-container">
    <div class="content">
      <div class="header">
        <h6>KerjaYuk!</h6>
        <i class="pi pi-bell"></i>
      </div>
      <user-info />
      <today-activity />
      <pcs-news />
      <online />
    </div>
  </div>
</template>

<script langs="ts" scoped>
import { defineComponent } from "vue";
import UserInfo from "../components/UserInfo.vue";
import TodayActivity from "../components/TodayActivity.vue";
import PcsNews from "../components/PcsNews.vue";
import Online from "../components/Online.vue";

export default defineComponent({
  components: {
    UserInfo,
    TodayActivity,
    PcsNews,
    Online,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 30px;
  .content {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 8px;
      h6 {
        font-family: "Yanone Kaffeesatz", sans-serif;
        font-weight: 700;
        color: red;
        font-size: 24px;
      }
    }
  }
}
</style>
