"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Animation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="flex justify-center items-center mt-16" data-aos="fade-up">
      <div className="w-full">
        <Image
          className="w-full"
          src="/deer-6.png"
          width={1400}
          height={700}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Animation;
