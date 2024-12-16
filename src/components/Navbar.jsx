import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Wrapper */}
      <div className="fixed top-0 w-full z-50 shadow-md">
        {/* Top Bar */}
        <div className="bg-[#EBDDAE] flex flex-col sm:flex-row items-center px-4 sm:px-6 py-3 text-sm font-medium font-montserrat text-gray-800">
          {/* Text Section */}
          <div className="w-full sm:w-auto flex-grow text-center">
            <span>Free Shipping On Orders Over ₹600*</span>
          </div>


          {/* Social Icons */}
          <div className="mt-3 sm:mt-0 flex justify-center sm:justify-end space-x-4">
            {["facebook", "insta", "link", "twiter"].map((icon) => (
              <Link to="#" key={icon} className="hover:text-gray-600">
                <img
                  src={`/home/social/${icon}.png`}
                  alt={icon}
                  className="w-8 h-8"
                />
              </Link>
            ))}
          </div>
        </div>

        <hr className="border-t-2 border-black" />

        {/* Navbar */}
        <nav className="bg-[#EBDDAE] border-b border-gray-300 font-montserrat">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/home/logo.png" alt="Logo" className="w-40 h-auto" />
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden sm:flex items-center space-x-6">
              {[
                { label: "HOME", href: "/" },
                { label: "CATEGORY", href: "/category" },
                { label: "ABOUT US", href: "/about" },
                { label: "BLOG", href: "/blog" },
                { label: "CONTACT US", href: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="hover:text-gray-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 text-2xl"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Utility Links (Desktop) */}
            <div className="hidden sm:flex items-center space-x-6">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="sm:hidden bg-[#EBDDAE] px-4 py-6">
              {[
                { label: "HOME", href: "/" },
                { label: "CATEGORY", href: "/category" },
                { label: "ABOUT US", href: "/about" },
                { label: "BLOG", href: "/blog" },
                { label: "CONTACT US", href: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block py-2 text-gray-800 hover:text-gray-600"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Utility Links */}
              <div className="mt-4">
                <div className="mt-4">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Spacer to avoid overlap */}
      <div className="h-[130px]"></div>
    </>
  );
}
