"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../../../type/products";
import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProductsQuery);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex justify-center items-center">
        <div>
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700] text-center">
            Shop Grid Default
          </h2>
          <div className="flex justify-center space-x-2 text-sm text-gray-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="#">Page</Link>
            <span>/</span>
            <Link href="#" className="text-[#FB2E86]">
              Shop Grid Default
            </Link>
          </div>
        </div>
      </div>

      {/* Filter & Sorting Section */}
      <div className="flex flex-wrap items-center justify-around gap-4 p-4 border-b border-purple-500 bg-white">
        <h1 className="text-lg font-bold text-purple-700">
          Ecommerce Accessories & Fashion Item
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              id="perPage"
              type="number"
              className="w-16 px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="10"
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading & Error Handling */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-lg font-semibold">Loading products...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-lg text-red-500 font-semibold">
            Failed to load products.
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 mt-10 md:mt-20">
            {products.map((product) => (
              <Link
                href={`/Pages/ShopGridDynamic/product/${product._id}`}
                key={product._id}
              >
                <div className="w-[270px] h-[360px] shadow-lg text-center group relative transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <div className="absolute inset-0 bg-[#2F1AC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center relative z-10">
                    <Image
                      src={
                        product.image
                          ? urlFor(product.image).url()
                          : "/fallback-image.jpg"
                      }
                      alt={product.name || "Product Image"}
                      width={178}
                      height={178}
                      className="w-[178px] h-[178px] object-contain"
                      priority // ✅ Instant Load
                    />
                  </div>
                  <div className="relative z-10 transition-colors duration-300">
                    <h3 className="text-[#FB2E86] text-[18px] font-[lato] font-[700] py-3 group-hover:text-white">
                      {product.name}
                    </h3>
                    <div className="flex justify-center items-center gap-1">
                      <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
                      <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
                      <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px]"></div>
                    </div>
                    <p className="text-[#151875] text-[14px] font-[400] group-hover:text-white">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
