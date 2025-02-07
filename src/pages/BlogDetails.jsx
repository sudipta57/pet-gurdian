import React from "react";

export default function BlogDetails() {
  const blogPosts = [
    {
      image: "/home/PageBlog/dog1.png",
      title: "Starting your new friendship off on the right paw",
      category: "ADOPTING A PET",
      date: "9.12.2024",
    },
    {
      image: "/home/PageBlog/dog2.png",
      title: "Starting your new friendship off on the right paw",
      category: "ADOPTING A PET",
      date: "9.12.2024",
    },
    {
      image: "/home/PageBlog/dog3.png",
      title: "Starting your new friendship off on the right paw",
      category: "ADOPTING A PET",
      date: "9.12.2024",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Section */}
        <div className="w-full">
          <img
            src="/home/blog_details_banner.png" // Replace with actual image
            alt="Dog by the ocean"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Tag and Date */}
        <div className="flex justify-center items-center gap-4 mt-4 text-gray-500 text-sm">
          <span className=" px-4 py-1 rounded-full border border-[#BF985F]">
            ADOPTING A PET
          </span>
          <span>9.12.2024</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-4">
          STARTING YOUR NEW FRIENDSHIP OFF <br /> ON THE RIGHT PAW
        </h1>

        {/* Author Section */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <img
            src="/home/jahan.png" // Replace with author's image
            alt="Jahan Ara"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Jahan Ara</h3>
            <p className="text-gray-500 text-sm">Pet Owner, Happy Paws</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8 text-gray-700 leading-relaxed pb-6">
          {/* Section 1 */}
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            HOW TO <span className="text-[#BF985F]">CHOOSE</span> WHEN TO{" "}
            <span className="text-[#BF985F]">ADOPT</span> A NEW PET?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            nulla elementum, lobortis feugiat cras rhoncus, sem est molestie.
            Quam nisi, purus adipiscing dictumst fringilla. Lorem iaculis
            imperdiet nisi auctor. Sagittis quis curabitur morbi tincidunt.
          </p>
          <p className="mt-4">
            Sed arcu, et ipsum elementum scelerisque nisi, odio. Bibendum
            fringilla interdum placerat elit consectetur arcu. Auctor nisi.
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>
              Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi
              sit.
            </li>
            <li>
              Tristique nulla aliquet enim tortor at auctor urna. Sit amet
              aliquam id diam.
            </li>
            <li>
              Nam libero justo laoreet sit amet. Lacus sed viverra tellus in
              hac.
            </li>
            <li>
              Tempus imperdiet nulla malesuada pellentesque elit eget gravida
              cum.
            </li>
          </ul>

          {/* Section 2 */}
          <h3 className="text-lg md:text-xl font-bold mt-8">
            SHOULD I <span className="text-[#BF985F]">ADOPT A CAT</span>, OR A{" "}
            <span className="text-[#BF985F]">DOG</span>?
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            nulla elementum, lobortis feugiat cras rhoncus, sem est molestie.
            Quam nisi, purus adipiscing dictumst fringilla. Lorem iaculis
            imperdiet nisi auctor. Sagittis quis curabitur morbi tincidunt.
          </p>
        </div>
        <div className="bg-[#EBDDAE] w-full h-2"></div>

        <div className="bg-[#FFFFFF] mt-3 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              Latest <span className="text-[#BF985F]">Blog</span> Posts
              <span className="inline-block w-6 h-6">
                <img
                  src="/home/style_icon.png"
                  alt="paw"
                  className="w-full h-full object-contain"
                />
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 border-2 border-transparent hover:border-[#EBDDAE]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[#BF985F] text-sm border border-[#BF985F] rounded-full px-3 py-1">
                        {post.category}
                      </p>
                      <p className="text-gray-400 text-sm">{post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
