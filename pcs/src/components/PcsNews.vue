<template>
  <div style="padding: 8px">
    <h6 style="margin-bottom: 8px">PCS News!</h6>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000">
      <Slide v-for="(slide, index) in dummyData" :key="index">
        <div class="carousel__item">
          <div class="user">
            <div class="user__data">
              <img :src="slide.imgUrl" alt="" />
              <p class="name">{{ slide.name }}</p>
            </div>
            <div class="date">
              <p class="day">{{ slide.day }}</p>
              <p class="full-date">{{ slide.date }}</p>
            </div>
          </div>
          <div class="message">
            <p v-for="item of slide.message">{{ item }}</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <!-- <Navigation /> -->
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  setup() {
    const dummyData = ref([
      {
        name: "Ana Riswati",
        imgUrl:
          "https://images.freeimages.com/clg/istock/previews/9712/97126591-cartoon-exhausted-employee.jpg",
        day: "Senin",
        date: "30 Mei 2022",
        message: [
          "Kalimat 1 - Lorem ipsum dolor sit amet consec",
          "Kalimat 2 - Lorem ipsum dolor sit amet consec",
          "Kalimat 3 - Lorem ipsum dolor sit amet consec",
          "Kalimat 4 - Lorem ipsum dolor sit amet consec",
        ],
      },
      {
        name: "Ana Riswati",
        imgUrl:
          "https://images.freeimages.com/clg/istock/previews/9712/97126591-cartoon-exhausted-employee.jpg",
        day: "Senin",
        date: "30 Mei 2022",
        message: [
          "Kalimat 1 - Lorem ipsum dolor sit amet consec",
          "Kalimat 2 - Lorem ipsum dolor sit amet consec",
          "Kalimat 3 - Lorem ipsum dolor sit amet consec",
          "Kalimat 4 - Lorem ipsum dolor sit amet consec",
        ],
      },
      {
        name: "Ana Riswati",
        imgUrl:
          "https://images.freeimages.com/clg/istock/previews/9712/97126591-cartoon-exhausted-employee.jpg",
        day: "Senin",
        date: "30 Mei 2022",
        message: [
          "Kalimat 1 - Lorem ipsum dolor sit amet consec",
          "Kalimat 2 - Lorem ipsum dolor sit amet consec",
          "Kalimat 3 - Lorem ipsum dolor sit amet consec",
          "Kalimat 4 - Lorem ipsum dolor sit amet consec",
        ],
      },
    ]);

    const slides = [
      { id: "1", title: "Vue 3 Introduction", content: "VueJS is a library" },
      { id: "2", title: "Vue 3 Components", content: "Know the components" },
      {
        id: "3",
        title: "Vue 3 Conditional",
        content: "Rendering Conditionally",
      },
      { id: "4", title: "Vue 3 Reactivity", content: "VueJS is Reactive" },
      {
        id: "5",
        title: "Vue 3 Compute",
        content: "VueJS uses computed properties",
      },
    ];

    const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 2,
        snapAlign: "start",
      },
    };
    return { dummyData, slides, breakpoints };
  },
});
</script>

<style lang="scss">
h6 {
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
}

.carousel__item {
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  p {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__data {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      p {
        font-size: 16px;
        color: red;
        font-weight: 500;
      }
    }
    .date {
      text-align: end;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .message {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: start;
    p {
      font-size: 12px;
    }
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
