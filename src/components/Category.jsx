import React from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const pets = [
    {
      id: 1,
      image: "/home/category/pet1.png",
      name: "Shiba Inu Sepia",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
    },
    {
      id: 2,
      image: "/home/category/pet2.png",
      name: "MO502 - Poodle Tiny Yellow",
      gene: "Male",
      age: "03 months",
      price: "4.200.000 VND",
    },
    {
      id: 3,
      image: "/home/category/pet3.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "4.500.000 VND",
    },
    {
      id: 4,
      image: "/home/category/pet4.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "4.500.000 VND",
    },{
      id: 5,
      image: "/home/category/pet5.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "4.500.000 VND",
    },{
      id: 6,
      image: "/home/category/pet6.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "4.500.000 VND",
    },{
      id: 7,
      image: "/home/category/pet7.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "4.500.000 VND",
    },{
      id: 8,
      image: "/home/category/pet8.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "06 months",
      price: "5.500.000 VND",
    },{
      id: 9,
      image: "/home/category/pet9.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "1.500.000 VND",
    },{
      id: 10,
      image: "/home/category/pet10.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "3.500.000 VND",
    },{
      id: 11,
      image: "/home/category/pet11.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "3.500.000 VND",
    },{
      id: 12,
      image: "/home/category/pet12.png",
      name: "MO504 - Poodle Tiny White",
      gene: "Female",
      age: "04 months",
      price: "4.500.000 VND",
    },
    // Add more pet objects here...
  ];
  return (
    <div className="bg-[#EBDDAE]">
      <div className="bg-[#FFFFFF] p-4 flex justify-center items-center min-h-auto">
        <div
          className="relative bg-cover bg-center flex justify-end items-center min-h-[500px] px-4 max-w-[1200px] md:px-12 mt-6 mx-auto w-full rounded-lg"
          style={{ backgroundImage: "url('/home/category_bg.png')" }}
        >
          {/* Text Section */}
          <div className="w-2/5 text-[#EBDDAE] text-right p-4 md:p-10 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              One More Friend
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 ">
              Thousands More Fun!
            </h2>
            <p className="text-sm md:text-base mb-6">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-end">
              <button className="bg-transparent text-[#EBDDAE] border-2 border-[#EBDDAE] px-4 py-2 rounded-full hover:bg-white hover:text-black transition flex items-center justify-center space-x-2">
                <span>View Intro</span>
                <img src="/home/on.png" alt="Intro Icon" className="w-4 h-4" />
              </button>
              <button className="bg-[#EBDDAE] text-black px-4 font-semibold py-2 rounded-full">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Wrapper to Center Content */}
      <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF] px-4 mt-2">
        <div className="flex flex-col md:flex-row w-full max-w-[1200px] min-h-screen mt-2 relative">
          {/* Left Filter Section */}
          <div className="w-full md:w-1/4 bg-white p-6 border-r border-gray-300 relative z-10">
            <h2 className="text-lg font-bold text-[#BF985F] mb-4">Filter</h2>

            <div className="mb-6 border-b border-gray-300 pb-4">
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

            <div className="mb-6 border-b border-gray-300 pb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Color</h3>
              <div className="space-y-2">
                {[
                  { name: "Red", icon: "/home/color/red.png" },
                  { name: "Apricot", icon: "/home/color/apricat.png" },
                  { name: "Black", icon: "/home/color/black.png" },
                  { name: "Black & White", icon: "/home/color/b&w.png" },
                  { name: "Silver", icon: "/home/color/silver.png" },
                  { name: "Tan", icon: "/home/color/tan.png" },
                ].map((color) => (
                  <label
                    key={color.name}
                    className="flex items-center space-x-2"
                  >
                    <input type="checkbox" className="form-checkbox" />
                    <img
                      src={color.icon}
                      alt={color.name}
                      className="w-5 h-5"
                    />
                    <span>{color.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6 border-b border-gray-300 pb-4">
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

            <div className="mb-6 border-b border-gray-300 pb-4">
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

          {/* Orange Gap */}
          <div className="w-2 bg-[#EBDDAE] -mt-[10px]"></div>

          {/* Right Content Section */}
          <div className="w-full md:w-3/4 bg-[#FFFFFF] p-6 max-w-[1200px] relative z-10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pets.map((pet) => (
                <div
                  key={pet.id}
                  className="w-64 mx-auto bg-white rounded-lg shadow overflow-hidden border-2 border-transparent hover:border-[#EBDDAE] transition duration-300 cursor-pointer"
                  onClick={() => navigate(`/pet-details`)} // Navigate with pet ID
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover p-2 rounded-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-[#000000]">{pet.name}</h3>
                    <p className="text-[#667479] text-sm">
                      Gene: {pet.gene} | Age: {pet.age}
                    </p>
                    <p className="text-[#000000] font-bold">{pet.price}</p>
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
