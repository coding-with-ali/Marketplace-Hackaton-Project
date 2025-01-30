import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Herosection() {
  return (
    <div className="bg-[#F2F0FF] w-full h-auto flex flex-col lg:flex-row items-center justify-around p-4 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <Image
          src="/hero1.png"
          alt="Hero"
          width={900}
          height={900}
          className="w-[260px] h-[200px] md:w-[200px] md:h-[240px] xl:w-[280px] xl:h-[300px]"
        />
        <div className="text-center lg:text-left ">
          <h4 className="text-[#FB2E86] text-[16px] font-[lato] font-bold">
            Best Furniture For Your Castle...
          </h4>
          <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-bold font-[Josefin Sans] mt-2">
            New Furniture Collection <br /> Trends in 2020
          </h2>
          <p className="text-[14px] md:text-[16px] font-[lato] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing <br /> in phasellus non in justo.
          </p>
          <button className="w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-[#FB2E86] text-white rounded-md mt-6">
            <Link href="/Pages/ShopList">
            Shop Now
            </Link>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-12 lg:mt-0">
        {/* Background Circles */}
        <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full absolute -top-8 right-5 lg:right-12"></div>
        <div className="bg-[#ECD2FA59] w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"></div>

        {/* Hero Image */}
        <Image
          src="/hero2.png"
          alt="Hero"
          width={900}
          height={900}
          className="absolute top-[25px] md:top-[30px] lg:top-[50px] right-12 lg:right-20 w-[220px] h-[220px] md:w-[330px] md:h-[330px] xl:w-[430px] xl:h-[430px] rounded-full"
        />

        {/* Discount Badge */}
        <div className="bg-[#00C1FE] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full absolute top-[1px] md:top-[1px] lg:top-[4px] right-[1px] md:right-[1px] xl:right-16 flex items-center justify-center">
          <p className="text-white text-[16px] md:text-[20px] xl:text-[26px] font-bold font-[Josefin Sans] text-center">
            50%
            <br />
            off
          </p>
        </div>
      </div>
    </div>
  );
}
