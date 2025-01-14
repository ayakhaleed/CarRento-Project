<template>
  <!-- ------------------------------------hero section--------------------------------- -->

  <div class="bg-split-half max-h-fit pt-32 animate-fade-up">
    <div class="mx-4 md:mx-20">
      <div
        :class="
          this.$i18n.locale === 'Ar'
            ? 'px-0 pt-12 md:text-right text-center flex flex-col'
            : 'px-0 pt-12 md:text-left text-center flex flex-col'
        "
      >
        <h1 class="lg:text-6xl sm:text-4xl text-2xl w-full text-primary_color">
          {{ $t("home.hello") }} <br />
          {{ $t("home.welcome") }}
        </h1>
        <button
          class="bg-primary_color hover:bg-primary_hover text-white px-12 py-2.5 my-8 rounded-3xl w-[180px] mx-auto md:mx-0"
          @click="scrollToSearchCard"
        >
          {{ $t("home.rent_now") }}
        </button>
        <img
          src="../assets/home-images/hero.png"
          alt="hero-car"
          :class="
            this.$i18n.locale === 'Ar'
              ? 'lg:-mt-40 lg:ml-0 mt-0 mx-auto w-3/4 scale-x-[-1]'
              : 'lg:-mt-40 lg:ml-72 mt-0 mx-auto w-3/4'
          "
        />
      </div>
    </div>
  </div>

  <div class="bg-quarter-split pt-32" id="search-card">
    <div class="mx-auto px-4 md:px-10 lg:px-20 py-10">
      <SearchCard class="mt-0" @search-location="cardSearchFilter"></SearchCard>
    </div>
  </div>

  <!-- -----------------------------------logo separator------------------------------------->
  <section class="bg-white py-5 my-0 animate-fade-up showAnimate">
    <div class="mx-4 md:mx-20">
      <div class="flex flex-wrap justify-between items-center">
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img
            src="../assets/home-images/Mercedes.png"
            alt="mercedes"
            class="mx-auto"
          />
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img
            src="../assets/home-images/Porsche.png"
            alt="Porsche"
            class="mx-auto"
          />
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img src="../assets/home-images/Kia.png" alt="kia" class="mx-auto" />
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img
            src="../assets/home-images/Nissan.png"
            alt="nissan"
            class="mx-auto"
          />
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img
            src="../assets/home-images/Fiat.png"
            alt="fiat"
            class="mx-auto"
          />
        </div>
        <div class="logo-container w-1/2 md:w-1/3 lg:w-1/6">
          <img
            src="../assets/home-images/Vector.png"
            alt="vector"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ------------------------easy steps ----------------------------------- -->

  <section class="bg-bg_color pt-24 my-0 text-center animate-fade-up">
    <div class="mx-4 md:mx-20">
      <h2 class="sm:text-4xl text-2xl mb-4 font-medium text-primary_color">
        {{ $t("home.easy_steps") }}
      </h2>
      <p class="text-[16px] text-primary_color">
        {{ $t("home.easy_steps_description") }}
      </p>

      <div
        class="flex flex-col md:flex-row py-16 text-center text-primary_color"
      >
        <div class="wrapper">
          <div class="blue-circle">
            <img src="../assets/home-images/icons/location.png" />
          </div>
          <h3 class="mt-4 text-[16px] font-medium">
            {{ $t("home.choose_location") }}
          </h3>
          <p class="text-gray-500 text-center text-[12px]">
            {{ $t("home.choose_location_description") }}
          </p>
        </div>
        <div class="w-1/5 ps-2 hidden lg:block">
          <img
            src="../assets/home-images/icons/vecteezy_hand-drawn-dotted-arrow-line-clip-art_22185823 2.png"
            alt=""
            :class="` ${$i18n.locale === 'Ar' ? 'scale-x-[-1]' : ''}`"
          />
        </div>

        <div class="wrapper">
          <div class="blue-circle">
            <img src="../assets/home-images/icons/calendar.png" />
          </div>
          <h3 class="mt-4 text-[16px] font-medium">
            {{ $t("home.choose_day_time") }}
          </h3>
          <p class="text-gray-500 text-[12px]">
            {{ $t("home.choose_day_time_description") }}
          </p>
        </div>
        <div class="w-1/5 ps-2 hidden lg:block">
          <img
            src="../assets/home-images/icons/vecteezy_hand-drawn-dotted-arrow-line-clip-art_22185823 2.png"
            alt=""
            :class="` ${$i18n.locale === 'Ar' ? 'scale-x-[-1]' : ''}`"
          />
        </div>

        <div class="wrapper">
          <div class="blue-circle">
            <img src="../assets/home-images/icons/car.png" />
          </div>
          <h3 class="mt-4 text-[16px] font-medium">
            {{ $t("home.choose_car") }}
          </h3>
          <p class="text-gray-500 text-[12px]">
            {{ $t("home.choose_car_description") }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------------------------------most popular car rentals-------------------------------------------------- -->
  <section class="bg-bg_color pt-0 pb-32 my-0 text-center text-primary_color">
    <div class="mx-4 md:mx-20">
      <h2 class="sm:text-4xl text-2xl mb-4 font-medium">
        {{ $t("home.most_popular_car_rentals") }}
      </h2>
      <p class="w-75% text-[16px]">
        {{ $t("home.most_popular_car_rentals_description") }}
      </p>
      <div class="mt-5">
        <swiper
          :cssMode="true"
          :navigation="{}"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }"
          :mousewheel="true"
          :keyboard="true"
          :spaceBetween="10"
          :loop="true"
          :slidesPerGroup="1"
          :modules="modules"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="car in cars" :key="car.id" class="py-4 px-3">
            <CarCard :car="car" :fullWidth="true" />
          </swiper-slide>

          <!-- loading -->
          <swiper-slide class="py-4 px-3" v-if="!fetchErorr && !cars">
            <div
              class="w-full h-[480px] animate-pulse rounded-3xl custom-shadow pt-10 bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all"
            >
              <div
                class="w-full p-1 h-1/2 bg-Placeholder_color rounded-2xl"
              ></div>
              <div class="w-1/2 p-[6px] bg-Placeholder_color rounded-2xl"></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-3 h-10 bg-Placeholder_color rounded-3xl"
              ></div>
            </div>
          </swiper-slide>
          <swiper-slide class="py-4 px-3" v-if="!fetchErorr && !cars">
            <div
              class="w-full h-[480px] animate-pulse rounded-3xl custom-shadow pt-10 bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all"
            >
              <div
                class="w-full p-1 h-1/2 bg-Placeholder_color rounded-2xl"
              ></div>
              <div class="w-1/2 p-[6px] bg-Placeholder_color rounded-2xl"></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-3 h-10 bg-Placeholder_color rounded-3xl"
              ></div>
            </div>
          </swiper-slide>
          <swiper-slide class="py-4 px-3" v-if="!fetchErorr && !cars">
            <div
              class="w-full h-[480px] animate-pulse rounded-3xl custom-shadow pt-10 bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all"
            >
              <div
                class="w-full p-1 h-1/2 bg-Placeholder_color rounded-2xl"
              ></div>
              <div class="w-1/2 p-[6px] bg-Placeholder_color rounded-2xl"></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-1 h-1 bg-Placeholder_color rounded-2xl"
              ></div>
              <div
                class="w-full p-3 h-10 bg-Placeholder_color rounded-3xl"
              ></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------rent your perfect car-------------------------------- -->

  <section
    class="bg-bg_color pt-0 pb-24 my-0 animate-fade-up text-primary_color"
  >
    <div class="mx-4 md:mx-20">
      <div
        class="bg-white rounded-3xl py-10 custom-shadow ps-12 bg-[radial-gradient(circle_at_right,_rgba(219,234,254,1)_0%,_rgba(219,234,254,0)_70%)]"
      >
        <div
          :class="'md:bg-right-bottom bg-no-repeat px-0 pt-4 lg:pt-12 pb-0 '"
        >
          <h1 class="lg:text-6xl md:text-4xl text-2xl lg:mb-24 mb-10">
            {{ $t("home.rent_perfect_car") }}
          </h1>
          <router-link
            to="/cars"
            class="bg-primary_color hover:bg-primary_hover text-white px-12 py-2.5 my-5 rounded-3xl"
            >{{ $t("home.rent_now") }}</router-link
          >
          <img
            src="@/assets/home-images/rent-car.png"
            alt=""
            :class="
              this.$i18n.locale === 'Ar'
                ? 'lg:block hidden -mt-32 scale-x-[-1] mr-auto mb-0'
                : 'lg:block hidden -mt-32 ml-auto mb-0'
            "
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ---------------------------------why choose us--------------------------- -->

  <section
    class="bg-bg_color pt-0 pb-24 my-0 animate-fade-up text-primary_color"
  >
    <div class="mx-4 md:mx-20">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2">
          <h1 class="text-4xl">{{ $t("home.why_choose_us") }}</h1>
          <img src="../assets/home-images/whyus.png" alt="" />
        </div>

        <div class="flex w-full lg:w-1/2 flex-wrap">
          <div
            :class="
              this.$i18n.locale === 'Ar'
                ? 'sm:w-1/2 w-full p-1 text-center sm:text-right'
                : 'sm:w-1/2 w-full p-1 text-center sm:text-left'
            "
          >
            <div
              class="py-6 px-4 bg-white hover:bg-card_hover h-[180px] rounded-2xl custom-shadow"
            >
              <h3 class="text-[24px] font-medium mb-2">
                {{ $t("home.unmatched_selection") }}
              </h3>
              <p class="text-Paragraph_color text-[12px]">
                {{ $t("home.unmatched_selection_description") }}
              </p>
            </div>
          </div>

          <div
            :class="
              this.$i18n.locale === 'Ar'
                ? 'sm:w-1/2 w-full p-1 text-center sm:text-right'
                : 'sm:w-1/2 w-full p-1 text-center sm:text-left'
            "
          >
            <div
              class="py-6 px-4 bg-white hover:bg-card_hover h-[180px] rounded-2xl custom-shadow"
            >
              <h3 class="text-[24px] font-medium mb-2">
                {{ $t("home.competitive_pricing") }}
              </h3>
              <p class="text-Paragraph_color text-[12px]">
                {{ $t("home.competitive_pricing_description") }}
              </p>
            </div>
          </div>

          <div
            :class="
              this.$i18n.locale === 'Ar'
                ? 'sm:w-1/2 w-full p-1 text-center sm:text-right'
                : 'sm:w-1/2 w-full p-1 text-center sm:text-left'
            "
          >
            <div
              class="py-6 px-4 bg-white hover:bg-card_hover h-[180px] rounded-2xl custom-shadow"
            >
              <h3 class="text-[24px] font-medium mb-2">
                {{ $t("home.convenient_locations") }}
              </h3>
              <p class="text-Paragraph_color text-[12px]">
                {{ $t("home.convenient_locations_description") }}
              </p>
            </div>
          </div>

          <div
            :class="
              this.$i18n.locale === 'Ar'
                ? 'sm:w-1/2 w-full p-1 text-center sm:text-right'
                : 'sm:w-1/2 w-full p-1 text-center sm:text-left'
            "
          >
            <div
              class="py-6 px-4 bg-white hover:bg-card_hover h-[180px] rounded-2xl custom-shadow"
            >
              <h3 class="text-[22px] font-medium mb-2">
                {{ $t("home.flexible_rental_options") }}
              </h3>
              <p class="text-Paragraph_color text-[12px]">
                {{ $t("home.flexible_rental_options_description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import SearchCard from "../components/SearchCard.vue";
import CarCard from "../components/CarCard.vue";

// Import Swiper core and modules
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default {
  components: { Swiper, SwiperSlide, SearchCard, CarCard },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
  data() {
    return {
      cars: "",
      ratingArray: [],
      fetchErorr: false,
    };
  },
  created() {
    axios
      .get("https://carrento-9ea05-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        this.cars = Object.values(response.data);
        this.cars.sort((a, b) => b.ratingCount - a.ratingCount);
        this.cars = this.cars.slice(0, 5);
      })
      .catch((e) => {
        this.fetchErorr = e;
      });
  },
  mounted() {
    this.observeElements();
  },
  methods: {
    scrollToSearchCard() {
      const searchcard = document.getElementById("search-card");
      searchcard.scrollIntoView({ behavior: "smooth" });
    },
    observeElements() {
      const options = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      }, options);

      // Target elements to animate
      const animatedElements = document.querySelectorAll(".animate-fade-up");

      animatedElements.forEach((el) => {
        observer.observe(el);
      });
    },
  },
};
</script>

<style scoped></style>
