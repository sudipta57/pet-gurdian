import React from "react";

export default function Profile() {
  return (
    <div>
      {/* Header with background */}
      <div
        className="relative bg-cover bg-center min-h-[200px] flex items-center justify-end px-4 md:px-12 z-20 mt-8 ml-6 mr-8"
        style={{ backgroundImage: "url('/home/profile_banner.png')" }} // Replace with your background image path
      ></div>

      {/* Profile Section */}
      <div className="bg-white flex justify-center items-center rounded-lg shadow-md">
        <div className="w-full max-w-6xl  p-6 md:p-10">

          {/* Profile Picture and Name */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/home/profile.png"
                alt="profile"

                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Ahana Roy
                </h2>
                <p className="text-gray-500">ahanaroy@gmail.com</p>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700">
              Edit
            </button>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"

              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nick Name
              </label>
              <input
                type="text"
                placeholder="Your Nick Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"

              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Gender
              </label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option>Select Gender</option>

              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Country
              </label>
              <input
                type="text"
                placeholder="Your Country Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"

              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Language
              </label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option>Select Language</option>

              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Time Zone
              </label>
              <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
                <option>Select Time</option>

              </select>
            </div>
          </div>

          {/* Email Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">My email Address</h3>
            <div className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
                  <span className="material-icons"><img src="/home/sms.png" /></span>

                </div>
                <div>
                  <p className="text-gray-700">alexarawles@gmail.com</p>
                  <p className="text-sm text-gray-500">1 month ago</p>
                </div>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-black text-[#EBDDAE] rounded-md hover:bg-gray-700">

              + Add Email Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
