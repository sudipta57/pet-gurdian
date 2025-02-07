import React from "react";

export default function Product() {
  const products = [
    {
      image: "/home/product1.png", // Replace with actual image URL
      name: "Whiskas Cat Food Core Tuna",
      reviews: 89,
      discountedPrice: 420,
      originalPrice: 900,
    },
    {
      image: "/home/product2.png", // Replace with actual image URL
      name: "Friskies Kitten Discoveries",
      reviews: 89,
      discountedPrice: 390,
      originalPrice: 800,
    },
    {
      image: "/home/product3.png", // Replace with actual image URL
      name: "Joules Cat Cotton House",
      reviews: 89,
      discountedPrice: 1400,
      originalPrice: 2000,
    },
    {
      image: "/home/product1.png", // Replace with actual image URL
      name: "Natural Dog Fresh Food",
      reviews: 89,
      discountedPrice: 280,
      originalPrice: 500,
    },
  ];
  const triangleStyle = {
    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
    backgroundColor: "#b6946f",
    height: "100%",
    width: "1rem",
    position: "absolute",
    top: 0,
    right: 0,
  };
  return (
    <div>
      <div className="bg-[#FFFFFF] py-10 mt-2">
        <div className="flex justify-center mb-4">
          <h2 className="text-[40px] text-4xl font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
            Our Product
            <span className="text-yellow-500 ml-2">
              <img src="/home/style_icon.png" alt="Style Icon" />
            </span>
          </h2>
        </div>
        <div className="relative max-w-[1100px] mx-auto flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-2 max-w-[1300px] mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative p-3 rounded-lg bg-[#191919] text-white shadow-md max-w-[500px] mx-auto"
              >
                <div className="relative border border-[#EBDDAE] rounded-lg bg-black text-white shadow-md">
                  {/* Offer Badge */}
                  <div className="absolute top-2 left-0 flex flex-col gap-2">
                    <div className="relative bg-[#b6946f] text-[#191919] font-bold text-xs uppercase inline-flex items-center px-4 py-1">
                      <span>OFFER</span>
                      <div
                        className="absolute top-0 right-[-12px] h-full w-3 bg-[#b6946f]"
                        style={{
                          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                        }}
                      ></div>
                    </div>

                    <div className="relative bg-[#b6946f] text-black font-bold text-xs uppercase inline-flex items-center px-3 py-1">
                      <div
                        className="absolute right-0 top-0 h-full w-3 bg-black"
                        style={{
                          clipPath: "polygon(100% 50%, 0 0, 0 100%)",
                          transform: "rotate(180deg)",
                        }}
                      ></div>

                      <span className="pl-2">50% OFF</span>
                    </div>
                  </div>

                  {/* Add to Cart top */}
                  <div className="absolute top-4 right-4">
                    {/* Section 1 */}
                    <div className="mb-2">
                      <button className=" text-black rounded-full ">
                        <img src="/home/wish.png" />
                      </button>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <button className=" text-black rounded-full ">
                        <img src="/home/buy.png" />
                      </button>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="flex justify-center my-12">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                  {/* Add to Cart Button */}
                  <div className="absolute bottom-0 right-0">
                    <button className=" text-black rounded-full  ">
                      <img src="/home/addCart.png" />
                    </button>
                  </div>
                </div>

                {/* Ratings, Name, and Prices */}
                <div className="p-4 justify-center items-center">
                  <div className="flex justify-center items-center text-[#FBC006] space-x-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-[#EBDDAE]">
                      {product.reviews} Reviews
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 text-center text-[#EBDDAE]">
                    {product.name}
                  </h2>
                  <div className="flex justify-center items-center space-x-2">
                    <span className="text-yellow-500 text-lg font-bold">
                      ₹{product.discountedPrice}
                    </span>
                    <span className="line-through text-gray-500">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className=" text-[#060608] px-6 py-2 rounded-full font-bold">
            VIEW MORE →
          </button>
        </div>
      </div>
    </div>
  );
}
