import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import deved from "../public/web-dev2.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="text-center p-10">
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-teal-600 relative inline-block">
          <h2 className="relative text-white text-5xl py-2 font-medium md:text-6xl">
            Noel Yohannes Ghebremeskel
          </h2>
        </span>

        <h3 className="text-2xl pt-5 md:text-3xl dark:text-white">
          Developer and designer.
        </h3>

        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
          Current Computer Programming & Analysis Student at{" "}
          <b>Seneca College of Applied Arts and Technology</b> situated in
          Toronto, Ontario
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 pt-2 text-gray-600">
        <a href="https://www.linkedin.com/in/noel-yohannes/">
          <AiFillLinkedin className="hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 animate-bounce " />
        </a>

        <a href="https://github.com/nyohen">
          <AiFillGithub className="hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 animate-bounce" />
        </a>

        <a href="mailto: yohannesghebremesk@gmail.com">
          <AiFillMail className="hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 animate-bounce" />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 max-h-50 max-w-50">
        <Image
          src={deved}
          className="mb-12"
          alt="profile-pic"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
