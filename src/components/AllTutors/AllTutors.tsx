import Image from "next/image";
import React from "react";

import appqrcode from "../../../public/assets/caretutors-app-qr-code.png";
import playStore from "../../../public/assets/landing_page/playStore.svg";
import appStore from "../../../public/assets/landing_page/appStore.svg";

const AllTutors = () => {
  return (
    <div className="bg-[url('/assets/app-branding_background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-wrap justify-center sm:w-[50%]">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-white text-center text-4xl font-bold">
              1 Platform for All Tutors
            </h1>
            <div className="relative mx-auto">
              <Image
                src={appqrcode}
                width={"280"}
                className="rounded-lg"
                alt="appqrcode"
              />
              <p className="absolute text-white bg-orange-500 rounded-md py-2 px-12 top-64 left-6 text-center">
                Scan to Download
              </p>
            </div>
            <div className="flex gap-4 pt-4 mx-auto">
              <Image
                src={playStore}
                width={"130"}
                className="cursor-pointer"
                alt="playStore"
              />
              <Image
                src={appStore}
                width={"130"}
                className="cursor-pointer"
                alt="appStore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTutors;
