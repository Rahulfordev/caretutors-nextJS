/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa";

import user1 from "../../../public/assets/testimonial_user_image/01.jpeg";
import user2 from "../../../public/assets/testimonial_user_image/02.jpeg";
import user3 from "../../../public/assets/testimonial_user_image/03.jpeg";
import user4 from "../../../public/assets/testimonial_user_image/04.jpeg";
import Title from "../common/Title/Title";

const TestimonialUser = () => {
  return (
    <div className="mt-4 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <Title title="What Some Awesome Tutor Says about Us" />
          <p className="text-center py-2">Become a tutor and start earning!</p>
          <button className="flex items-center gap-2 mx-auto button px-4 py-1 text-sm md:px-6 md:py-2">
            Become a Tutor <FaArrowRight />
          </button>
        </div>
        <div className="mt-6">
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
                slidesPerView: 1,
                spaceBetween: -80,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: -80,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: -200,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user1}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user2}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user3}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user4}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user1}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user2}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user3}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-secondary-color p-12 w-[80%] rounded-2xl mb-16">
                <div className="mt-[-2%] ml-[20%] sm:ml-[37%] lg:ml-[42%]">
                  <Image
                    src={user4}
                    width={"150"}
                    className="rounded-full border-4 border-blue-500 p-1"
                    alt="user1"
                  />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-bold text-color my-4 mx-auto">
                    Sajid Hayat
                  </h3>
                  <p className="text-center text-color">
                    Ahsanullah University of Science and Technology (AUST)
                  </p>
                  <p className="text-color before:content-['\275D'] before:text-4xl">
                    {/* <FaQuoteLeft className="text-color text-4xl" /> */}
                    Caretutors is the best platform for finding new tutoring
                    opportunities amidst the busyness of one's educational life.
                    Their user-friendly app, website, and dedicated community
                    efforts have set them apart. May the relationship with
                    Caretutors be long-lasting, and I extend my best wishes to
                    everyone who is associated with them.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialUser;
