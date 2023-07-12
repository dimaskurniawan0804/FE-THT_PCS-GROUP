<template>
  <div class="user-data-container">
    <p>Hi, Good Morning!</p>
    <div class="user-data-container-wrapper">
      <div class="user-data">
        <div class="user-data__info">
          <img
            src="https://img.freepik.com/free-psd/business-man-illustration_1150-58986.jpg?w=996&t=st=1689177387~exp=1689177987~hmac=58c587a016d2ec4363ce4d0723fd515bb92537bfb4c3ea20452f174c4a453075"
            alt=""
          />
          <div class="info">
            <p class="name">Tabay</p>
            <p class="jobdesc">UI/UX Designer</p>
          </div>
        </div>
        <div class="user-data__join-date">
          <p class="title">Member Since</p>
          <p class="date">01 Juni 2021</p>
        </div>
      </div>
      <div class="user-location">
        <div class="title-location" style="color: white">Location</div>
        <div class="data-location">
          <p class="location">Office</p>
          <p class="status">ICO</p>
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
.user-data-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .user-data-container-wrapper {
    background: rgb(225, 15, 15);
    background: linear-gradient(
      90deg,
      rgba(225, 15, 15, 1) 0%,
      rgba(142, 17, 71, 0.9856734930300245) 96%
    );
    border-radius: 10px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .user-data {
      p {
        color: white;
      }
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      &__info {
        display: flex;
        flex-direction: row;
        gap: 8px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .jobdesc {
          font-size: 10px;
        }
      }
      &__join-date {
        .title {
          font-size: 10px;
        }
        text-align: end;
      }
    }
    .user-location {
      display: flex;
      flex-direction: column;
      p {
        color: white;
      }
      .title-location {
        font-size: 10px;
      }
      .data-location {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .status {
          font-size: 10px;
          font-style: italic;
        }
      }
    }
  }
}
</style>
