"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
          dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          {/* 🔥 PROFILE PHOTO WITH MOVING RING */}
          <div className="relative mb-6 group">
            {/* Animated rotating ring */}
            <div
              className="
                absolute -inset-1 rounded-full
                bg-[conic-gradient(from_0deg,#a855f7,#6366f1,#22d3ee,#a855f7)]
                animate-spin-slow
                blur-sm
              "
            />

            {/* Inner image */}
            <div className="relative rounded-full bg-black p-1">
              <img
                src="/sourav.jpg"
                alt="Sourav Paul"
                className="
                  w-32 h-32 md:w-40 md:h-40
                  rounded-full object-cover
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            MCA (AI & DL) • Aspiring Software Developer & Data Analyst
          </p>

          {/* Heading */}
          <TextGenerateEffect
            words="Building Intelligent & Interactive Digital Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Description */}
          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m <span className="font-semibold">Sourav Paul</span>, currently pursuing my
            Master of Computer Applications in Artificial Intelligence and Deep Learning, with
            strong skills in web development, Python programming, and data visualization.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a
              href="/Sourav_Paul_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

        </div>
      </div>

      {/* 🔧 Animation style */}
      <style jsx global>{`
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
