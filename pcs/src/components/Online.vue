<template>
  <div class="online-container">
    <h6>Online</h6>
    <div class="content-wrapper">
      <div v-for="item of dummyData" class="content">
        <img :src="item.img" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="location">{{ item.location }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const dummyData = ref([
      {
        name: "Yuni",
        location: "BSD",
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
      },
      {
        name: "Sarah",
        location: "BSD",
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
      },
      {
        name: "Alex",
        location: "Sahid",
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
      },
      {
        name: "Jhon",
        location: "Yogyakarta",
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
      },
      {
        name: "Dimas",
        location: "Yogyakarta",
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg",
      },
    ]);
    return { dummyData };
  },
});
</script>

<style lang="scss" scoped>
.online-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    justify-content: space-between;
    .content {
      width: max-content;
      padding: 10px;
      text-align: center;
      img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
      }
      .name {
        font-size: 12px;
      }
      .location {
        font-size: 8px;
      }
    }
  }
}
</style>
