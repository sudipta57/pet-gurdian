import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="relative mt-8 md:mt-0 ">
        {/* Image */}
        <div>
          <img
            src="/home/contact_bg.png"
            alt="Category Background"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="absolute md:top-0 left-0 top-10 right-0 h-full md:flex items-center md:justify-end px-6">
          <div className="w-full md:w-1/2 text-white text-left px-6 md:p-10 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Contact US
            </h1>
          </div>
        </div>
      </div>

      {/* prev implementation */}

      {/* <div
        className="relative bg-cover bg-center min-h-[600px] flex items-center justify-end px-4 md:px-12 z-20 mt-8 ml-6 mr-8"
        style={{ backgroundImage: "url('/home/contact_bg.png')" }} // Replace with your background image path
      >
        <div className="w-full md:w-1/2 text-white text-left p-6 md:p-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact US
          </h1>
        </div>
      </div> */}

      {/* contact section */}
      <div className="bg-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16 grid space-x-10 grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Get In <span className="text-yellow-600 font-bold">Touch</span>
            </h2>
            <form className="space-y-4">
              <div className="bg-gray-100 rounded-md">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                />
              </div>
              <div className="bg-gray-100 rounded-md">
                <input
                  type="email"
                  placeholder="Your Mail ID"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                />
              </div>
              <div className="bg-gray-100 rounded-md">
                <input
                  type="text"
                  placeholder="Your Number"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                />
              </div>
              <div className="bg-gray-100 rounded-md">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                />
              </div>
              <div className="bg-gray-100 rounded-md">
                <input
                  type="email"
                  placeholder="Company Mail ID"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                />
              </div>
              <div className="bg-gray-100 rounded-md">
                <input
                  type="text"
                  placeholder="Company Number"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                />
              </div>
              <div className="bg-gray-100 rounded-md">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-100 p-3 rounded-md focus:outline-none text-sm"
                ></textarea>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:w-3/4 xl:w-2/3">
            <h3 className="text-xl w-full font-semibold mb-6">
              CONTACT <span className="text-yellow-600">INFO</span>
            </h3>
            <ul className="text-gray-700 space-y-4 text-sm">
              <li>
                <span className="font-bold">Email</span> <br />
                scooby.care@example.com
              </li>
              <li>
                <span className="font-bold">Website</span> <br />
                www.scoobycare.com
              </li>
              <li>
                <span className="font-bold">Open</span> <br />
                Monday - Friday <br />
                10am-09pm
              </li>
              <li>
                <span className="font-bold">
                  VISITING <span className="text-yellow-600">ADDRESS</span>
                </span>
                <br />
                4517 Washington Ave. <br />
                Manchester, Kentucky <br />
                39495
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Frankfurt&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 md:h-96 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
