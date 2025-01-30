import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../../type/products';
import { client } from '@/sanity/lib/client';
import { five } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

// 🟢 Server-side fetching function
async function fetchProducts(): Promise<Product[]> {
  try {
    return await client.fetch(five, {}, { cache: 'no-store' }); // ⚡ Always Fresh Data
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

const Trending = async () => {
  const products = await fetchProducts(); // ✅ Server-side fetching

  return (
    <div className="py-10 px-10 md:px-20 lg:px-28 xl:px-40">
      <h2 className="text-[24px] md:text-[34px] lg:text-[44px] font-[Josefin Sans] text-center text-[#1A0B5B] font-[700]">
        Trending Products
      </h2>

      <div className="flex justify-around items-center flex-wrap gap-5 mt-10 md:mt-20">
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No trending products available.</p>
        ) : (
          products.map((product: Product) => (
            <div
              key={product._id}
              className="w-[270px] h-[300px] shadow-lg text-center group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-[#2F1AC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
                <div className="w-[270px] h-[216px] bg-[#F6F7FB] flex items-center justify-center relative z-10">
                  <Image
                    src={product.image ? urlFor(product.image).url() : '/fallback-image.jpg'}
                    alt={product.name || 'Trending Product'}
                    width={900}
                    height={900}
                    className="w-[178px] h-[178px]"
                    priority // ✅ Fast Image Loading
                  />
                </div>
                <div className="relative z-10 transition-colors duration-300">
                  <h3 className="text-[#FB2E86] text-[18px] font-[lato] font-[700] py-3 group-hover:text-white">
                    {product.name}
                  </h3>
                  <p className="text-[#151875] text-[14px] font-[400] group-hover:text-white">
                    Price: ${product.price}
                  </p>
                </div>
                <button className="absolute bottom-[72px] left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#05E6B7] text-white text-[14px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  View Cart
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trending;
