import React from "react";
import Banner from "./Banner";
import Bolgs from "./Bolgs";
import Partner from "./Partner";
import Product from "./Product";
import Testimonial from "./Testimonial";

export default function Home() {
  const services = [
    {
      title: "Puppy Sitting",
      description:
        "Furbaby is the premier pet sitting provider in the Boca Raton, Delray, and Boyton Beach area. We offer high-end pet sitter services in order to ensure that our client’s pets are safe, happy, comfortable, and well attended.",
      icon: "/home/service1.png", // Replace with your actual icon if available
    },
    {
      title: "Puppy Visits",
      description:
        "Our trained pet caregivers understand cat behavior and know how to make them feel comfortable whether they love strangers or enjoy their own space.",
      icon: "/home/service2.png", // Replace with your actual icon if available
    },
    {
      title: "Grooming",
      description:
        "Furbaby Pet Services will have your pet looking their best at all times! Your pup’s health and hygiene are important to the Furbaby Team.",
      icon: "/home/service3.png", // Replace with your actual icon if available
    },
    {
      title: "Transportation",
      description:
        "Does your Furbaby love the beach, cooling off in the pool, or running wild? We can pick them up and bring them to socialize, play, and exercise locally or have a beach day with them.",
      icon: "/home/service4.png", // Replace with your actual icon if available
    },
  ];
  return (
    <div className="bg-[#EBDDAE]">
      {" "}
      <Banner />
      {/* About Us */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-gray-50 py-12 px-6 sm:px-12 lg:px-24 mt-2">
        <div className="relative max-w-[1100px] mx-auto flex items-center">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BF985F] mb-4 flex justify-center lg:justify-start items-center">
              About US{" "}
              <span className="text-yellow-500 ml-2">
                <img
                  src="/home/style_icon.png"
                  alt="Style Icon"
                  className="w-6 h-6"
                />
              </span>
            </h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-montserrat text-[#060608] mb-4">
              Come To Know What We Have Done About Pets.
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-6">
              Pellentesque maximus augue orci, quis congue purus iaculison id.
              Maecenas eu lorem quis massal molestie vulputate in sitagi amet
              diam. Cras eu odio sit amet ipsum cursus for that gone
              pellentesqueque. Vestibulum ut aliquet risus. In hac habitasse
              plateajoa dictumst. Nuncet posuere scelerisque justo in accumsan.
            </p>
            <div className="flex space-x-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#060608] text-[#EBDDAE] text-sm font-medium rounded-lg hover:bg-gray-800 transition duration-300">
                READ MORE
              </button>
              <img
                src="/home/aboutIcon.png"
                alt="Style Icon"
                className="w-6 h-6 mt-2"
              />{" "}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:w-1/2 flex justify-center">
            {/* Image */}
            <img
              src="/home/about.png"
              alt="Person with a dog"
              className="w-full sm:w-3/4 lg:w-full h-auto object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
      {/* Our Service */}
      <div className="bg-[#FFFFFF] py-16 items-center px-8 lg:px-24 mt-2">
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl sm:text-[40px] md:text-[40px] lg:text-[45px] font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
            Our Services
            <span className="text-yellow-500 ml-2">
              <img src="/home/style_icon.png" alt="Style Icon" />
            </span>
          </h2>
        </div>
        <div className="relative max-w-[1100px] mx-auto flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg p-6"
                style={{
                  backgroundImage: "url('/home/service_bg.png')", // Replace with your actual background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Icon Section with Image */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4 mx-auto">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-15 h-15 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center text-[#BF985F] font-Montserrat mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#EBDDAE] font-Montserrat  text-center mb-6">
                  {service.description}
                </p>

                {/* More Details */}
                <div className="text-center">
                  <button className="flex items-center justify-center gap-2 text-[#EBDDAE] font-Montserrat font-medium hover:text-yellow-400 transition duration-300">
                    More Details{" "}
                    <span className="text-lg">
                      <img src="/home/arrow.png" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* our product */}
      <Product />
      {/* List a puppy */}
      <div className="bg-white py-10 mt-2">
        <div className="flex justify-center mb-2">
          <h2 className="text-[40px] text-4xl font-bold font-montserrat text-[#BF985F] flex items-center">
            List A Puppy
            <span className="text-yellow-500 ml-2">
              <img src="/home/style_icon.png" alt="Style Icon" />
            </span>
          </h2>
        </div>
        <div className="relative max-w-[1100px] mx-auto flex items-center">
          <p className="text-center font-montserrat p-6">
            Pellentesque maximus augue orci, quis congue purus iaculison id.
            Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi amet
            diam. Cras eu odio sit amet ipsum cursus for that gone
            pellentesquea. thisaton Vestibulum ut aliquet risus. In hac
            habitasse plateajoa dictumst. Nuncet posuere scelerisque justo in
            accumsan.
          </p>
        </div>
        <div className="text-center mt-4">
          <button className=" text-black px-6 py-2 font-montserrat rounded-full font-bold">
            VIEW MORE →
          </button>
        </div>
      </div>
      {/* choose us section */}
      <div className="bg-[#FFFFFF] mt-2">
        <div
          className="relative max-w-[1100px] mx-auto flex items-center bg-cover bg-center py-16 mt-2"
          style={{
            backgroundImage: "url('/home/choose_us_bg.png')", // Replace with the actual background image URL
          }}
        >
          <div className="relative max-w-[1100px] mx-auto flex items-center lg:flex lg:items-center lg:justify-between items-center">
            {/* Left Section */}
            <div className="lg:w-1/2 text-center lg:text-left text-white">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#BF985F] font-montserrat mb-4 flex justify-center lg:justify-start items-center space-x-2">
                Why Choose Us
                <span>
                  <img
                    src="/home/style_icon.png"
                    alt="icon"
                    className="inline ml-2 w-6 h-6 sm:w-8 sm:h-8"
                  />
                </span>
              </h2>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-semibold mb-4 text-[#060608]">
                We Provide The Best Care Services.
              </h3>
              <p className="text-sm sm:text-base font-montserrat text-[#060608] mb-6">
                Pellentesque maximus augue orci, quis congue purus iaculis id.
                Maecenas eu lorem quis odio sit amet ipsum cursus.
              </p>

              {/* Icon Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Icon Box 1 */}
                <div className="flex items-start space-x-4">
                  <div className="rounded-full">
                    <img
                      src="/home/care.png"
                      alt="Care Icon"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-md sm:text-lg text-[#BF985F]">
                      Personalized Care
                    </h4>
                    <p className="text-[15px] sm:text-sm text-[#060608]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>

                {/* Icon Box 2 */}
                <div className="flex items-start space-x-4">
                  <div className="rounded-full">
                    <img
                      src="/home/team.png"
                      alt="Team Icon"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-md sm:text-lg text-[#BF985F]">
                      Trusted Team
                    </h4>
                    <p className="text-[15px] sm:text-sm text-[#060608]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>

                {/* Icon Box 3 */}
                <div className="flex items-start space-x-4">
                  <div className="rounded-full">
                    <img
                      src="/home/mind.png"
                      alt="Mind Icon"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-md sm:text-lg text-[#BF985F]">
                      Peace of Mind
                    </h4>
                    <p className="text-[15px] sm:text-sm text-[#060608]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>

                {/* Icon Box 4 */}
                <div className="flex items-start space-x-4">
                  <div className="rounded-full">
                    <img
                      src="/home/diago.png"
                      alt="Diagnostics Icon"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-md sm:text-lg text-[#BF985F]">
                      Full Diagnostics
                    </h4>
                    <p className="text-[15px] sm:text-sm text-[#060608]">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <img
                src="/home/choose_us.png" // Replace with the actual image URL
                alt="Why Choose Us"
                className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-none mr-0 lg:h-full object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
      {/* safe section */}
      <div className="bg-[#FFFFFF] mt-2">
        <div
          className="relative max-w-[1100px] mx-auto flex items-center h-[620px] bg-cover bg-center py-16"
          style={{ backgroundImage: `url('/home/safe_bg.png')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-15"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#EBDDAE] font-montserrat leading-tight">
              Your Pets Are 100% Safe At Our Care.
            </h2>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-[#EBDDAE] font-montserrat">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg border-r border-[#EBDDAE]">
                <div className="p-2 rounded-full mb-4">
                  <img
                    src="/home/safe1.png"
                    alt="ID Badged"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">ID Badged</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Nunc interdum.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg border-r border-[#EBDDAE]">
                <div className="p-2 rounded-full mb-4">
                  <img
                    src="/home/safe2.png"
                    alt="DBS Checked"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">DBS Checked</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Nunc interdum.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg border-r border-[#EBDDAE]">
                <div className="p-2 rounded-full mb-4">
                  <img
                    src="/home/safe3.png"
                    alt="Fully Insured"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Nunc interdum.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center text-center p-4 rounded-lg">
                <div className="p-2 rounded-full mb-4">
                  <img
                    src="/home/safe4.png"
                    alt="Pet First-Aid Trained"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Pet First-Aid Trained
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur. Nunc interdum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* finance section */}
      <div className="bg-[#FFFFFF] mt-2">
        <div className=" flex flex-col items-center p-8">
          <div className="flex justify-center mb-4">
            <h2 className="text-[40px] text-4xl font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
              Finance Options{" "}
              <span className="text-yellow-500 ml-2">
                <img src="/home/style_icon.png" alt="Style Icon" />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 relative max-w-[1100px] mx-auto flex items-center gap-6">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#EBDDAE] p-6 rounded-lg shadow-md hover:shadow-lg text-[#060608] font-montserrat transition duration-300"
                >
                  <h2 className="text-xl font-bold text-[#060608] mb-4">
                    We Provide The Best Care Services.
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Pellentesque maximus augue orci, quis congue purus iaculis
                    id. Maecenas eu lorem quis massa molestie vulputate in sit
                    amet diam. Cras eu odio sit amet ipsum cursus.
                  </p>
                  <div className="flex justify-end">
                    <div className="w-6 h-6 flex items-center justify-center border border-gray-800 rounded-full">
                      <img src="/home/finance_icon.png" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* partner */}
      <Partner />
      {/* our work */}
      <div className="bg-[#FFFFFF] mt-2">
        <div className="bg-[#FFFFFF] relative max-w-[1100px] mx-auto flex items-center py-12 px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 md:w-1/2">
              <img
                src="/home/our_work.png" // Replace this with your actual image URL
                alt="Woman with dog"
                className=" rounded-lg shadow-md"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-1/2">
              {/* Header */}
              <h2 className="text-[40px] text-4xl font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
                Our Work{" "}
                <span className="text-yellow-500 ml-2">
                  <img src="/home/style_icon.png" alt="Style Icon" />
                </span>
              </h2>
              <h3 className="text-2xl font-semibold text-[#060608] font-montserrat mb-4">
                Easy Adoption Process For You.
              </h3>
              <p className="text-gray-700 text-[#060608] font-montserrat mb-8">
                Lorem ipsum dolor sit amet consectetur. Nunc interdum porttitor
                tellus feugiat mauris vivamus. Mattis ullamcorper eu viverra
                tempus adipiscing lacus varius potenti.
              </p>

              {/* List Section */}
              <div className="space-y-6">
                {/* List Item 1 */}
                <div className="flex items-start gap-4">
                  <h4 className="text-4xl font-bold text-yellow-600 opacity-30">
                    01.
                  </h4>
                  <div>
                    <h5 className="text-lg font-semibold text-[#BF985F] font-montserrat ">
                      Our Philosophy
                    </h5>
                    <p className="text-[#060608] font-montserrat">
                      Lorem ipsum dolor sit amet consectetur. Nunc interdum
                    </p>
                  </div>
                </div>

                {/* List Item 2 */}
                <div className="flex items-start gap-4">
                  <h4 className="text-4xl font-bold text-yellow-600 opacity-30">
                    02.
                  </h4>
                  <div>
                    <h5 className="text-lg font-semibold text-[#BF985F] font-montserrat">
                      Our Organization
                    </h5>
                    <p className="text-[#060608] font-montserrat">
                      Lorem ipsum dolor sit amet consectetur. Nunc interdum
                    </p>
                  </div>
                </div>

                {/* List Item 3 */}
                <div className="flex items-start gap-4">
                  <h4 className="text-4xl font-bold text-yellow-600 opacity-30">
                    03.
                  </h4>
                  <div>
                    <h5 className="text-lg font-semibold text-[#BF985F] font-montserrat">
                      Know More About Adoption
                    </h5>
                    <p className="text-[#060608] font-montserrat">
                      Lorem ipsum dolor sit amet consectetur. Nunc interdum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* get in touch section */}
      <div className="bg-[#FFFFFF] mt-2">
        <div
          className="flex flex-col md:flex-row relative max-w-[1400px] mx-auto flex items-center items-stretch p-6 md:p-12 lg:p-20"
          style={{
            backgroundImage: "url('/home/touch_bg.png')", // Replace with your background image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Section - Form */}
          <div className="bg-[#EBDDAE] md:w-1/2 p-6 md:p-8 flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none ">
            <h2 className="text-2xl md:text-3xl font-bold text-[#060608] font-poppins">
              Get in Touch
            </h2>
            <p className="text-[#060608] font-montserrat mt-2 font-bold">
              Didn’t find what you were looking for?
            </p>
            <form className="mt-6 space-y-6 font-montserrat">
              {/* First Name and Last Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="peer bg-[#EBDDAE] border-b-2 border-black w-full p-2 text-[#060608] placeholder:text-black focus:outline-none focus:border-black"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="peer bg-[#EBDDAE] border-b-2 border-black w-full p-2 text-[#060608] placeholder:text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Email and Phone Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="peer bg-[#EBDDAE] border-b-2 border-black w-full p-2 text-[#060608] placeholder:text-black focus:outline-none focus:border-black"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="peer bg-[#EBDDAE] border-b-2 border-black w-full p-2 text-[#060608] placeholder:text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  placeholder="Enter Message"
                  className="peer bg-[#EBDDAE] border-b-2 border-black w-full p-2 text-[#060608] placeholder:text-black focus:outline-none focus:border-black"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white font-medium rounded-full py-3 px-8 hover:bg-gray-800 transition duration-200 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex">
            <img
              src="/home/getintouch_right.png" // Replace with the actual image URL
              alt="Person with pet"
              className="w-full object-cover rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
            />
          </div>
        </div>
      </div>
      {/* Testimonial section */}
      <Testimonial />
      {/* blogs section */}
      <Bolgs />
      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
}
