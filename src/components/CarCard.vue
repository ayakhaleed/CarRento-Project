<template>
  <div :class="fullWidth ? fullStyle : fixedStyle">
    <div class="rating flex justify-end gap-2 text-primary_color">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path
          :class="
            car.rating >= 1 && car.rating < 3
              ? 'fill-red'
              : car.rating >= 3 && car.rating < 4
              ? 'fill-warning'
              : car.rating >= 4
              ? 'fill-green'
              : 'fill-Paragraph_color'
          "
          d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>

      <p class="text-Paragraph_color font-medium text-[12px]">
        {{ car.rating }}
      </p>
    </div>

    <img src="../assets/Imgerror.png" v-if="imageError" class="w-3/4 m-auto" />
    <img
      v-if="!imageError"
      :class="
        fullWidth ? 'mt-2 h-[180px] w-full' : 'mt-2 h-[180px] max-w-[308px]'
      "
      :src="url"
    />
    <h3
      class="mt-4 text-[18px] font-medium text-start pb-0.5 text-primary_color"
    >
      {{ car.name }}
    </h3>
    <p
      class="text-Paragraph_color text-[11px] text-start pb-2 h-[50px] overflow-hidden"
    >
      {{ car.description }}
    </p>

    <div
      class="flex justify-start flex-wrap pb-4 border-b-[1px] border-gray-300 gap-2 w-full"
    >
      <span v-for="(prop, index) in features" :key="index">
        <div
          v-if="index < 3"
          class="flex gap-1 text-[11px] text-center justify-start w-fit px-1 pt-1"
        >
          <img :src="getImagePath(prop)" alt="" class="w-[13px]" />
          <p class="mt-0.5 text-[10px] text-primary_color">
            {{ $t(`carCard.${prop}`) }}
          </p>
        </div></span
      >
    </div>

    <div class="flex text-[16px] py-3 justify-between text-primary_color">
      <span>{{ $t("carCard.price") }}</span>
      <span
        >{{ car.price }} {{ $t("carCard.currency")
        }}<span class="text-Paragraph_color">{{
          $t("carCard.perDay")
        }}</span></span
      >
    </div>

    <button
      v-if="car.available === true"
      @click="rentNow()"
      class="bg-primary_color hover:bg-primary_hover text-white w-full py-2.5 rounded-3xl"
    >
      {{ $t("carCard.rentNow") }}
    </button>
    <button
      v-if="car.available === false"
      class="bg-Paragraph_color text-white w-full py-2.5 rounded-3xl cursor-not-allowed"
    >
      {{ $t("carCard.notAvailable") }}
    </button>
  </div>
</template>

<script>
import { storage } from "@/firebase";
import { ref, getDownloadURL } from "firebase/storage";
export default {
  name: "CarCard",
  props: ["car", "carKey", "fullWidth"],
  methods: {
    rentNow() {
      if (this.location) {
        this.$store.dispatch("setAllowRent", true);
        this.$router.push(`/cars/${this.car.id}`);
      } else {
        this.$store.dispatch("setAllowRent", false);
        if (this.$route.path === "/") {
          const searchcard = document.getElementById("search-card");
          searchcard.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    getImagePath(prop) {
      try {
        return require(`../assets/CarpageImages/${prop}.svg`);
      } catch (e) {
        console.error(`Image for ${prop} not found.`);
        return ""; // Return a placeholder or empty string if image not found
      }
    },
    setfeatures(features) {
      this.$store.dispatch("setfeatures", features);
    },
  },
  mounted() {
    getDownloadURL(ref(storage, `cars/${this.car.id}`))
      .then((download_url) => (this.url = download_url))
      .catch((e) => {
        this.imageError = e;
      });
  },
  created() {
    this.setfeatures(this.additionalFeatures);
    const location = sessionStorage.getItem("orderLocation");
    const pickUpDate = sessionStorage.getItem("orderPickUp");
    const dropOffDate = sessionStorage.getItem("orderDropOff");
    if (location && pickUpDate && dropOffDate) {
      this.location = location;
      this.pickUpDate = pickUpDate;
      this.dropOffDate = dropOffDate;
    }
  },
  data() {
    return {
      imageError: "",
      url: "",
      location: "",
      pickUpDate: "",
      dropOffDate: "",
      fullStyle:
        " w-full rounded-3xl custom-shadow bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all",
      fixedStyle:
        "w-[308px] rounded-3xl custom-shadow bg-white py-6 px-4 flex flex-col justify-between hover:bg-card_hover hover:scale-105 transition-all",
      additionalFeatures: {
        driver: false,
        protection: false,
        infantSeat: false,
        toddlerSeat: false,
      },
      features: Object.keys(this.car.features).filter(
        (key) => this.car.features[key] === true
      ),
    };
  },
};
</script>
