import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import imggs from "../static/imgg.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <div className="w-[100vw] h-[330px] my-5 bg-gray-300">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay:10000,
            pauseOnMouseEnter:true
          }}
          loop={true}
        >
          <SwiperSlide>
            <h1><img src={imggs} alt="" /></h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1><img src={imggs} alt="" /></h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1><img src={imggs} alt="" /></h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
