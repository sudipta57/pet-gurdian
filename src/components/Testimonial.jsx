import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Testimonial() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Convallis convallis neque elit vitae quisque quis interdum. Sapien amet viverra elementum rhoncus in.",
      name: "Prof. Chris Onalo",
      title: "Registrar, Institute of Credit Administration",
      image: "/home/testi1.png", // Replace with the actual image path
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Convallis convallis neque elit vitae quisque quis interdum. Sapien amet viverra elementum rhoncus in.",
      name: "Prof. Chris Onalo",
      title: "Registrar, Institute of Credit Administration",
      image: "/home/testi2.png", // Replace with the actual image path
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Convallis convallis neque elit vitae quisque quis interdum. Sapien amet viverra elementum rhoncus in.",
      name: "Prof. Chris Onalo",
      title: "Registrar, Institute of Credit Administration",
      image: "/home/testi1.png", // Replace with the actual image path
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Convallis convallis neque elit vitae quisque quis interdum. Sapien amet viverra elementum rhoncus in.",
      name: "Prof. Chris Onalo",
      title: "Registrar, Institute of Credit Administration",
      image: "/home/testi2.png", // Replace with the actual image path
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Convallis convallis neque elit vitae quisque quis interdum. Sapien amet viverra elementum rhoncus in.",
      name: "Prof. Chris Onalo",
      title: "Registrar, Institute of Credit Administration",
      image: "/home/testi1.png", // Replace with the actual image path
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Convallis convallis neque elit vitae quisque quis interdum. Sapien amet viverra elementum rhoncus in.",
      name: "Prof. Chris Onalo",
      title: "Registrar, Institute of Credit Administration",
      image: "/home/testi2.png", // Replace with the actual image path
    },
  ];

  return (
    <div>
      <div
        className="to-black py-10 px-5 md:px-20"
        style={{
          background: "linear-gradient(to right, #F7F6F2 50%, #202020 50%)",
          zIndex: -1,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="md:w-1/3 flex flex-col items-center font-montserrat md:items-start space-y-4">
            <h3 className="text-[#060608] font-montserrat text-lg">
              What People Say
            </h3>
            <h2 className="text-3xl font-bold font-robotoSerif text-[#BF985F]">
              Client Testimonial
            </h2>
            {/* Custom Navigation Buttons */}
            <div className="relative ml-6 mt-8">
              <div className="flex flex-row space-x-6 mt-8 md:ml-4 mr-4">
                <button className="custom-button-prev">
                  <img
                    src="/home/left.png"
                    alt="Left Arrow"
                    className="w-6 h-6"
                  />
                </button>
                <button className="custom-button-next">
                  <img
                    src="/home/right.png"
                    alt="Right Arrow"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section (Slider) */}
          <div className="md:w-2/3 mt-8 md:mt-0 w-full">
            <Swiper
              navigation={{
                nextEl: ".custom-button-next", // Use custom class here
                prevEl: ".custom-button-prev", // Use custom class here
              }}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true} // To allow infinite scrolling
              breakpoints={{
                640: {
                  slidesPerView: 1, // 1 slide for small screens
                },
                768: {
                  slidesPerView: 2, // 2 slides for medium screens (tablets)
                },
                1024: {
                  slidesPerView: 3, // 3 slides for large screens (desktops)
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-black text-[#EBDDAE] font-montserrat p-6 rounded-lg shadow-lg">
                    <p className="text-sm md:text-base mb-4">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center mt-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className=" text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
