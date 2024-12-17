import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const features = [
    {
      icon: "/home/staff.png",
      title: "Well-trained Staffs",
      description:
        "Our staffs are fully trained in canine and feline first-aid & CPR",
    },
    {
      icon: "/home/like.png",
      title: "Squeaky-Toy Clean",
      description:
        "We use only the safest cleaning products formulated specifically for use around animals",
    },
    {
      icon: "/home/pin.png",
      title: "Monitor your Pup",
      description: "Access our live webcam on your phones and laptops",
    },
    {
      icon: "/home/secure.png",
      title: "Safe Environment",
      description:
        "All boarding pets are healthy, spayed, neutered & vaccinated",
    },
  ];

  const listItems = [
    "The only people who have access to your key or access code are your location’s main office and your sitter.",
    "We track all key movements, meaning if your sitter needs a key they are required to put a request in our system app tracking.",
    "If your home has an access code, it will only be available to your sitter during scheduled service hours.",
  ];
  return (
    <div>
      <div className="relative md:px-10 mt-10">
        {/* Image */}
        <div>
          <img
            src="/home/about_bg.png"
            alt="Category Background"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="absolute top-0 left-0 right-0 h-full md:flex items-center md:justify-end px-6">
          <div className="w-full md:w-1/2 text-white text-left px-6 md:p-10 rounded-lg">
            <h1 className="text-md md:text-5xl font-bold md:mb-4 md:text-[#191919] text-[#EBDDAE]">
              Flexible and reliable care for your pet
            </h1>

            <p className="text-xs md:text-base md:mb-6 md:text-[#191919] text-white">
              Experienced, Animal-loving Pet Sitters
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <button className="bg-[#191919] text-[#EBDDAE] px-4 py-2 rounded-full ">
                Request Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* previous implementation */}

      {/* <div
        className="relative bg-cover bg-center min-h-[500px] flex items-center justify-end px-4 md:px-12 mt-8 ml-6 mr-8"
        style={{ backgroundImage: "url('/home/about_bg.png')" }} // Replace with your background image path
      >
        <div className="w-full md:w-1/2 text-white text-left p-6 md:p-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#191919]">
            Flexible and reliable care for your pet{" "}
          </h1>

          <p className="text-sm md:text-base mb-6 text-[#191919]">
            Experienced, Animal-loving Pet Sitters
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-[#191919] text-[#EBDDAE] px-4 py-2 rounded-full ">
              Request Services{" "}
            </button>
          </div>
        </div>
      </div> */}

      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/home/about1.png" // Replace with your image URL
              alt="Pet and owner"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              We Are Providing Pet Care Service For{" "}
              <span className="text-yellow-500">
                Years <img src="/home/style_icon.png" />
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Happy Pet Care, our goal is to make caring for a pet that much
              easier, by providing a flexible and reliable service, so pet
              owners can go about their business, and not have to worry about
              their pet waiting for them at home.
            </p>

            {/* Founder Information */}
            <p className="text-gray-800 font-semibold">
              Founder, Happy Pet Care
            </p>
            <p className="text-gray-600 font-bold">Mary M</p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Your Pet is <span className="text-yellow-600">Safe</span> with us
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="text-5xl text-yellow-600 mb-4">
                  <img src={feature.icon} />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-[[#6F32BE] mb-2">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-[#33363F] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex items-center">
              Your House is{" "}
              <span className="text-yellow-600 inline-flex items-center ml-2">
                Protected{" "}
                <img
                  src="/home/style_icon.png"
                  alt="Icon"
                  className="w-6 h-6 ml-1"
                />
              </span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We know that after the health, safety, and happiness of your pet,
              the security of your home is a big priority. Here is how we ensure
              your home’s security while you’re away:
            </p>

            {/* List */}
            <ul className="list-none space-y-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-3 mt-1">•</span>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/home/about2.png"
              alt="House Protected"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-16 bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2">
          See Our <span className="text-yellow-500">Happy Moments</span>
          <span className="text-2xl">
            <img
              src="/home/style_icon.png"
              alt="Style Icon"
              className="inline-block w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </span>
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src="/home/moment1.png" // Replace with your image URL
              alt="Sleeping Dog"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src="/home/moment2.png" // Replace with your image URL
              alt="Dog Grooming"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src="/home/moment3.png" // Replace with your image URL
              alt="Cat Grooming"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <button
          className="mt-6 px-6 py-3 bg-black text-white font-medium text-lg rounded-lg hover:bg-gray-800 transition"
          onClick={() => {
            navigate("/gallary-screen");
          }}
        >
          See Gallery →
        </button>
      </section>
    </div>
  );
}
