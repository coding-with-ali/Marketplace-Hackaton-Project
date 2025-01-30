import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div>
        {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className='absolute top-48 left-10 md:top-60 md:left-60'>
          <h2 className='text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]'>Contact Us</h2>
          <Link href="/" className='px-2 '>Home.</Link>
          <Link href="">Page.</Link>
          <Link href="" className='text-[#FB2E86] text-[16px] font-[500] px-2'>Contact Us</Link>
        </div>
      </div>
    <section className="container mx-auto px-4 py-12 gap-10 items-center">
      {/* Left Side */}
      <div className="grid md:grid-cols-2 md:p-14">
        <div>
        <h2 className="text-[20px] lg:text-[36px] font-bold text-gray-800">Information About Us</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam.
        </p>
        <div className="flex gap-2 mt-4">
          <span className="w-4 h-4 bg-purple-600 rounded-full"></span>
          <span className="w-4 h-4 bg-pink-600 rounded-full"></span>
          <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
        </div>
        </div>
        <div className="md:pl-20 md:pt-0 pt-5">
        <h3 className="text-[20px] lg:text-[36px] font-semibold text-gray-800">Contact Way</h3>
        <ul className="mt-2 space-y-2 text-gray-600 ">
          <li>
            <span className="inline-block w-6 h-6 bg-purple-600 rounded-full mr-2"></span>
            Tel: 877-67-88-99 | shop@store.com
          </li>
          <li>
            <span className="inline-block w-6 h-6 bg-orange-500 rounded-full mr-2"></span>
            20 Margaret St, London, UK
          </li>
          <li>
            <span className="inline-block w-6 h-6 bg-pink-600 rounded-full mr-2"></span>
            Support Forum - 24/7
          </li>
          <li>
            <span className="inline-block w-6 h-6 bg-green-500 rounded-full mr-2"></span>
            Free shipping on all orders
          </li>
        </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-10 grid lg:grid-cols-2">
        <div>
        <h2 className="text-[20px] md:text-[36px] font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input id="" name="" type="text" placeholder="Your Name*" className="border p-3 w-full rounded-md" />
            <input id="" name="" type="email" placeholder="Your E-mail" className="border p-3 w-full rounded-md" />
          </div>
          <input id="" name="" type="text" placeholder="Subject*" className="border p-3 w-full rounded-md" />
          <textarea placeholder="Type Your Message*" className="border p-3 w-full rounded-md h-32"></textarea>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md">Send Mail</button>
        </form>
      </div>
      <div>
        <Image
        src="/contact.png"
        alt="Contact"
        width="900"
        height="900"
        className="w-[500px] h-[300px] mt-10 md:h-[500px] md:ml-28"
        />
      </div>
      </div>
    </section>
    </div>
  );
};

export default ContactSection;
