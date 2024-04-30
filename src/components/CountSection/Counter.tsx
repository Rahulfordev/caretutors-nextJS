"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import total_apply from "../../../public/assets/landing_page/total_apply.png";
import total_jobs from "../../../public/assets/landing_page/total_jobs.png";
import total_happy from "../../../public/assets/landing_page/total_happy.png";
import total_rating from "../../../public/assets/landing_page/total_rating.png";

const Counter = () => {
  return (
    <section className="w-full left-0 right-0 bg-secondary-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-color rounded-3xl shadow-lg shadow-blue-500/50">
          <div className="px-16 pt-10 pb-7">
            <div className="flex items-center gap-12 justify-between flex-wrap">
              <div className="flex items-center gap-5">
                <Image src={total_apply} alt="total_apply" />
                <div className="text-white flex flex-col gap-2">
                  <h3 className="text-3xl">
                    <CountUp end={329047} />
                  </h3>
                  <p className="text-sm">Active Tutors</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Image src={total_jobs} alt="total_apply" />
                <div className="text-white flex flex-col gap-2">
                  <h3 className="text-3xl">
                    <CountUp end={2293} />
                  </h3>
                  <p className="text-sm">Live Tuition Jobs</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Image src={total_happy} alt="total_apply" />
                <div className="text-white flex flex-col gap-2">
                  <h3 className="text-3xl">
                    <CountUp end={117057} />
                  </h3>
                  <p className="text-sm">Happy Students</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Image src={total_rating} alt="total_apply" />
                <div className="text-white flex flex-col gap-2">
                  <h3 className="text-3xl">
                    <CountUp end={4.8} />
                    /5
                  </h3>
                  <p className="text-sm">Average Tutor Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row flex-wrap justify-center  items-center px-0 md:px-4 pb-6 text-white">
            <div className="flex-auto w-30">Live Tuition Jobs</div>
            <div className="flex-auto w-full lg:w-80">
              <>
                <Swiper
                  rewind={true}
                  navigation={true}
                  modules={[Navigation]}
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
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="border border-white px-12 cursor-pointer py-2 text-white rounded-xl">
                      <p className="text-center">Seeb(2)</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-white px-12 cursor-pointer py-2 text-white rounded-xl">
                      <p className="text-center">Ajman(5)</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-white px-12 cursor-pointer py-2 text-white rounded-xl">
                      <p className="text-center">Mecca(1)</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-white px-15 cursor-pointer py-2 text-white rounded-xl">
                      <p className="text-center">Al Kuwait(3)</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-white px-12 cursor-pointer py-2 text-white rounded-xl">
                      <p className="text-center">Rohim</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="border border-white px-6 cursor-pointer py-2 text-white rounded-xl">
                      <p className="text-center">Abu Dhabi(5)</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
