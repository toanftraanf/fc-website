import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/chanfc_logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Chan FC
          </span>
        </a>

        {/* Centered Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer mx-8 hover:text-purple-500 transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#skills"
              className="cursor-pointer mx-8 hover:text-purple-500 transition-colors"
            >
              Đội hình
            </a>
            <a
              href="#projects"
              className="cursor-pointer mx-8 hover:text-purple-500 transition-colors"
            >
              Thi đấu
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
