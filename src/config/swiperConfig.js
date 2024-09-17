// src/config/swiperConfig.js
import { Pagination, Autoplay } from "swiper/modules";

const swiperSettings = {
  pagination: false,
  loop: true,
  navigation: false,
  slidesPerView: 1,
  centerInsufficientSlides: true,
  autoplay: { delay: 7000, disableOnInteraction: false },
  autoHeight: true,
  speed: 2500,
  modules: [Pagination, Autoplay],
  className: "mySwiper",
};

const infoSection = {
  pagination: false,
  loop: false,
  navigation: false,
  slidesPerView: 1,
  centerInsufficientSlides: true,
  autoplay: { delay: 7000, disableOnInteraction: false },
  autoHeight: true,
  speed: 2500,
  modules: [Pagination, Autoplay],
  className: "mySwiper",
};

export { swiperSettings, infoSection };
