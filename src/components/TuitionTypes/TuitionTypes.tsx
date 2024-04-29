import React from "react";
import Title from "../common/Title/Title";
import Image from "next/image";

import homeTuitor from "../../../public/assets/landing_page/hometutor.svg";
import groupclass from "../../../public/assets/landing_page/groupclass.svg";
import onlinetutor from "../../../public/assets/landing_page/onlinetutor.svg";
import classpackage from "../../../public/assets/landing_page/package.svg";

const TuitionTypes = () => {
  return (
    <section className="bg-secondary-color">
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="pb-10 pt-5">
          <Title title="Tuition Types" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 bordercursor-pointer transition-all duration-300 ease-in-out border-color rounded-lg p-4 hover:bg-white">
            <div>
              <Image src={homeTuitor} alt={"homeTuitor"} />
            </div>
            <div>
              <h2 className="text-blue-500 text-xl font-semibold">
                Home Tutoring
              </h2>
              <p className="max-w-[400px]">
                Home tutoring allows students to learn various subjects in their
                own home.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 bordercursor-pointer transition-all duration-300 ease-in-out border-color rounded-lg p-4 hover:bg-white">
            <div>
              <Image src={groupclass} alt={"homeTuitor"} />
            </div>
            <div>
              <h2 className="text-blue-500 text-xl font-semibold">
                Group Tutoring
              </h2>
              <p className="max-w-[400px]">
                Group tutoring allows students to learn together and solve
                problems at an affordable cost.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 bordercursor-pointer transition-all duration-300 ease-in-out border-color rounded-lg p-4 hover:bg-white">
            <div>
              <Image src={onlinetutor} alt={"onlinetutor"} />
            </div>
            <div>
              <h2 className="text-blue-500 text-xl font-semibold">
                Online Tutoring
              </h2>
              <p className="max-w-[400px]">
                Find the best tutors from anywhere and take online classes by
                using tools such as Google Meet, Zoom, Skype, and more.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 bordercursor-pointer transition-all duration-300 ease-in-out border-color rounded-lg p-4 hover:bg-white">
            <div>
              <Image src={classpackage} alt={"homeTuitor"} />
            </div>
            <div>
              <h2 className="text-blue-500 text-xl font-semibold">
                Home Tutoring
              </h2>
              <p className="max-w-[400px]">
                Package tutoring helps a students to complete their studies
                within a specific time frame.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionTypes;
