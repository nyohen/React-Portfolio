import React from "react";
import web1 from "../public/web1.png";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section>
      <div className="pt-10 text-center">
        <h3 className="text-3xl  dark:text-white">Portfolio</h3>
        <p className="text-lg py-2 max-w-lg mx-auto leading-8 text-gray-80 dark:text-gray-400">
          These are all the projects I have completed in my free time. The
          languages I have learned so far are <br />
          <span className="text-teal-500">
            HTML, CSS, Javascript(React, Angular), C++, Java, MySQL
          </span>
        </p>
      </div>

      <div className="flex gap-10 py-10">
        <div
          className="
            max-w-lg
            max-h-lg
            mx-auto
            overflow-hidden 
            cursor-pointer 
            rounded-xl relative group"
        >
          <div
            className="rounded-xl z-50 
              opacity-0 group-hover:opacity-100 transition 
              duration-300 
              ease-in-out 
              cursor-pointer 
              absolute
             from-black/80 to-transparent bg-gradient-to-t 
                 inset-x-0 -bottom-2 pt-30
             text-white flex items-end"
          >
            <div>
              <div
                className="transform-gpu  
                  p-4 space-y-3 text-xl 
                  group-hover:opacity-100 
                  group-hover:translate-y-0 translate-y-4 
                  pb-10 transition duration-300 ease-in-out"
              >
                <div className="font-bold text-teal-600">
                  To-Do List React App
                </div>

                <div className="opacity-60 text-sm ">
                  Front-End: HTML, CSS, React.js, Redux, Framer Motion
                </div>
              </div>
            </div>
          </div>

          <Image
            alt=""
            className="object-contain bg-gray-50 dark:bg-slate-50 w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
            src={web1}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}
