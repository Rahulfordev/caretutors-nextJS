import React from "react";
import Button from "../common/Button/Button";

import banner01 from "../../../public/assets/banners/01.png";
import banner02 from "../../../public/assets/banners/02.png";
import banner03 from "../../../public/assets/banners/03.png";
import banner04 from "../../../public/assets/banners/04.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-24 md:mt-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-around">
        <div>
          <h2 className="font-bold text-4xl">Hire the Right Tutor Today</h2>
          <p className="font-semibold text-2xl pt-4 pb-3">
            Book one-on-one lessons with verified tutors in your area
          </p>
          <Button text=" Hire a Tutor (It’s Free!) " />
          <p className="text-gray-500 pt-1">
            Want to become a Tutor?{" "}
            <a href="#" className="text-color font-semibold">
              Sign Up
            </a>{" "}
            now
          </p>
        </div>
        <div className="allimage grid grid-cols-2 gap-1 relative lg:mt-2">
          <Image
            src={banner01}
            className="rounded-tl-[12rem] image2 w-[190px]"
            alt="banner01"
          />
          <Image src={banner02} className="image1 w-[180px]" alt="banner02" />
          <Image src={banner03} className="image1 w-[180px]" alt="banner03" />
          <Image
            src={banner04}
            className="rounded-br-[12rem] image2 w-[190px]"
            alt="banner04"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
