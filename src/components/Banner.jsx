import React, { useRef, useEffect } from "react";

export default function Banner() {
  const puppies = [
    { src: "/home/dog1.png", alt: "Puppy 1" },
    { src: "/home/dog2.png", alt: "Puppy 2" },
    { src: "/home/dog3.png", alt: "Puppy 3" },
    { src: "/home/dog2.png", alt: "Puppy 4" },
    { src: "/home/dog4.png", alt: "Puppy 5" },
    { src: "/home/dog1.png", alt: "Puppy 6" },
  ];

  const carouselRef = useRef(null);
  const slideWidth = 300; // Width of one slide (adjust as needed)

  useEffect(() => {
    const carousel = carouselRef.current;

    // Ensure the carousel starts in the right position (showing the first original image)
    carousel.scrollLeft = slideWidth * puppies.length;
  }, [puppies.length, slideWidth]);

  const handleNext = () => {
    const carousel = carouselRef.current;

    // Scroll one slide to the right
    carousel.scrollBy({
      left: slideWidth,
      behavior: "smooth",
    });

    // Check if the current scroll position reaches the cloned last image
    setTimeout(() => {
      if (carousel.scrollLeft >= slideWidth * (puppies.length * 2)) {
        // Jump back to the original first slide
        carousel.scrollLeft = slideWidth * puppies.length;
      }
    }, 300); // Delay to allow smooth scrolling animation
  };

  const handlePrevious = () => {
    const carousel = carouselRef.current;

    // Scroll one slide to the left
    carousel.scrollBy({
      left: -slideWidth,
      behavior: "smooth",
    });

    // Check if the current scroll position reaches the cloned first image
    setTimeout(() => {
      if (carousel.scrollLeft <= 0) {
        // Jump forward to the original last slide
        carousel.scrollLeft = slideWidth * puppies.length;
      }
    }, 300); // Delay to allow smooth scrolling animation
  };

  return (
    <div>
      <div className="relative mt-8 md:mt-0">
        {/* Image */}
        <div>
          <img
            src="/home/banner_bg.png"
            alt="Category Background"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6">
          <div className="md:max-w-xl w-full text-white text-left bg-opacity-50 px-6 md:p-10 rounded-lg">
            <h1 className="text-xl sm:text-4xl md:text-5xl text-[#EBDDAE] font-bold leading-tight">
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
      <div className="flex flex-col items-center bg-gray-100 py-8">
        <h2 className="text-[40px] font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
          Our Puppies{" "}
          <span className="ml-2 text-yellow-500">
            <img src="/home/style_icon.png" />
          </span>
        </h2>
        <div className="relative w-full lg:w-3/4 overflow-hidden">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Clone the last few images at the start for seamless looping */}
            {puppies.slice(-2).map((puppy, index) => (
              <div
                key={`clone-start-${index}`}
                className="flex-shrink-0 w-1/4 p-2"
                style={{ minWidth: `${slideWidth}px` }}
              >
                <img
                  src={puppy.src}
                  alt={puppy.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}

            {/* Original images */}
            {puppies.map((puppy, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/4 p-2"
                style={{ minWidth: `${slideWidth}px` }}
              >
                <img
                  src={puppy.src}
                  alt={puppy.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}

            {/* Clone the first few images at the end for seamless looping */}
            {puppies.slice(0, 2).map((puppy, index) => (
              <div
                key={`clone-end-${index}`}
                className="flex-shrink-0 w-1/4 p-2"
                style={{ minWidth: `${slideWidth}px` }}
              >
                <img
                  src={puppy.src}
                  alt={puppy.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
