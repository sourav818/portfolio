"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

/* ✅ FIXED: lottie-react default export + SSR disabled */
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Python", "C", "C++", "HTML", "CSS"];
  const rightLists = ["Javascript", "MySQL", "IBM Tools", "AI / ML", "NLP"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("souravpaul043@gmail.com");
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        "relative row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 hover:shadow-xl shadow-input dark:shadow-none flex flex-col",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="relative h-full">
        {/* ✅ FULL CARD IMAGE */}
        {img && id !== 5 && (
          <img
            src={img}
            alt={String(title)}
            className={cn(
              "absolute inset-0 w-full h-full object-cover rounded-3xl",
              imgClassName
            )}
          />
        )}

        {/* Dark overlay for readability */}
        {img && <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl" />}

        {/* Spare image */}
        {spareImg && id !== 5 && (
          <img
            src={spareImg}
            alt="spare"
            className="absolute right-0 bottom-0 w-full opacity-40 z-10"
          />
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            `relative z-20 flex flex-col p-6 lg:p-10 transition duration-200 group-hover/bento:translate-x-2 ${
              id === 2 ? "pb-32" : ""
            }`
          )}
        >
          {/* ✅ HIDE DESCRIPTION ONLY FOR SKILLS (id === 3) */}
          {description && id !== 3 && (
            <p className="font-sans font-extralight text-sm lg:text-base leading-relaxed text-[#E2E4F3] max-w-md">
              {description}
            </p>
          )}

          <h2 className="mt-2 font-sans text-lg lg:text-3xl font-bold max-w-lg text-white">
            {title}
          </h2>

          {/* Globe */}
          {id === 2 && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center z-0">
              <GridGlobe />
            </div>
          )}

          {/* Skill Set */}
          {id === 3 && (
            <div className="flex gap-4 mt-6">
              <div className="flex flex-col gap-3 lg:gap-6">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 text-xs lg:text-base rounded-lg bg-[#10132E] text-center opacity-80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 lg:gap-6">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 text-xs lg:text-base rounded-lg bg-[#10132E] text-center opacity-80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Copy email */}
          {id === 6 && (
            <div className="mt-6 relative">
              {copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    animationData={animationData}
                    autoplay
                    loop={false}
                    style={{ height: 200, width: 400 }}
                  />
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>

        {/* Gradient animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 z-0" />
          </BackgroundGradientAnimation>
        )}
      </div>
    </div>
  );
};
