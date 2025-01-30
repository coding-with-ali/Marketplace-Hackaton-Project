"use client";

import React, { useEffect, useState } from "react";
import FilterSection from "../Components/FilterSection";
import { Product } from "../../../type/products";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import Link from "next/link";

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFiltersChange = (filters: Record<string, string[]>) => {
    console.log("Filters applied:", filters);

    const filtered = products.filter((product) => {
      // Match category filter
      const matchesCategory =
        !filters.category || // No category filter applied
        filters.category.length === 0 || // Empty category filter
        filters.category.includes(product.category?.toLowerCase() || ""); // Match category

      // Match discount filter
      const discountString = product.discountPercentage
        ? String(product.discountPercentage).toLowerCase()
        : "";
      const matchesDiscount =
        !filters.discountPercentage || // No discount filter applied
        filters.discountPercentage.length === 0 || // Empty discount filter
        filters.discountPercentage.includes(discountString); // Match discount

      // Match price range filter
      const matchesPrice =
        !filters.priceRange || // No price range filter applied
        filters.priceRange.length === 0 || // Empty price range filter
        filters.priceRange.some((range) => {
          const [min, max] = range.split("-").map(Number); // Parse range
          return product.price >= min && product.price <= max; // Check if price is within range
        });

      return matchesCategory && matchesDiscount && matchesPrice; // All filters must match
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex gap-8">
      <FilterSection onFiltersChange={handleFiltersChange} />
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id}>
              <Link href={`/Pages/ShopGridDynamic/product/${product._id}`}>
                <div className="md:flex max-sm:flex-col justify-between w-full p-4 border rounded shadow-md">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={900}
                      height={900}
                      className="w-[300px] h-[250px] object-cover"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <div className="pl-10 pt-5">
                    <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                    <p className="text-gray-500">Price: ${product.price}</p>
                    <p className="text-red-500">Discount: {product.discountPercentage}%</p>
                    <p>Description: {product.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductSection;

