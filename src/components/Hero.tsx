"use client";
import Link from "next/link";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursroImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white background-banner py-[72px] 2xl:py-[120px] relative overflow-clip">
      <div className="absolute h-[375px]  w-[750px] rounded-[100%] sm:w-[1536px] sm:h-[768px] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] background-semicircle top-[calc(100%-96px)] sm:py-24 sm:top-[calc(100%-120px)]  lg:w-[2400px] lg:h-[1200px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30 "
          >
            <span className="background-text text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold  tracking-tighter text-center inline-flex  ">
              One task <br />
              at a time
            </h1>
            <motion.div
              className="absolute width-[200px] right-[476px] top-[108px] hidden sm:inline "
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursroImage}
                className="max-w-none"
                alt="send messages imagen"
                draggable="false"
              />
            </motion.div>

            <motion.div className=" width-[200px] heigth-[200px] absolute left-[498px] top-[56px] hidden sm:inline" drag dragSnapToOrigin>
              <Image
                src={messageImage}
                className="max-w-none"
                alt="messages images "
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
