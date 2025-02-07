import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: "url('/home/footer_bg.png')",
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" px-5 md:px-20">
          {/* Newsletter Section */}
          <div className="">
            <div className="bg-black relative max-w-[1200px] mx-auto flex items-center text-white p-5 rounded-full flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-[30px] text-[#EBDDAE] px-4 font-libre font-semibold mb-4 md:mb-0 text-sm md:text-[30px] leading-tight md:leading-[1.5]">
                Our Newsletter <br /> Subscription
              </h2>

              <div className="flex items-center bg-white rounded-full w-full md:w-auto mr-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none p-2 text-black w-full"
                />
                <button className="bg-[#EBDDAE] px-10 py-5 rounded-full hover:bg-yellow-600 flex items-center justify-center">
                  <span className="text-[#060608] text-[15px]">Subscribe</span>
                  <img
                    src="/home/subscribe.png"
                    alt="Subscribe Icon"
                    className="w-3 h-3 ml-2"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 text-sm text-black">
            {/* About Section */}
            <div>
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold">
                  <img src="/home/logo.png" className="w-43 h-18" />
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
                massa dolor imperdiet nec consequat tacon uediem.
              </p>
              {/* Follow Us Section */}
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-xl text-gray-800 hover:text-yellow-500 transition"
                  aria-label="Facebook"
                >
                  <img src="/home/social/facebook.png" />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-800 hover:text-yellow-500 transition"
                  aria-label="Twitter"
                >
                  <img src="/home/social/twiter.png" />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-800 hover:text-yellow-500 transition"
                  aria-label="Instagram"
                >
                  <img src="/home/social/insta.png" />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-800"
                  aria-label="LinkedIn"
                >
                  <img src="/home/social/link.png" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3">Quick Link</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Our Services",
                  "About Us",
                  "Our Puppies",
                  "Finance Options",
                  "Our Products",
                  "List A Puppy",
                  "Blog",
                  "Contact Us",
                ].map((link) => (
                  <li key={link} className="flex items-center">
                    <span className="text-[#060608] mr-2">›</span>
                    <a href="#" className="hover:text-yellow-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold mb-3">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center space-x-2">
                  <span>
                    <img
                      src="/home/social/address.png"
                      alt="Address Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>4517 Washington Ave., Manchester, Kentucky 39495</span>
                </p>

                <p className="flex items-center space-x-2">
                  <span className="font-bold">
                    <img
                      src="/home/social/gmail.png"
                      alt="Email Icon"
                      className="w-6 h-4"
                    />
                  </span>
                  <span>scooby.care@example.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-bold">
                    <img
                      src="/home/social/phone.png"
                      alt="Phone Icon"
                      className="w-6 h-4"
                    />
                  </span>
                  <span>(702) 555-XXX</span>
                </p>

              </div>
            </div>

            {/* Instagram Section */}
            <div>
              <h3 className="font-semibold mb-3">@Instagram</h3>
              <div className="grid grid-cols-2 gap-1 md:gap-2 lg:gap-2 max-w-[250px]">
                {[
                  "/home/insta/insta1.png",
                  "/home/insta/insta2.png",
                  "/home/insta/insta3.png",
                  "/home/insta/insta4.png",
                ].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Instagram ${index + 1}`}
                    className="rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-[#000000] pt-5 text-gray-600 flex flex-col md:flex-row justify-between text-xs">
            <p>Privacy Policy | Terms and Conditions</p>
            <p>
              Copyright @ PET-GURADIAN | Developed By SECWEBXPERTS PVT. LTD.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
