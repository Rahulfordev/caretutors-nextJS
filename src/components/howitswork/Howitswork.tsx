"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import tutor01 from "../../../public/assets/forTutor/tutor01.png";
import tutor02 from "../../../public/assets/forTutor/tutor02.png";
import tutor03 from "../../../public/assets/forTutor/tutor03.png";
import tutor04 from "../../../public/assets/forTutor/tutor04.png";
import tutor05 from "../../../public/assets/forTutor/tutor05.png";
import Title from "../common/Title/Title";
import { off } from "process";

const Howitswork: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef1 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<string>("0px"); 
  const [offset2, setOffset2] = useState<string>("0px"); 
  const [offset3, setOffset3] = useState<string>("0px"); 

  useEffect(() => {
    const handleScroll = () => {
      if (
        elementRef3.current &&
        elementRef3.current.getBoundingClientRect().y < 370
      ) {
        setOffset3(`${elementRef3.current.getBoundingClientRect().y}px`); // Convert to string
      } else if (
        elementRef1.current &&
        elementRef1.current.getBoundingClientRect().y < 375
      ) {
        setOffset2(`${elementRef1.current.getBoundingClientRect().y}px`); // Convert to string
      } else if (
        elementRef.current &&
        elementRef.current.getBoundingClientRect().y < 380
      ) {
        setOffset(`${elementRef.current.getBoundingClientRect().y}px`); // Convert to string
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(offset3);
  }, [offset3]);

  return (
    <div className="bg-secondary-color">
      <div className="max-w-7xl mx-auto mt-6 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Title title="How does it work for tutors?" />
        </div>
        <div className="flex md:block flex-col justify-center items-center">
          <div
            ref={elementRef}
            className="w-[100%] md:w-[55%] p-4 rounded-xl flex border-color gap-6 items-center  mb-[2.7rem] relative"
          >
            <Image src={tutor01} alt="tutor01" />
            <div>
              <h2 className="text-color font-bold text-base sm:text-xl md:text-2xl">
                Submit Your Tutor Request
              </h2>
              <p>Fill out all the required fields and submit your request.</p>
            </div>
            <div>
              <svg
                className="hidden md:block svg1 absolute h-40 top-[50%] left-[100%]"
                viewBox="0 0 229 173"
                fill="none"
              >
                <path
                  d="M0 3H152C192.869 3 226 36.1309 226 77V173"
                  stroke="#0675C1"
                  stroke-opacity="0.95"
                  stroke-width="4"
                  stroke-dashoffset={`${offset}`}
                  stroke-dasharray="364.2552490234375px 364.2552490234375px"
                ></path>
              </svg>
            </div>
          </div>
          <div
            ref={elementRef1}
            className="w-[100%] md:w-[55%] p-4 rounded-xl flex border-color gap-6 items-center  mb-[3.2rem] relative md:ml-auto"
          >
            <Image src={tutor02} alt="tutor01" />
            <div>
              <h2 className="text-color font-bold text-base sm:text-xl md:text-2xl">
                Submit Your Tutor Request
              </h2>
              <p>Fill out all the required fields and submit your request.</p>
            </div>
            <svg
              className="hidden md:block svg2 absolute h-40 top-[54%] right-[100%]"
              viewBox="0 0 229 173"
              fill="none"
            >
              <path
                d="M229 3H77C36.1309 3 3.00001 36.1309 3.00001 77V173"
                stroke="#0675C1"
                stroke-opacity="0.95"
                stroke-width="4"
                stroke-dashoffset={`${offset2}`}
                stroke-dasharray="364.2552490234375px 364.2552490234375px"
              ></path>
            </svg>
          </div>
          <div
            ref={elementRef3}
            className="w-[100%] md:w-[55%] p-4 rounded-xl flex border-color gap-6 items-center  mb-[2.7rem] relative"
          >
            <Image src={tutor03} alt="tutor01" />
            <div>
              <h2 className="text-color font-bold text-base sm:text-xl md:text-2xl">
                Submit Your Tutor Request
              </h2>
              <p>Fill out all the required fields and submit your request.</p>
            </div>
            <svg
              className=" hidden md:block svg1 absolute h-40 top-[50%] left-[100%]"
              viewBox="0 0 229 173"
              fill="none"
            >
              <path
                d="M0 3H152C192.869 3 226 36.1309 226 77V173"
                stroke="#0675C1"
                stroke-opacity="0.95"
                stroke-width="4"
                stroke-dashoffset={`${offset3}`}
                stroke-dasharray="364.2552490234375px 364.2552490234375px"
              ></path>
            </svg>
          </div>
          <div className="w-[100%] md:w-[55%] p-4 rounded-xl flex border-color gap-6 items-center  mb-[3.2rem] relative md:ml-auto">
            <Image src={tutor04} alt="tutor01" />
            <div>
              <h2 className="text-color font-bold text-base sm:text-xl md:text-2xl">
                Submit Your Tutor Request
              </h2>
              <p>Fill out all the required fields and submit your request.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitswork;
