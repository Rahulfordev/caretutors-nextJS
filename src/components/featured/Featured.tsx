"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import news1 from "../../../public/assets/newsLogo/news01.png";
import news2 from "../../../public/assets/newsLogo/news02.png";
import news3 from "../../../public/assets/newsLogo/news03.png";
import news4 from "../../../public/assets/newsLogo/news04.png";
import news5 from "../../../public/assets/newsLogo/news05.png";
import news6 from "../../../public/assets/newsLogo/news6.png";
import news7 from "../../../public/assets/newsLogo/news7.png";
import news8 from "../../../public/assets/newsLogo/news08.png";
import news9 from "../../../public/assets/newsLogo/news9.png";
import news10 from "../../../public/assets/newsLogo/news10.png";
import news11 from "../../../public/assets/newsLogo/news11.png";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import Title from "../common/Title/Title";

export default function Featured() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-10 mt-10">
      <div className="mb-4 md:mb-3">
        <Title text="We were featured on" />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={news1} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news2} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news3} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news4} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news5} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news6} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news7} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news8} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news9} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news10} alt="news1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={news11} alt="news1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
