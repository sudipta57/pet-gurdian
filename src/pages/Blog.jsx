import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Starting your new friendship off on the right paw",
      image: "/home/PageBlog/dog1.png", // Replace with real images
      date: "9.12.2024",
    },
    {
      id: 2,
      title: "Starting your new friendship off on the right paw",
      image: "/home/PageBlog/dog2.png",
      date: "9.12.2024",
    },
    {
      id: 3,
      title: "Starting your new friendship off on the right paw",
      image: "/home/PageBlog/dog3.png",
      date: "9.12.2024",
    },
    {
      id: 2,
      title: "Starting your new friendship off on the right paw",
      image: "/home/PageBlog/dog1.png",
      date: "9.12.2024",
    },
    {
      id: 3,
      title: "Starting your new friendship off on the right paw",
      image: "/home/PageBlog/dog2.png",
      date: "9.12.2024",
    },
    {
      id: 2,
      title: "Starting your new friendship off on the right paw",
      image: "/home/PageBlog/dog3.png",
      date: "9.12.2024",
    },

    // Duplicate for demonstration purposes
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div
        className="relative bg-cover bg-center min-h-[500px] flex items-center justify-start px-4 md:px-12"
        style={{ backgroundImage: "url('/home/blog_bg.png')" }} // Replace with your background image path
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-right p-6 md:p-10 rounded-lg ml-auto">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#EBDDAE]">
            Articles & News
          </h1>

          <p className="text-[12px] md:text-base font-[500] mb-6 text-[#EBDDAE]">
            We know your pets are cherished members of your family. That's why
            we provide loving, personalized pet sitting services tailored to
            their needs.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-end">
            <button className="bg-[#EBDDAE] text-[#00171F] font-[600] px-4 py-2 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#EBDDAE] w-full h-2"></div>

      {/* list of blog scetion */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
          Latest <span className="text-[#BF985F] ml-1">Blog</span> Posts
          <span className="ml-2">
            <img
              src="/home/style_icon.png"
              alt="Icon"
              className="w-6 h-6 inline-block"
            />
          </span>
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link to="/blog-details" key={index}>
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 
                   border-2 border-transparent hover:border-[#EBDDAE]"

              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-50 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="text-yellow-600 px-3 py-1 rounded-full border border-[#BF985F]">

                      ADOPTING A PET
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#EBDDAE] w-full h-2"></div>

      {/* end banner section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main container with dark background */}
        <div className="bg-gray-900 text-white rounded-lg flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SCHEDULE YOUR <br /> APPOINTMENT TODAY
            </h2>
            <button className="bg-[#EBDDAE] text-gray-900 font-semibold px-6 py-2 rounded-full ">
              Book Now
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img
              src="/home/blog_right.png"
              alt="Dog smiling"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
