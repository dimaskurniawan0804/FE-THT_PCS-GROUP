<template>
  <div class="notifications-container">
    <div class="notifications-container__content">
      <div class="header">
        <i
          class="pi pi-arrow-left"
          @click="$router.push({ path: '/' })"
          style="font-size: 1rem; font-weight: 600"
        ></i>
        <h6>Notifications</h6>
      </div>
      <div v-for="item in dummyData" class="card">
        <div class="image">
          <img :src="item.img" alt="" />
          <div
            class="status"
            :style="{
              backgroundColor:
                item.status === 'done'
                  ? '#16ce2a'
                  : item.status === 'failed'
                  ? 'red'
                  : item.status === 'in-progress'
                  ? '#2583e7'
                  : '',
            }"
          >
            <i
              :class="{
                'pi pi-check': item.status === 'done',
                'pi pi-times': item.status === 'failed',
                'pi pi-arrow-right': item.status === 'in-progress',
              }"
            ></i>
          </div>
        </div>
        <div class="message">
          <div class="top">
            <p class="title">{{ item.title }}</p>
            <p class="day">{{ item.day }}</p>
          </div>
          <div class="data">
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script langs="ts" scoped>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const dummyData = ref([
      {
        img: "https://gomycode.com/ng/wp-content/uploads/sites/29/2023/04/event-NG-1-copy-37.png",
        title: "Reimbursment",
        day: "Today",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea eos, nemo dicta nobis nostrum amet. Quod numquam facere pariatur tenetur odit excepturi itaque, tempore, optio labore eveniet aspernatur tempora!",
        status: "failed",
      },
      {
        img: "https://i0.wp.com/www.bluenovius.com/wp-content/uploads/2017/09/why-medical-ilustrations-are-awesome.jpg?fit=1150%2C612&ssl=1",
        title: "Sickness",
        day: "Yesterday",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea eos, nemo dicta nobis nostrum amet. Quod numquam facere pariatur tenetur odit excepturi itaque, tempore, optio labore eveniet aspernatur tempora!",
        status: "in-progress",
      },
      {
        img: "https://gomycode.com/ng/wp-content/uploads/sites/29/2023/04/event-NG-1-copy-37.png",
        title: "Reimbursment",
        day: "11-02-2022",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea eos, nemo dicta nobis nostrum amet. Quod numquam facere pariatur tenetur odit excepturi itaque, tempore, optio labore eveniet aspernatur tempora!",
        status: "done",
      },
      {
        img: "https://i0.wp.com/www.bluenovius.com/wp-content/uploads/2017/09/why-medical-ilustrations-are-awesome.jpg?fit=1150%2C612&ssl=1",
        title: "Sickness",
        day: "23-01-2022",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea eos, nemo dicta nobis nostrum amet. Quod numquam facere pariatur tenetur odit excepturi itaque, tempore, optio labore eveniet aspernatur tempora!",
        status: "done",
      },
    ]);
    return { dummyData };
  },
});
</script>

<style lang="scss" scoped>
.notifications-container {
  padding: 30px;
  width: 100%;
  &__content {
    border-radius: 10px;
    .header {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      h6 {
        font-family: "Yanone Kaffeesatz", sans-serif;
        font-weight: 700;
        color: red;
        font-size: 24px;
        letter-spacing: 1px;
      }
      i {
        cursor: pointer;
      }
    }
    .card {
      display: flex;
      flex-direction: row;
      height: 150px;
      padding: 10px;
      gap: 8px;
      .image {
        img {
          width: 60px;
          height: 60px;
          border-radius: 10px;
        }
        .status {
          width: max-content;
          height: max-content;
          padding: 4px;
          align-items: center;
          justify-content: center;
          display: flex;
          border-radius: 50%;
          position: relative;
          left: 45px;
          bottom: 14px;
          i {
            font-size: 10px;
            color: white;
          }
        }
      }
      .message {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .title {
            font-weight: 600;
          }
          .day {
            font-size: 8px;
            font-weight: 100;
          }
        }
      }
    }
  }
}
</style>
