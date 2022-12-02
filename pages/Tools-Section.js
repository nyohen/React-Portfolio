/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function Tools() {
  return (
    <section>
      <div className="pt-20 text-center">
        <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-600">
          Tools/Technologies
        </h3>
        <p className="text-lg py-2 max-w-2xl mx-auto leading-8 text-gray-80 dark:text-gray-400">
          These are the various languages, and tools that I have used during my
          studies at Seneca College of Applied Arts and Technology for the CPA
          program <br />
          <br /> I have begun studying C in my freshman year, only to move
          towards web development languages such as Javascript and it's related
          frameworks(React, Angular).
        </p>
      </div>

      <div className="lg:flex pt-10 ">
        <div className="mx-auto max-w-md text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-900">
          <Image
            src={design}
            className="mx-auto"
            alt="prop"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
            Front-End Development
          </h3>
          <p className="py-2 text-black dark:text-gray-300">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Tools/Technologies I used</h4>
          <p className="text-black dark:text-gray-300 py-1">HTML/CSS</p>
          <p className="text-black dark:text-gray-300 py-1">
            Javascript(React, Angular)
          </p>
          <p className="text-black dark:text-gray-300 py-1">Java</p>
        </div>

        <div className="mx-auto max-w-md text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-900">
          <Image
            src={code}
            className="mx-auto"
            alt="prop"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
            Back-End Development
          </h3>
          <p className="py-2 text-black dark:text-gray-300">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Tools/Technologies I used</h4>
          <p className="text-black dark:text-gray-300 py-1">MySQL</p>
          <p className="text-black dark:text-gray-300 py-1">MongoDB</p>
          <p className="text-black dark:text-gray-300 py-1">PostMan</p>
        </div>
      </div>
    </section>
  );
}
