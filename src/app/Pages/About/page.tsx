import Link from "next/link";
import Image from "next/image";
import Brand from '../HomePage/brand'
import Shopex from '../HomePage/shopex'

export default function about () {
  
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className='absolute top-48 left-10 md:top-60 md:left-60'>
          <h2 className='text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]'>About</h2>
          <Link href="" className='px-2 '>Home.</Link>
          <Link href="">Page.</Link>
          <Link href="" className='text-[#FB2E86] text-[16px] font-[500] px-2'>About</Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 py-12 gap-8">
      {/* Image Section */}
      <div className="relative">
        <Image
          src="/about.png"
          alt="Business Meeting"
          width="900"
          height="900"
          className="w-full max-w-md rounded-lg shadow-lg border-b-[10px] border-l-[10px] border-[#2B3CAB]"
        />
      </div>     

      {/* Text Section */}
      <div className="text-center md:text-left space-y-4 max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Know About Our Ecommerce <br /> Business, History
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique aliquam, malesuada diam est. Malesuada sem
          tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae
          lobortis quis bibendum quam.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
          <Link href="/Pages/Contact">
          Contact us
          </Link>
        </button>
      </div>
    </div>
    <Shopex/>
      <Brand/>
    </div>
  );
};
