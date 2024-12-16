import React, { useState } from "react";

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("/home/auth_bg.png")', // Replace with your actual background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card Container */}
        <div className="bg-[#FFFCF3] rounded-lg shadow-lg w-full max-w-2xl">
          {/* Toggle Buttons */}
          <div className="flex justify-between mb-6">
            <button
              className={`px-4 py-2 w-full font-semibold ${
                !isRegister
                  ? "bg-[#EBDDAE] text-white"
                  : "bg-[#FFFCF3] text-gray-600"
              }`}
              onClick={() => setIsRegister(false)}
            >
              Log In
            </button>
            <button
              className={`px-4 py-2 w-full font-semibold ${
                isRegister
                  ? "bg-[#EBDDAE] text-white"
                  : "bg-[#FFFCF3] text-gray-600"
              }`}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>

          {/* Form Section */}
          <div className="p-8">
  <form>
    {isRegister ? (
      <>
        {/* Register Form */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border bg-[#FFFCF3] border-[#060608] rounded-full p-2"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full text-[#060608] border bg-[#FFFCF3] border-[#060608] rounded-full p-2"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            Enter Your Email
          </label>
          <input
            type="email"
            placeholder="Username"
            className="w-full border bg-[#FFFCF3] border-[#060608] rounded-full p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            Enter Your Password*
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full border bg-[#FFFCF3] border-[#060608] rounded-full p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            I Want to find a Puppy
          </label>
          <select className="w-full border bg-[#FFFCF3] border-[#060608] rounded-full p-2">
            <option>I want to find puppy</option>
          </select>
        </div>
      </>
    ) : (
      <>
        {/* Login Form */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Enter Your Email
          </label>
          <input
            type="email"
            placeholder="Username"
            className="w-full border bg-[#FFFCF3] border-[#060608] rounded-full p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            Enter Your Password*
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full border bg-[#FFFCF3] border-[#060608] rounded-full p-2"
          />
        </div>
      </>
    )}

    {/* Privacy Policy */}
    <div className="mt-4 flex items-center justify-between">
      {/* Checkbox and Privacy Policy */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="privacy-policy"
          className="w-4 h-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
        />
        <label
          htmlFor="privacy-policy"
          className="ml-2 text-sm font-medium text-gray-600"
        >
          I accept{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Forgot Password Link */}
      <a
        href="#"
        className="text-sm font-medium text-blue-500 hover:underline"
      >
        Forgot Password?
      </a>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-black text-white rounded-full py-2 mt-6 font-semibold"
    >
      {isRegister ? "Register" : "Log In"}
    </button>

    {/* Social Media Icons */}
    {!isRegister && (
      <div className="mt-6 flex justify-center space-x-4">
        {/* Add your social media icon images here */}
        <a href="#" className="w-8 h-8">
          <img
            src="/home/social/google.png"
            alt="Facebook"
            className="w-full h-full"
          />
        </a>
        <a href="#" className="w-8 h-8">
          <img
            src="/home/social/apple.png"
            alt="Twitter"
            className="w-full h-full"
          />
        </a>
        <a href="#" className="w-8 h-8">
          <img
            src="/home/social/facebook.png"
            alt="Google"
            className="w-full h-full"
          />
        </a>
      </div>
    )}
  </form>
</div>

        </div>
      </div>
    </div>
  );
}
