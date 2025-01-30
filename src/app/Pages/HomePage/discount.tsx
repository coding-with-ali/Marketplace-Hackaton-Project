import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Discount() {
  return (
    <div className='lg:py-24'>
    <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-bold">
        Discount Items
      </h2>
      <div className="flex justify-between items-center w-[350px] md:w-[527px] m-auto my-5 md:my-10 text-[#151875]">
        {["Wood Chair", "Plastic Chair", "Sofa Collection"].map(
          (tab) => (
            <p
              key={tab}
              className="hover:text-[#FB2E86] hover:underline cursor-pointer"
            >
              {tab}
            </p>
          )
        )}
      </div>
    <div className=" w-full h-auto flex flex-col lg:flex-row items-center justify-around p-8 lg:px-32 xl:px-60 lg:p-10 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="text-center lg:text-left">
          <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-bold font-[Josefin Sans] mt-2">
          20% Discount Of All Products
          </h2>
          <h4 className="text-[#FB2E86] text-[16px] font-[lato] font-bold">
          Eams Sofa Compact
          </h4>
          <p className="text-[14px] md:text-[16px] font-[lato] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing <br /> in phasellus non in justo.
          </p>
          <div className='flex justify-between items-center flex-wrap'>
            <ul className='grid grid-cols-2 gap-4'>
                <li>Material expose like metals</li>
                <li>Simple neutral colours.</li>
                <li>Clear lines and geomatric figures.</li>
                <li>Material expose like metals</li>
            </ul>
          </div>
          <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
           <Link href="/Pages/ShopList">
            Shop Now
            </Link>
          </button>
        </div>
      </div>

      <div className="relative mt-12 lg:mt-0">
        <div className="bg-[#FFF6FB] w-[250px] h-[250px] md:w-[380px] md:h-[380px] xl:w-[430px] xl:h-[430px] rounded-full"></div>

        <Image
          src="/Chair.png"
          alt="Hero"
          width={900}
          height={900}
          className="absolute top-0 md:-top-8 lg:-top-4 right-5 lg:right-12 w-[200px] h-[300px] md:w-[330px] md:h-[450px] xl:w-[600 px] xl:h-[500px] rounded-full"
        />
      </div>
    </div>
    </div>
  );
}
