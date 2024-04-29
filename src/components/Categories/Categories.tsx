"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import cate1 from "../../../public/assets/category/Admmission.png";
import cate2 from "../../../public/assets/category/Arabic.png";
import cate3 from "../../../public/assets/category/Arts.png";
import cate4 from "../../../public/assets/category/Bangla.png";
import cate5 from "../../../public/assets/category/English_Medium.png";
import cate6 from "../../../public/assets/category/English_Version.png";
import cate7 from "../../../public/assets/category/Language.png";
import cate8 from "../../../public/assets/category/Professional_Skill.png";
import cate9 from "../../../public/assets/category/Special_Skill.png";
import cate10 from "../../../public/assets/category/Test_Preparation.png";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import Title from "../common/Title/Title";

export default function Categories() {
  return (
    <div className="bg-secondary-color">
      <div className="max-w-6xl mx-auto px-4 pb-11 mt-10">
        <div className="pt-8 mb-10">
          <Title title="Serving Categories" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: -30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate1} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Admmission Tast
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate2} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Religious Studies
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate3} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Arts
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate4} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Bangla Medium
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate5} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                English Medium
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate6} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                English Version
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate7} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Language Learning
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate8} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Professional Skill Development
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate9} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Special Skill Development
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-4 rounded-lg shadow-md w-64 h-80">
              <Image src={cate10} alt="news1" />
              <h3 className="text-center text-lg font-semibold text-gray-900 py-4">
                Test Preparation
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
