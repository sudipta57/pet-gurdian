import React from "react";

export default function Partner() {
  const partners = [
    { src: "/home/partner1.png", alt: "Vets for Pets" },
    { src: "/home/partner2.png", alt: "PIPS" },
    { src: "/home/partner3.png", alt: "World's Largest Pet Walk" },
    { src: "/home/partner4.png", alt: "Partners for Pets" },
    { src: "/home/partner5.png", alt: "Pet Sitting" },
    { src: "/home/partner6.png", alt: "Pet Partners" },
    { src: "/home/partner7.png", alt: "Perfect Pet Partners" },
    { src: "/home/partner8.png", alt: "Pet Sitting 2" },
  ];
  return (
    <div className="bg-[#FFFFFF] mt-2">
      <div className="bg-gray-50 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <h2 className="text-[40px] text-4xl font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
              Our Trusted Partner{" "}
              <span className="text-yellow-500 ml-2">
                <img src="/home/style_icon.png" alt="Style Icon" />
              </span>
            </h2>
          </div>
        </div>
        <div className="grid relative max-w-[1100px] mx-auto flex items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg w-[226px] h-[130px] transition duration-300 flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
