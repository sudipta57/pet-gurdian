import React from "react";

export default function Category() {
  return (
    <div>
      <div className="relative md:px-10 mt-8">
        {/* Image */}
        <div>
          <img
            src="/home/category_bg.png"
            alt="Category Background"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="absolute top-0 md:right-0 h-full md:flex items-center md:justify-end px-6">
          <div className="w-full md:w-1/2 text-white text-left px-6 md:p-10 rounded-lg">
            <h1 className="text-sm md:text-5xl font-bold md:mb-4 text-black md:text-white">
              One More Friend
            </h1>
            <h2 className="text-sm md:text-3xl font-semibold md:mb-6">
              Thousands More Fun!
            </h2>
            <p className="text-sm md:text-base mb-6 hidden md:block">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex flex-row gap-4 mt-3">
              <button className="bg-transparent text-white border-2 border-white px-1 md:px-4 md:py-2 rounded hover:bg-white hover:text-black transition">
                View Intro
              </button>
              <button className="bg-[#F7EAD8] text-black px-1 md:px-4 md:py-2 rounded hover:bg-yellow-400 transition">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* filter section */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Filter Section */}
        <div className="w-full md:w-1/4 bg-white p-6 border-r border-gray-300">
          <h2 className="text-lg font-bold text-[#BF985F] mb-4">Filter</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Gender</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Female</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Color</h3>
            <div className="space-y-2">
              {[
                "Red",
                "Apricot",
                "Black",
                "Black & White",
                "Silver",
                "Tan",
              ].map((color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Price</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Breed</h3>
            <div className="space-y-2">
              {["Small", "Medium", "Large"].map((breed) => (
                <label key={breed} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{breed}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-3/4 bg-gray-100 p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[#BF985F]">Small Dog</h1>
              <span>
                <img
                  src="/home/style_icon.png"
                  alt="Style Icon"
                  className="w-6 h-6"
                />
              </span>
              <p className="ml-4 text-gray-600">52 puppies</p>
            </div>

            <select className="border border-gray-300 rounded-full p-2">
              <option>Sort by: Popular</option>
              <option>Sort by: Price</option>
              <option>Sort by: Age</option>
            </select>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src="/home/filter_product.png" // Replace with the correct image path
                  alt="Puppy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-[#000000]">
                    MO502 - Poodle Tiny Yellow
                  </h3>
                  <p className="text-[#667479] text-sm">
                    Gene: Female | Age: 02 months
                  </p>
                  <p className="text-[#000000] font-bold">3.900.000 VND</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6">
            <nav className="flex gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-yellow-100"
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// previous banner code

// <div
//   className="relative bg-cover bg-center min-h-[500px] flex items-center justify-end px-4 md:px-12 mt-8 ml-6 mr-8"
//   style={{ backgroundImage: "url('/home/category_bg.png')" }} // Replace with your background image path
// >
//   <div className="w-full md:w-1/2 text-white text-left p-6 md:p-10 rounded-lg">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">One More Friend</h1>
//     <h2 className="text-2xl md:text-3xl font-semibold mb-6">
//       Thousands More Fun!
//     </h2>
//     <p className="text-sm md:text-base mb-6">
//       Having a pet means you have more joy, a new friend, a happy person who
//       will always be with you to have fun. We have 200+ different pets that can
//       meet your needs!
//     </p>
//     <div className="flex flex-col md:flex-row gap-4">
//       <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
//         View Intro
//       </button>
//       <button className="bg-[#F7EAD8] text-black px-4 py-2 rounded hover:bg-yellow-400 transition">
//         Explore Now
//       </button>
//     </div>
//   </div>
// </div>;
