"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { add } from "../../../../redux/cartslice";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Notification from "@/app/Components/notification";
import { FaStar, FaStarHalfAlt, FaRegStar, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProductTabsWithReviewForm from "@/app/Components/product-tabs-with-review-form";
import RelatedProducts from "@/app/Components/RelatedProducts";

// ✅ Ensure a single Product and Review type definition
interface Review {
  name: string;
  description: string;
  rating: number;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  reviews: Review[];
}

// ⭐ Function to calculate average rating
const calculateAverageRating = (reviews: Review[] = []) => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
};

// ⭐ Function to render star ratings
const renderStars = (rating: number = 0) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex space-x-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => <FaRegStar key={i} />)}
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const params = useParams();
  const productId = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productId) return;

    const getProduct = async () => {
      try {
        const data: Product = await client.fetch(
          `*[_type == "product" && _id == $id][0]`,
          { id: productId }
        );
        if (data) {
          setProduct({ ...data, quantity: 1 });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(add({ ...product, quantity: 1 }));
    }
  };

  const averageRating = product?.reviews ? calculateAverageRating(product.reviews) : 0;

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center"><p className="text-lg font-semibold">Loading product details...</p></div>;
  }

  if (!product) {
    return <div className="w-full h-screen flex justify-center items-center"><p className="text-lg text-red-500 font-semibold">Product not found.</p></div>;
  }

  return (
    <div>
      <div className="w-full h-[286px] bg-[#F6F5FF] relative">
        <div className="absolute top-48 left-10 md:top-20 md:left-60">
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
            Product Details
          </h2>
          <Link href="/" className="px-2">Home</Link>
          <span className="px-2">/</span>
          <span className="text-[#FB2E86] text-[16px] font-[500] px-2">Product Details</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full p-5 border rounded-lg overflow-hidden">
            <Image src={urlFor(product.image).url()} alt={product.name} width={900} height={900} loading="lazy" className="w-full h-auto max-w-[500px] mx-auto object-cover" />
          </div>
          <div className="space-y-4 mt-20">
            <h1 className="text-[36px] font-semibold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              {renderStars(averageRating)}
              <span className="text-gray-600 text-sm">({product.reviews?.length || 0} Reviews)</span>
            </div>
            <p className="text-[#A9ACC6] text-[16px]">{product.description}</p>
              <span className="text-[20px]">Category : {product.category}</span>
            <Notification product={{ _id: product._id, name: product.name, quantity: 1, image: product.image}} onAddToCart={handleAddToCart} />
          {/* Social Media Share Buttons */}
             <div className="flex space-x-4 mt-4">
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : '')}`} target="_blank">
                <FaFacebook className="text-blue-600 text-2xl" />
              </Link>
              <Link href={`https://www.instagram.com`} target="_blank">
                <FaInstagram className="text-pink-500 text-2xl" />
              </Link>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : '')}`} target="_blank">
               <FaLinkedin className="text-blue-700 text-2xl" />
               </Link>
             </div>
          </div>

        </div>
      </div>

      <div className="md:mx-14 lg:mx-48">
        <ProductTabsWithReviewForm product={product} />
      </div>
      <div className="mx-8 md:mx-20 lg:mx-48">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
