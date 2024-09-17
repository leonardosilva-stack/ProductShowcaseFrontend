import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getBanners } from "../services/api";
import { swiperSettings } from "../config/swiperConfig";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await getBanners();
        const activeBanners = response.data.filter(
          (item) => item.status === true
        );
        setBanners(activeBanners);
      } catch (error) {
        console.error("Error when searching for banners:", error);
      }
    };

    fetchBanners();
  }, []);

  return (
    <section id="home">
      <Swiper
        {...swiperSettings}
        className="shadow-lg xl:mt-[85px] md:mt-[72px] mt-[78px]"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={`http://127.0.0.1:8000/storage/${item.desktopImage}`}
                alt=""
                className="hidden lg:block xl:w-full lg:w-[1920px] lg:h-[650px] w-full object-cover"
              />

              <img
                src={`http://127.0.0.1:8000/storage/${item.tabletImage}`}
                alt=""
                className="hidden md:block lg:hidden w-full object-cover"
              />

              <img
                src={`http://127.0.0.1:8000/storage/${item.mobileImage}`}
                alt=""
                className="block md:hidden w-full object-cover"
              />
              <div className="dark-overlay absolute inset-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
