import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Updated import for Swiper v8
import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  const puppies = [
    { src: "/home/dog1.png", alt: "Puppy 1" },
    { src: "/home/dog2.png", alt: "Puppy 2" },
    { src: "/home/dog3.png", alt: "Puppy 3" },
    { src: "/home/dog2.png", alt: "Puppy 4" },
    { src: "/home/dog4.png", alt: "Puppy 5" },
    { src: "/home/dog1.png", alt: "Puppy 6" },
    { src: "/home/dog3.png", alt: "Puppy 3" },
    { src: "/home/dog2.png", alt: "Puppy 4" },
    { src: "/home/dog4.png", alt: "Puppy 5" },
    { src: "/home/dog1.png", alt: "Puppy 6" },
  ];

  // const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[600px] font-montserrat"
        style={{
          backgroundImage: "url('/home/banner_bg.png')",
        }}
      >
        {/* Overlay for dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 sm:px-8 lg:px-16">
          {/* Left Content */}
          <div className="text-white max-w-[700px] space-y-4 sm:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#EBDDAE] font-bold leading-tight">

              To Ensure Perfect Service Of Your Puppies.
            </h1>
            <p className="text-[15px] sm:text-[20px] md:text-base text-[#EBDDAE] mt-4 hidden md:block">
              Pellentesque maximus augue orci, quis congue purus iaculison id.
              Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi
              amet diam. Cras eu odio sit amet ipsum cursus for that gone
              pellentesquea. Vestibulum ut aliquet risus. In hac habitasse
              plateajoa dictumst. Nuncet posuere scelerisque justo in accumsan.
            </p>
            <button className="bg-[#EBDDAE] text-[#060608] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-yellow-300 mt-6">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </div>

      {/* our puppies */}
      <div className="flex flex-col items-center bg-gray-100 py-8 mt-2">
        <h2 className="text-[40px] font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
          Our Puppies
          <span className="ml-2 text-yellow-500">
            <img src="/home/style_icon.png" alt="icon" />
          </span>
        </h2>
        <div className="relative max-w-[1100px] mx-auto flex items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            modules={[Navigation]} // Use Navigation module
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 25 },
            }}
          >
            {puppies.map((puppy, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center rounded-lg shadow-sm cursor-pointer bg-white">
                  {/* Box Container */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={puppy.src}
                      alt={puppy.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="custom-swiper-button-prev absolute -left-10 top-1/2 transform -translate-y-1/2 z-5">
            <img
              src="/home/left.png"
              alt="Previous"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
          <div className="custom-swiper-button-next absolute -right-10 top-1/2 transform -translate-y-1/2 z-5">
            <img
              src="/home/right.png"
              alt="Next"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
