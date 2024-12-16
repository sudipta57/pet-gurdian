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
    <div className="max-w-screen-xl mx-auto">
      <div className="relative mt-10">
        {/* Background Image */}
        <div className="flex justify-center">
          <img
            src="/gallary/bg-banner.png"
            alt="bg-img"
            className="w-full h-auto"
          />
        </div>

        {/* Content Layer */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <h2 className="md:text-4xl font-bold text-gray-800 md:mb-4">
            OUR HAPPY MOMENTS
          </h2>
          <p className="text-lg text-gray-600 md:mb-6 my-2">
            We bring joys and loves to your besties
          </p>
          <button className="bg-black text-white md:py-2 md:px-6 px-2 py-1 rounded-3xl hover:bg-gray-800">
            Explore Now
          </button>
        </div>
      </div>

      <div className=" my-10">
        <h2 className="text-3xl font-bold mb-6">
          Your Pet Is Our <span className="text-[#BF985F]">Family</span> Member
          <span role="img" aria-label="paw">
            🐾
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
          <button className="bg-black text-white p-2 px-4 rounded-3xl">
            See Gallary ->
          </button>
        </div>
      </div>
    </div>
  );
}
