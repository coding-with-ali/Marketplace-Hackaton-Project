"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search Query State
  const router = useRouter();

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    console.log("Search Query:", searchQuery); // ✅ Debugging
  
    if (searchQuery.trim()) {
      const searchUrl = `/search?query=${encodeURIComponent(searchQuery)}`;
      console.log("Redirecting to:", searchUrl); // ✅ Debugging
  
      router.push(searchUrl); // ✅ Navigate to search page
      setSearchQuery(""); 
    }
  };  


  return (
    <div>
      <div className="bg-[#7E33E0] w-full h-[44px] text-white flex justify-around items-center flex-col gap-2 md:flex-row">
        <div className="md:flex justify-between items-center hidden gap-4 lg:gap-8">
          <div className="flex justify-between items-center gap-2 lg:gap-3">
            <MdOutlineMail />
            <p>mhhasanul@gmail.com</p>
          </div>
          <div className="flex justify-between items-center gap-2 lg:gap-3">
            <LuPhoneCall />
            <p>(12345)67890</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 lg:gap-8">
          <select name="" id="" className="bg-[#7E33E0]">
            <option value="">English</option>
          </select>
          <select name="" id="" className="bg-[#7E33E0]">
            <option value="">USD</option>
          </select>
          <div className="flex justify-between items-center gap-1 lg:gap-2">
            <Link href="/login">Login</Link>
            <GrUserManager size="16px" />
          </div>
          <div className="flex justify-between items-center gap-1 lg:gap-2">
            <Link href="">Wishlist</Link>
            <CiHeart size="16px" />
          </div>
          <Link href="/Pages/Cart">
            <BsCart2 size="16px" />
          </Link>
        </div>
      </div>
      {/* Navbar */}
      <div className="w-full h-[80px] flex justify-around items-center border-b-2">
        <div className="flex justify-center items-center gap-2 w-full px-4 sm:gap-28 sm:px-0">
          {/* Mobile menu icon */}
          {!isMenuOpen ? (
            <FaBars
              size="24px"
              className="lg:hidden hover:text-[#FB2E86] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <FaTimes
              size="24px"
              className="lg:hidden hover:text-[#FB2E86] cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
          {/* Logo */}
          <h3 className="text-[26px] md:text-[34px] font-[Josefin Sans] font-[700]">
            Hekto
          </h3>
          {/* Navigation menu */}
          <div className="hidden lg:flex gap-6">
            <Link href="/" className="hover:text-[#FB2E86] text-lg">
              Home
            </Link>
            <Link href="/Pages/About" className="hover:text-[#FB2E86] text-lg">
              About
            </Link>
            <Link href="/Pages/ShopList" className="hover:text-[#FB2E86] text-lg">
              Products
            </Link>
            <Link href="/Pages/ShopGridDynamic" className="hover:text-[#FB2E86] text-lg">
              Shops
            </Link>
            <Link href="/Pages/Contact" className="hover:text-[#FB2E86] text-lg">
              Contact
            </Link>
          </div>
          {/* Search bar */}
          <form 
  onSubmit={handleSearchSubmit} // ✅ Form submit event
  className="flex w-[220px] md:w-[320px] h-[40px] items-center border-2 rounded-md overflow-hidden"
>
  <input
  id="" name=""
    type="search"
    value={searchQuery}
    onChange={handleSearchChange}
    onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit(e)} // ✅ Pass event
    className="w-full px-3 text-gray-700 outline-none"
    placeholder="Search products..."
  />
  <button
    type="submit" // ✅ Submit button
    className="w-[50px] h-[40px] bg-[#FB2E86] flex items-center justify-center"
  >
    <FaSearch size="20px" className="text-white" />
  </button>
</form>

        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 py-4 border-t">
          <Link href="/" className="hover:text-[#FB2E86] text-lg">
            Home
          </Link>
          <Link href="/Pages/About" className="hover:text-[#FB2E86] text-lg">
            About
          </Link>
          <Link href="/Pages/ShopList" className="hover:text-[#FB2E86] text-lg">
            Products
          </Link>
          <Link href="/Pages/ShopGridDynamic" className="hover:text-[#FB2E86] text-lg">
            Shops
          </Link>
          <Link href="/Pages/Contact" className="hover:text-[#FB2E86] text-lg">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
