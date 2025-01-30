import Link from "next/link";
import Brand from '../HomePage/brand'

export default function cart () {
  
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF]">
        <div className='absolute top-48 left-10 md:top-60 md:left-60'>
          <h2 className='text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]'>Order Compelete</h2>
          <Link href="" className='px-2 '>Home.</Link>
          <Link href="">Page.</Link>
          <Link href="" className='text-[#FB2E86] text-[16px] font-[500] px-2'>Order Compelete</Link>
        </div>
      </div>
      <div className="py-20">
        <div className="m-auto w-full md:w-[500px] h-[40vh] text-center">
            <h3 className="text-[30px] md:text-[36px] py-3">Your Order Is Completed! </h3>
            <p className="text-[10px] md:text-[20px] py-3 mb-8">Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
            </p>
            <Link href="/" className=" bg-pink-500 text-white px-4 py-4  rounded w-full hover:bg-pink-600 text-[24px] md:text-base">
                Countinue Shopping
              </Link>
        </div>
      </div>
      <Brand/>
    </div>
  );
};
