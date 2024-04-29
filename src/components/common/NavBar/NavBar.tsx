"use client";
import { useState } from "react";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import LogoBlue from "../../../../public/assets/caretutors-blue.svg";
import LogoWhite from "../../../../public/assets/caretutors-white.svg";
import Button from "../Button/Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="boxshadow">
        <div className="hidden md:block bg-color md:py-2">
          <div className="hidden md:flex justify-between max-w-7xl mx-auto px-4">
            <div className="flex space-x-4">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a className="font-semibold text-sm flex items-center gap-2">
                  <FaPhoneAlt /> <span>+88 09613 441122</span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex gap-4 items-center">
              <a className="text-whit p-1 text-lg cursor-pointer rounded-full border-white border text-white text-hover hover:bg-white">
                <FaFacebookF />
              </a>

              <a className="text-whit p-1 text-lg cursor-pointer rounded-full border-white border text-white text-hover hover:bg-white">
                <FaYoutube />
              </a>

              <a className="text-whit p-1 text-lg cursor-pointer rounded-full border-white border text-white text-hover hover:bg-white">
                <FaLinkedinIn />
              </a>

              <a className="text-whit p-1 text-lg cursor-pointer rounded-full border-white border text-white text-hover hover:bg-white">
                <FaInstagram />
              </a>

              {/* Add more links as needed */}
            </div>
          </div>
        </div>
        <div className="bg-color nav-secondary-color py-2">
          <div className="flex justify-between max-w-7xl mx-auto px-4">
            <div className="flex space-x-4">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a className="">
                  <Image
                    src={LogoBlue}
                    className="hidden md:block"
                    alt={"LogoBlue"}
                  />
                  <Image
                    src={LogoWhite}
                    className="md:hidden"
                    alt={"LogoWhite"}
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a className="text-gray-700 text-hover px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Sign In
              </a>

              <a className="text-gray-700 text-hover px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Job Board
              </a>
              <Button text="Become a Tutor" />
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center cursor-pointer text-white focus:outline-non focus:text-white"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-blue-100 px-2 pt-[65px] pb-3 space-y-1 sm:px-3 z-50">
            <a className="text-gray-700 text-hover px-3 rounded-md text-base font-medium cursor-pointer block">
              Sign In
            </a>

            <a className="text-gray-700 text-hover px-3 py-1 rounded-md text-base font-medium cursor-pointer block">
              Job Board
            </a>
            <Button text="Become a Tutor" />
            <div className="flex flex-col  px-3">
              <div className="flex space-x-4">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <a className="font-semibold text-sm flex items-center gap-2 text-color py-2">
                    <FaPhoneAlt /> <span>+88 09613 441122</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <a className="text-whit p-1 text-lg cursor-pointer rounded-full icon">
                  <FaFacebookF />
                </a>

                <a className="text-whit p-1 text-lg cursor-pointer rounded-full icon">
                  <FaYoutube />
                </a>

                <a className="text-whit p-1 text-lg cursor-pointer rounded-full icon">
                  <FaLinkedinIn />
                </a>

                <a className="text-whit p-1 text-lg cursor-pointer rounded-full icon">
                  <FaInstagram />
                </a>

                {/* Add more links as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
