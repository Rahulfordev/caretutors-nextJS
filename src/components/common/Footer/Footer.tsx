/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import LogoWhite from "../../../../public/assets/caretutors-white.svg";
import playStore from "../../../../public/assets/landing_page/playStore.svg";
import appStore from "../../../../public/assets/landing_page/appStore.svg";
import Guardians_Community from "../../../../public/assets/Guardians_Community.svg";
import Tutor_Community from "../../../../public/assets/Tutor_Community.svg";

const Footer = () => {
  return (
    <footer className="bg-color py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <Image src={LogoWhite} alt={"LogoWhite"} className="mb-8" />
            <p className="text-white">
              Caretutors was founded in 2012. It is Bangladesh's first, most
              trusted and leading online platform for guardians, students, and
              tutors to hire verified tutors or find tuition jobs in 13
              different categories from anywhere in the country.
            </p>
          </div>
          <div className="">
            <h3 className="text-[22px] font-bold text-white mb-8">
              Useful Links
            </h3>
            <ul className="text-white flex flex-col gap-1">
              <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                Terms and Conditions
              </li>
              <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                Become a Tutor
              </li>
              <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                Hire a Tutor
              </li>
              <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                Tutorials
              </li>
              <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                FAQ
              </li>
              <li className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                Caretutors Merchant
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-[22px] font-bold text-white mb-8">Social</h3>
            <div className="text-white">
              <a href="#" className="flex items-center gap-1 pb-1">
                <FaFacebookF />{" "}
                <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Facebook
                </span>
              </a>
              <a href="#" className="flex items-center gap-1 pb-1">
                <FaYoutube />{" "}
                <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Youtube
                </span>
              </a>
              <a href="#" className="flex items-center gap-1 pb-1">
                <FaLinkedinIn />{" "}
                <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Linkedin
                </span>
              </a>
              <a href="#" className="flex items-center gap-1">
                <FaInstagram />{" "}
                <span className="cursor-pointer transition-all duration-300 ease-in-out hover:font-bold">
                  Instagram
                </span>
              </a>
            </div>
            <h2 className="text-[22px] font-bold text-white pt-1">
              Join Our Community
            </h2>
            <div className="flex items-center gap-2 pt-1">
              <Image
                src={Guardians_Community}
                height={"38"}
                className="cursor-pointer"
                alt="Guardians_Community"
              />
              <Image
                src={Tutor_Community}
                height={"38"}
                className="cursor-pointer"
                alt="Tutor_Community"
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-[22px] font-bold text-white mb-8">
              Office Address
            </h3>
            <p className="text-white">
              Level: 2, Rangs Naharz, House: 14, Road: Shahjalal Avenue, Sector
              4, Uttara, Dhaka 1230, Bangladesh
            </p>
            <h2 className="text-[22px] font-bold text-white pt-10">
              Download Our App
            </h2>
            <div className="flex items-center gap-2 pt-1">
              <Image
                src={playStore}
                height={"38"}
                className="cursor-pointer"
                alt="playstore"
              />
              <Image
                src={appStore}
                height={"38"}
                className="cursor-pointer"
                alt="appstore"
              />
            </div>
          </div>
        </div>
        <div className="pt-10">
          <p className="text-center text-base font-bold text-white">
            Copyright © 2012-2024 Caretutors Technologies Ltd. All Rights
            Reserved.
          </p>
          <p className="text-center text-base font-bold text-white">
            Web App Version: 5.15.21
          </p>
          <hr className="border-slate-600 mt-3 mb-4" />
          <p className="text-white text-xs font-normal text-center">
            Disclaimer: Caretutors is an online platform that connects learners
            with tutors. Caretutors do not supply tuition to those seeking
            tuition, nor do Caretutors provide or propose specific tutors to
            those seeking tutors. By considering security issues and using
            technology, Caretutors try to match tutors with learners without
            directly providing the tutoring service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
