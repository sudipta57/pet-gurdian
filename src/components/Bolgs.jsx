import React from "react";

export default function Bolgs() {
  const blogs = [
    {
      id: 1,
      date: "August 10, 2024",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      image: "/home/blog/blog1.png", // Replace with actual image URL
    },
    {
      id: 2,
      date: "August 10, 2024",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      image: "/home/blog/blog2.png", // Replace with actual image URL
    },
    {
      id: 3,
      date: "August 10, 2024",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      image: "/home/blog/blog3.png", // Replace with actual image URL
    },
    {
      id: 4,
      date: "August 10, 2024",
      title:
        "Lobortis Pharetra In Necat Boi Risuse Osae That One Far This Fox.",
      image: "/home/blog/blog4.png", // Replace with actual image URL
    },
  ];
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            {/* "From the Blogs" */}
            <div className="flex items-center mb-2">
              <span className="block w-8 h-[2px] bg-yellow-500 mr-2"></span>
              <p className="text-[20px] font-semibold text-[#060608] font-montserrat">
                From the Blogs
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              {/* Left: Title */}
              <h2 className="text-[40px] text-4l font-bold font-montserrat text-[#BF985F] mb-4 flex items-center">
                Blog & Articles{" "}
                <span className="text-yellow-500 ml-2">
                  <img src="/home/style_icon.png" alt="Style Icon" />
                </span>
              </h2>
              {/* Right: Paragraph */}
              <p className="mt-2 lg:mt-0 text-[#060608] font-montserrat max-w-lg lg:text-left">
                Lorem ipsum dolor sit amet consectetur. Sed eget quam tincidunt
                arcu eu tincidunt. Venenatis augue ac massa nisl. Amet et at
                senectus sapien aliquet sit pretium. Sit felis et mollis diam
                lectus purus.
              </p>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#191919] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4 font-poppins">
                  <p className="text-[#EBDDAE] text-sm mb-1 flex items-center">
                    <span className="mr-2">
                      <img src="/home/blog/date.png" />
                    </span>
                    {blog.date}
                  </p>
                  <h3 className="text-[12px]  text-[#EBDDAE] mb-2">
                    {blog.title}
                  </h3>
                  <a
                    href="#"
                    className="text-[#EBDDAE] text-[15px] font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
