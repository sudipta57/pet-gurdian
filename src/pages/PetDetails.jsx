import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const sliderRef = useRef(null); // Reference to the slider instance

  const images = [
    "/pet-details/img1.png",
    "/pet-details/img2.png",
    "/pet-details/img3.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
    "/pet-details/img4.png",
  ];

  const sliderSettings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide
  };

  return (
    <div className="slider-container relative w-full">
      {/* Main Slider */}
      <Slider ref={sliderRef} {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => sliderRef.current.slickPrev()} // Move to the previous slide
        className="absolute left-0 top-[40%] transform -translate-y-1/2  rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        <img src="/home/l.png" alt="Previous" className="w-10 h-10" />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()} // Move to the next slide
        className="absolute right-0 top-[40%] transform -translate-y-1/2  rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        <img src="/home/r.png" alt="Next" className="w-10 h-10" />
      </button>

      {/* Custom Pagination */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide w-full max-w-[500px]">
          {images.map((thumb, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)} // Navigate to a specific slide
              className={`shrink-0 rounded-md overflow-hidden border-2 ${
                currentSlide === index ? "border-[#F1D092]" : "border-gray-300"
              }`}
            >
              <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-[80px] h-[80px]"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const PetDetails = () => {
  return (
    <div className="font-sans bg-white text-gray-700 mt-2">
      {/* Container */}
      <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row">
        {/* Left Section - Slider */}
        <div className="w-full md:w-1/2">
          <CustomSlider />
          {/* Guarantees */}
          <div className="flex justify-between mt-10 items-center bg-[#FCEED5] p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src="/pet-details/icon1.png"
                alt="Health Guarantee"
                className="w-6 h-6"
              />
              <p className="text-sm font-medium">
                100% health guarantee for pets
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/pet-details/icon2.png"
                alt="Pet ID Guarantee"
                className="w-6 h-6"
              />
              <p className="text-sm font-medium">
                100% guarantee of pet identification
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-6 flex items-center">
            {/* Share Icon Before Text */}
            <img src="/home/shear.png" alt="Share Icon" className="w-6 mr-2" />

            <span className="font-semibold mr-4">Share:</span>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="/pet-details/facebook.png"
                  alt="Facebook"
                  className="w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/pet-details/twitter.png"
                  alt="Twitter"
                  className="w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/pet-details/instagram.png"
                  alt="Instagram"
                  className="w-6"
                />
              </a>
              <a href="#">
                <img
                  src="/pet-details/youTube.png"
                  alt="YouTube"
                  className="w-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Pet Details */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <p className="text-[#667479] font-[400]">
            Home <span className="mx-1">&gt;</span> Category{" "}
            <span className="mx-1">&gt;</span> Small Dog{" "}
            <span className="mx-1">&gt;</span> Shiba Inu Sepia
          </p>

          <p className="text-[14px] font-[400] text-[#99A2A5] mt-4">
            SKU #1000078
          </p>
          <h1 className="text-[24px] font-[700] text-[#BF985F] mt-2">
            Shiba Inu Sepia
          </h1>
          <p className="text-[20px] font-[600] text-[#002A48] mt-2">
            34.000.000 VND
          </p>

          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-[#EBDDAE] text-[16px] font-[600] text-[#060608] rounded-full">
              Contact us
            </button>
            <button className="px-4 py-2 border border-[#EBDDAE] font-[600] text-[16px] rounded-full text-[#060608]">
              💬 Chat with Monito
            </button>
          </div>

          {/* Table */}
          <div className="mt-6 text-[#667479] font-[500]">
            <table className="table-auto w-full text-[14px]">
              <tbody>
                {[
                  { label: "SKU", value: "#1000078" },
                  { label: "Gender", value: "Female" },
                  { label: "Age", value: "2 Months" },
                  { label: "Size", value: "Small" },
                  { label: "Color", value: "Apricot & Tan" },
                  { label: "Vaccinated", value: "Yes" },
                  { label: "Dewormed", value: "Yes" },
                  { label: "Cert", value: "Yes (MKA)" },
                  { label: "Microchip", value: "Yes" },
                  { label: "Location", value: "Vietnam" },
                  { label: "Published Date", value: "12-Oct-2022" },
                  {
                    label: "Additional Information",
                    value: (
                      <p className="text-sm mt-2 leading-relaxed">
                        Pure breed Shih Tzu. <br />
                        Good body structure. <br />
                        With MKA cert and Microchip. <br />
                        Father from champion lineage.
                      </p>
                    ),
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 text-gray-500">{item.label}</td>
                    <td className="py-2 font-semibold">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <LovelyCustomerSlider />
      <div className="max-w-screen-xl mx-auto mt-8 mb-8 px-4">
        {/* Header */}
        <p>What's new?</p>
        <h2 className="text-3xl font-bold text-[#BF985F] mb-6 inline-flex items-center">
          See more puppies
          <span role="img" aria-label="paw" className="ml-2">
            <img
              src="/home/style_icon.png"
              alt="Paw Icon"
              className="w-6 h-6"
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="mx-2 card p-4 shadow-xl rounded-md">
            <img src="/pet-details/puppy1.png" alt="" />
            <h2 className="text-[16px] font-[600] mt-2">
              MO502 - Poodle Tiny Yellow
            </h2>
            <div className="my-1 flex justify-between text-[#667479] font-[600]">
              <p>Gene: Female</p>
              <p>Age: 02 months</p>
            </div>
            <p className="text-[14px] font-[700]">3.900.000 VND</p>
          </div>
          <div className="mx-2 card p-4 shadow-xl rounded-md">
            <img src="/pet-details/puppy2.png" alt="" />
            <h2 className="text-[16px] font-[600] mt-2">
              MO502 - Poodle Tiny Yellow
            </h2>
            <div className="my-1 flex justify-between text-[#667479] font-[600]">
              <p>Gene: Female</p>
              <p>Age: 02 months</p>
            </div>
            <p className="text-[14px] font-[700]">3.900.000 VND</p>
          </div>
          <div className="mx-2 card p-4 shadow-xl rounded-md">
            <img src="/pet-details/puppy3.png" alt="" />
            <h2 className="text-[16px] font-[600] mt-2">
              MO502 - Poodle Tiny Yellow
            </h2>
            <div className="my-1 flex justify-between text-[#667479] font-[600]">
              <p>Gene: Female</p>
              <p>Age: 02 months</p>
            </div>
            <p className="text-[14px] font-[700]">3.900.000 VND</p>
          </div>{" "}
          <div className="mx-2 card p-4 shadow-xl rounded-md">
            <img src="/pet-details/puppy4.png" alt="" />
            <h2 className="text-[16px] font-[600] mt-2">
              MO502 - Poodle Tiny Yellow
            </h2>
            <div className="my-1 flex justify-between text-[#667479] font-[600]">
              <p>Gene: Female</p>
              <p>Age: 02 months</p>
            </div>
            <p className="text-[14px] font-[700]">3.900.000 VND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;

// customer slider

const LovelyCustomerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const customerImages = [
    { id: 1, src: "/pet-details/customer1.png", alt: "Customer 1" },
    { id: 2, src: "/pet-details/customer2.png", alt: "Customer 2" },
    { id: 3, src: "/pet-details/customer3.png", alt: "Customer 3" },
    { id: 4, src: "/pet-details/customer4.png", alt: "Customer 4" },
    { id: 5, src: "/pet-details/customer5.png", alt: "Customer 5" },
  ];

  return (
    <div className="border-t mt-10">
      <div className="max-w-screen-xl mx-auto mt-8 mb-8 px-4 ">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#BF985F] mb-6 space-x-4 inline-flex items-center">
          Our lovely customer
          <span role="img" aria-label="paw" className="ml-2">
            <img src="/home/style_icon.png" />
          </span>
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {customerImages.map((image) => (
            <div key={image.id} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
