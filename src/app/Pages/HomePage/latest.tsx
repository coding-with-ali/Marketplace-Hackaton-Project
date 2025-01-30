import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../../../type/products';
import { client } from '@/sanity/lib/client';
import { six } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

async function fetchProducts(): Promise<Product[]> {
  try {
    return await client.fetch(six, {}, { cache: 'no-store' }); 
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

const Latest = async () => {
  const products = await fetchProducts(); 

  return (
    <div className="py-10 md:px-20 lg:px-28 xl:px-40">
      <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-bold">
        Latest Products
      </h2>

      <div className="flex justify-between items-center w-[350px] md:w-[527px] m-auto my-5 md:my-10 text-[#151875]">
        {["New Arrival", "Best Seller", "Featured", "Special Offers"].map(
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

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5">
          {products.map((product: Product) => (
            <div
              key={product._id}
              className="w-[290px] h-[320px] md:w-[320px] lg:w-[365px]"
            >
              <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
                <div className="relative bg-[#F7F7F7] flex justify-center items-center rounded-lg overflow-hidden">
                  {product && (
                    <div className="absolute top-2 left-2 bg-[#3F509E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Sale
                    </div>
                  )}
                  <Image
                    src={product.image ? urlFor(product.image).url() : '/fallback-image.jpg'}
                    alt={product.name || 'Product Image'}
                    width={223}
                    height={229}
                    className="w-[223px] h-[229px] object-cover"
                    priority // ✅ Instant Image Load
                  />
                </div>

                <div className="flex justify-between items-center mt-3">
                  <h3 className="text-[#151875] text-[16px] font-medium">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-semibold">${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Latest;
