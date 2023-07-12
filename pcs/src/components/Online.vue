<template>
  <div class="online-container">
    <p>Online</p>
    <div class="content-wrapper">
      <div v-for="item of dummyData" class="content">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg"
          alt=""
        />
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
      },
      {
        name: "Sarah",
        location: "BSD",
      },
      {
        name: "Alex",
        location: "Sahid",
      },
      {
        name: "Jhon",
        location: "Yogyakarta",
      },
      {
        name: "Dimas",
        location: "Ygyakarta",
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
  .content-wrapper {
    display: flex;
    flex-direction: row;
    gap: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    .content {
      //   background-color: red;
      width: max-content;
      padding: 8px;
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
        font-size: 10px;
      }
    }
  }
}
</style>
