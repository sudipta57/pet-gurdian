const petphotos = [
  "/gallary/img1.png",
  "/gallary/img2.png",
  "/gallary/img3.png",
  "/gallary/img4.png",
  "/gallary/img5.png",
  "/gallary/img6.png",
  "/gallary/img7.png",
  "/gallary/img8.png",
  "/gallary/img9.png",
];

export default function Gallary() {
  return (
    <div className="bg-[#EBDDAE]">
      <div className="bg-white mt-4 pb-6">
        <div className="relative max-w-[1300px] mx-auto">
          {/* Background Image */}
          <div className="flex justify-center">
            <img
              src="/gallary/bg-banner.png"
              alt="bg-img"
              className="w-full h-auto"
            />
          </div>

          {/* Content Layer */}
          <div className="absolute top-1/2 left-8 font-Montserrat
              transform -translate-y-1/2">
            <h2 className="md:text-4xl font-[700] text-[#191919] md:mb-4">
              OUR HAPPY MOMENTS
            </h2>
            <p className="text-lg text-[#191919] font-[500] md:mb-6 my-2">
              We bring joys and loves to your besties
            </p>
            <button className="bg-black text-[#EBDDAE] md:py-2 md:px-6 px-2 py-1 rounded-3xl hover:bg-gray-800">
              Explore Now
            </button>
          </div>

        </div>
      </div>

      <div className="bg-white mx-auto mt-2 py-10">
        <div className=" max-w-[1300px] mx-auto mb-6">
          <h2 className="text-[36px] font-montserrat flex items-center space-x-2 font-[700] mb-6 text-[#191919]">
            Your Pet Is Our <span className="text-[#BF985F] space-x-2"> Family </span>{"  "}
            Member
            <span
              role="img"
              aria-label="paw"
              className="inline-flex items-center"
            >
              <img
                src="/home/style_icon.png"
                alt="Paw Icon"
                className="w-6 h-6"
              />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {petphotos.map((photo) => (
              <div className="m-2">
                <img src={photo} alt="img" />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-[#EBDDAE] p-2 px-4 rounded-3xl">
              View More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
